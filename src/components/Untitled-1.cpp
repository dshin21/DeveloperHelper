/*------------------------------------------------------------------------------------------------------------------
-- SOURCE FILE: client.cpp - A class that contains all functionalities to client.
--
-- PROGRAM:     commAudio_music_player.exe
--
-- FUNCTIONS:
--           Client(QWidget *parent = nullptr);
--           ~Client();
--      
--          
--          void init_client_ui();
--          void init_local_playback_ui();
--          void init_stream_from_server_ui(QList<QString>);
--          void init_download_ui(QList<QString>);
--          void init_voice_ui(QList<QString>);
--          QList<QString> remove_header_info(QString);
--      
--      
--      signals:
--      
--      public slots:
--          void slot_client_connect_to_server();
--          void slot_local_playback_onclick_choose_song();
--          void slot_client_received_data_from_server();
--      private slots:
--          void on_pushButton_clicked();
--
-- DATE:        Mar.25, 2019
--
-- REVISIONS:   None
--
-- DESIGNER:    Ziqian Zhang, Daniel Shin
--
-- PROGRAMMER:  Ziqian Zhang, Daniel Shin
--
-- NOTES:
--              This class initializes the client UI, local_playback, stream_from_server,download,
----------------------------------------------------------------------------------------------------------------------*/
#include "client.h"

#include <QNetworkInterface>
#include <QtNetwork>
/*------------------------------------------------------------------------------------------------------------------
-- FUNCTION:    Client
--
-- DATE:        Mar.25, 2019
--
-- DESIGNER:    Ziqian Zhang, Daniel Shin
--
-- PROGRAMMER:  Ziqian Zhang, Daniel Shin
--
-- INTERFACE:   Client::Client(QWidget *parent)
--                  QObject *parent: this is parent of the QObject
--
-- RETURNS:     constructor
--
-- NOTES:
--              This is the constructor of Client Class. It initialize UI, local_playback,
--              stream_from_server,download. It set the socket for all client class.
----------------------------------------------------------------------------------------------------------------------*/
Client::Client(QWidget *parent)
    : QWidget(parent),
      ui(new Ui::Client),
      local_playback(new LocalPlayback),
      stream_from_server(new StreamFromServer),
      download(new DownLoad),
      voice(new Voice),
      multicast(new Multicast)
{
    ui->setupUi(this);
    tcp_socket = new QTcpSocket(this);

    stream_from_server->set_socket(tcp_socket);
    download->set_socket(tcp_socket);
    voice->set_socket(tcp_socket);

    init_client_ui();
}
/*------------------------------------------------------------------------------------------------------------------
-- FUNCTION:    Client
--
-- DATE:        Mar.25, 2019
--
-- DESIGNER:    Ziqian Zhang, Daniel Shin
--
-- PROGRAMMER:  Ziqian Zhang, Daniel Shin
--
-- INTERFACE:   Client::~Client()
--
-- RETURNS:     destructor
--
-- NOTES:
--              This is the destructor of Client Class. This is called when program exit.
--              It will release UI.
----------------------------------------------------------------------------------------------------------------------*/
Client::~Client()
{
    delete ui;
}
/*------------------------------------------------------------------------------------------------------------------
-- FUNCTION:    init_client_ui
--
-- DATE:        Mar.25, 2019
--
-- DESIGNER:    Ziqian Zhang, Daniel Shin
--
-- PROGRAMMER:  Ziqian Zhang, Daniel Shin
--
-- INTERFACE:   void Client::init_client_ui()
--
-- RETURNS:     void
--
-- NOTES:
--              This is the  QT slot function. It will connect click button with 
--              slot_client_connect_to_server slot
----------------------------------------------------------------------------------------------------------------------*/
void Client::init_client_ui()
{
    connect(ui->btn_client_go, &QPushButton::clicked, this, &Client::slot_client_connect_to_server);

    init_local_playback_ui();
}

/*------------------------------------------------------------------------------------------------------------------
-- FUNCTION:    init_local_playback_ui
--
-- DATE:        Mar.25, 2019
--
-- DESIGNER:    Ziqian Zhang, Daniel Shin
--
-- PROGRAMMER:  Ziqian Zhang, Daniel Shin
--
-- INTERFACE:   void Client::init_local_playback_ui()
--
-- RETURNS:     void
--
-- NOTES:
--              This is the  QT slot function. It will connect the buttons in local playback panel.
----------------------------------------------------------------------------------------------------------------------*/
void Client::init_local_playback_ui()
{
    connect(ui->btn_local_select_music_file, &QPushButton::clicked, this, &Client::slot_local_playback_onclick_choose_song);
    connect(ui->btn_local_play, &QPushButton::clicked, local_playback, &LocalPlayback::play);
    connect(ui->btn_local_pause, &QPushButton::clicked, local_playback, &LocalPlayback::pause);
}
/*------------------------------------------------------------------------------------------------------------------
-- FUNCTION:    init_stream_from_server_ui
--
-- DATE:        Mar.25, 2019
--
-- DESIGNER:    Ziqian Zhang, Daniel Shin
--
-- PROGRAMMER:  Ziqian Zhang, Daniel Shin
--
-- INTERFACE:   void Client::init_stream_from_server_ui()
--
-- RETURNS:     void
--
-- NOTES:
--              This is the  QT slot function. It will connect the buttons in Stream panel.
----------------------------------------------------------------------------------------------------------------------*/
void Client::init_stream_from_server_ui(QList<QString> received_playlist)
{
    connect(ui->btn_stream_play, &QPushButton::clicked, stream_from_server, &StreamFromServer::play);
    connect(ui->btn_stream_pause, &QPushButton::clicked, stream_from_server, &StreamFromServer::pause);
    connect(ui->stream_combo_box, QOverload<int>::of(&QComboBox::currentIndexChanged), stream_from_server, &StreamFromServer::slot_get_stream_combo_box_idx);
    connect(ui->toolBox, &QToolBox::currentChanged, stream_from_server, &StreamFromServer::slot_tab_idx_changed);

    for (int i = 0; i < received_playlist.size(); ++i)
        ui->stream_combo_box->addItem(received_playlist[i]);
}

void Client::init_download_ui(QList<QString> received_playlist)
{
    connect(ui->btn_download, &QPushButton::clicked, download, &DownLoad::slot_stream_onclick_download);
    connect(ui->download_combo_box, &QComboBox::currentTextChanged, download, &DownLoad::slot_combobox_changed);
    connect(ui->download_combo_box, QOverload<int>::of(&QComboBox::currentIndexChanged), download, &DownLoad::slot_get_stream_combo_box_idx);

    for (int i = 0; i < received_playlist.size(); ++i)
        ui->download_combo_box->addItem(received_playlist[i]);
}

void Client::init_voice_ui(QList<QString> received_ip_list)
{
    connect(ui->voice_combo_box, &QComboBox::currentTextChanged, voice, &Voice::slot_get_voice_combo_box_text);
    connect(ui->btn_voice_connect, &QPushButton::clicked, voice, &Voice::slot_voice_onclick_connect);
    connect(ui->btn_voice_disconnect, &QPushButton::clicked, voice, &Voice::slot_voice_onclick_disconnect);
    connect(ui->toolBox, &QToolBox::currentChanged, voice, &Voice::slot_tab_idx_changed);

    ui->voice_combo_box->clear();

    for (int i = 0; i < received_ip_list.size(); ++i)
    {
        ui->voice_combo_box->addItem(received_ip_list[i]);
        qDebug() << received_ip_list[i];
    }
}

void Client::slot_local_playback_onclick_choose_song()
{
    local_playback->current_file = QFileDialog::getOpenFileName(this,
                                                                tr("Select a .wav file to listen"),
                                                                "./",
                                                                nullptr);
}

void Client::slot_client_connect_to_server()
{
    connect(tcp_socket, &QIODevice::readyRead, this, &Client::slot_client_received_data_from_server);
    connect(tcp_socket, &QIODevice::readyRead, download, &DownLoad::download);

    QString server_ip = ui->lineEdit_client_ip->text();
    quint16 server_port = quint16(ui->lineEdit_client_port->text().toShort());

    tcp_socket->connectToHost(QHostAddress(server_ip), server_port);
}

void Client::slot_client_received_data_from_server()
{
    QString received_data_string = tcp_socket->peek(1);

    if (received_data_string == 'I')
    {
        //initial connect data
        received_data_string = QString(tcp_socket->readAll());
        QList<QString> received_data = remove_header_info(received_data_string);
        QList<QString> received_playlist = received_data[0].split(";");
        QList<QString> received_ip_list = received_data[1].split(";");

        init_stream_from_server_ui(received_playlist);
        init_download_ui(received_playlist);
        init_voice_ui(received_ip_list);
        qDebug() << received_data_string;
    }
}

QList<QString> Client::remove_header_info(QString received_data_string)
{
    QString temp = received_data_string;
    temp.remove(0, 2);
    temp.remove(temp.size() - 2, 2);

    QList<QString> result = temp.split("|");
    result[0].remove(result[0].length() - 1, 1);

    return result;
}

/************************************************************************************
 * FUNCTION:   on_pushButton_clicked
 *
 * DATE:        March 30, 2019
 *
 * REVISION:    March 30, 2019
 *                  -initial start
 *
 * DESIGNER:    Evan Zhang
 *
 * PROGRAMMER:  Evan Zhang
 *
 * INTERFACE:   void Client::on_pushButton_clicked();
 *
 * RETURN:      void
 *
 * NOTES:
 * Button listener for user input to select to join multicast
 * **********************************************************************************/
void Client::on_pushButton_clicked()
{
    //capture
    QString multicast_server_ip = ui->lineEdit->text();
    quint16 multicast_server_port = quint16(ui->lineEdit_2->text().toShort());
    qDebug() << multicast_server_ip + " " + multicast_server_port;
    //bind
    multicast->joinMulticast(multicast_server_ip, multicast_server_port);
}
