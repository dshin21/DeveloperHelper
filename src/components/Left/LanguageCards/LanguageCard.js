import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export class LanguageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageName: this.props.languageName
        };
    };

    onClickCard = () => {
        //TODO: when clicked, fill all search bars w/ the language
    };

    render() {
        const {classes} = this.props;

        return (
          <Card className={classes.card}>
              <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require(`./images/${this.state.languageName}.png`)}
                    title={this.state.languageName}
                    style={styles.media}
                    onClick={this.onClickCard}
                  />
              </CardActionArea>
          </Card>
        );
    }
}

LanguageCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    card:  {
        maxWidth: 100,
    },
    media: {
        height: 100,
    },
});

export default withStyles(styles)(LanguageCard);

