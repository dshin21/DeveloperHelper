import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LanguageCard from './LanguageCard';

export class LanguageCards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {classes} = this.props;

        return (
          <Grid container className={classes.root} spacing={16}>
              <Grid item xs={4}>
                  <LanguageCard languageName='js'/>
              </Grid>
              <Grid item xs={4}>
                  <LanguageCard languageName='py'/>
              </Grid>
              <Grid item xs={4}>
                  <LanguageCard languageName='java'/>
              </Grid>
              <Grid item xs={4}>
                  <LanguageCard languageName='html'/>
              </Grid>
              <Grid item xs={4}>
                  <LanguageCard languageName='css'/>
              </Grid>
              <Grid item xs={4}>
                  <LanguageCard languageName='cpp'/>
              </Grid>
          </Grid>

        );
    }
}

LanguageCards.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    card:  {
        maxWidth: 345,
    },
    media: {
        height: 150,
    },
});

export default withStyles(styles)(LanguageCards);

