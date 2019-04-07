
#include "multicast.h"

#include <QDebug>

Multicast::Multicast(QObject *parent) : QObject(parent), thread1(&audioList, streamer, device)
{
    format.setCodec("audio/pcm");
    format.setByteOrder(QAudioFormat::LittleEndian);
    format.setSampleType(QAudioFormat::SignedInt);

    //default
    format.setSampleRate(44100);
    format.setChannelCount(2);
    format.setSampleSize(16);

    streamer = new QAudioOutput(format, this);
    streamer->setBufferSize(500000);
    streamer->setVolume(1.0);
    device = streamer->start();
}

void Multicast::joinMulticast(QString ip, quint16 port)
{
    udpSocket4.bind(QHostAddress::AnyIPv4, port, QUdpSocket::ShareAddress);
    udpSocket4.joinMulticastGroup(QHostAddress(ip));
    connect(&udpSocket4, &QUdpSocket::readyRead, this, &Multicast::receivingData);

    thread1.start();
}

void Multicast::receivingData()
{

    QByteArray *temp = new QByteArray;
    while (udpSocket4.hasPendingDatagrams())
    {
        temp->resize(int(udpSocket4.pendingDatagramSize()));
        udpSocket4.readDatagram(temp->data(), temp->size());
        qDebug() << "ready";
        pushToBuffer(temp);
    }
}

void Multicast::playMulticast()
{

    //    started_stream = true;
}

void Multicast::pushToBuffer(QByteArray *datagram)
{
    audioList.append(datagram);

    //    int firstSize = audioList.first()->size();
    //    if(streamer->bytesFree()>firstSize){
    //        qDebug()<< "device data"<< device->write(audioList.first()->data(),firstSize)<<"down from "<<firstSize;
    //        qDebug()<<streamer->bufferSize()<<streamer->bytesFree();
    //    qDebug()<< "device data"<< device->write(datagram.data(), datagram.size())<<"down from "<<datagram.size();
    //    qDebug()<<streamer->bufferSize()<<streamer->bytesFree();
    //        delete audioList.first();
    //        audioList.pop_front();
    //    }
}
