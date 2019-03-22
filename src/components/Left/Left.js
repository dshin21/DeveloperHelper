import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import Youtube from './Youtube/components/Youtube';
import LanguageCards from './LanguageCards/LanguageCards';

const style_override = {
    display: 'inline-block'
};

export class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
        (function() {
            var cx = '011491087869558482550:dshmqffh9qe';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        })();
    }

    render() {
        const {classes} = this.props;

        return (
          <Grid container className={classes.root} spacing={16} style={style_override}>
              <Grid item xs={12}>
                  <LanguageCards/>
              </Grid>
              <Grid item xs={12}>
                  <div className={classes.rootDrawer}>
                      <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography className={classes.heading}>Youtube</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <Youtube/>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                      {/*<ExpansionPanel>*/}
                          {/*<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>*/}
                              {/*<Typography className={classes.heading}>Expansion Panel 2</Typography>*/}
                          {/*</ExpansionPanelSummary>*/}
                          {/*<ExpansionPanelDetails>*/}
                          {/**/}
                          {/*</ExpansionPanelDetails>*/}
                      {/*</ExpansionPanel>*/}
                  </div>
              </Grid>
          </Grid>
        );
    }
}

Left.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    root:       {
        width: '50%',
    },
    rootDrawer: {
        width: '100%',
    },
    heading:    {
        fontSize:   theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

export default withStyles(styles)(Left);

