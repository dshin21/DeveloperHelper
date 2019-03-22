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

export class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {classes} = this.props;

        return (
          <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                  <div className={classes.root}>
                      <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography className={classes.heading}>Expansion Panel 1</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <Youtube/>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography className={classes.heading}>Expansion Panel 2</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <Typography>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                  ex,
                                  sit amet blandit leo lobortis eget.
                              </Typography>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>
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
    root:    {
        width: '50%',
    },
    heading: {
        fontSize:   theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

export default withStyles(styles)(Left);

