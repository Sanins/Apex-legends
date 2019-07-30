import React, { useRef, useEffect } from "react";
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import useLegendsService from "./Services/UseLegendsService";
import { LegendListProps } from '../Types/Types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dot: {
      position: 'absolute',
      top: 0,
    },
    card: {
      position: 'relative',
    },
    accordion__heading: {
      color: '#FFF',
      width: '100%',
    },
    accordion__items: {
      position: 'relative',
      padding: '0 20px',
      color: '#FFF',  
    },
    [theme.breakpoints.up('sm')]: {
      card: {
        position: 'relative',
      },
      accordion__heading: {
        color: '#FFF',
        width: '200px',
        position: 'fixed',
        marginTop: '64px',
      },
      accordion__items: {
        position: 'absolute',
        top: 0,
        padding: '0 20px',
        marginLeft: '200px',
        color: '#FFF',  
      }
    }
  }),
);

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: 'black',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    position: 'unset',
    boxShadow: 'none',
    '&:not(:first-child)': {
      borderTop: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      background: 'blue',
      pointerEvents: 'none',
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun: any) => useEffect(fun, [])

const LegendList: React.FC<{}> = () => {
  const classes = useStyles();

  const service = useLegendsService();

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const myRef = useRef(null)

  useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
  
  return (
    <>
      <div ref={myRef} className={classes.dot}></div> 

      
      <div className={classes.card}>
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
        
        {service.status === 'loaded' &&

        <div>
          {service.payload.map((legends: LegendListProps, key:any) => (
          <ExpansionPanel
            square 
            expanded={expanded === key}
            onChange={handleChange(key)}
          >
            <ExpansionPanelSummary 
              onClick={()=>scrollToRef(myRef)} 
              style={{top: key * 50 + 'px'}} 
              className={classes.accordion__heading} 
              aria-controls="panel1d-content" 
              id="panel1d-header"
            >
              <div>
                <img style={{width: '100px'}} src={require(`./Images/${legends.name}.png`)}/>
              </div>
              <Typography>{legends.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.accordion__items}>
              <Typography>
                {legends.function}
              </Typography>
              <img src={require(`./Images/${legends.name}.png`)}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          ))}
        </div>

        }
      </div>

      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default LegendList;
