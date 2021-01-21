import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        marginLeft:10,
        marginRight:1200 ,
    marginTop:100,
      minWidth: 275,
    },
    bullet: {
        
      display: 'inline-block',
      margin: '1px',
      transform: 'scale(1)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
        marginTop:12,
      marginBottom: 12,
    },
  });

function Billing() {
    const classes = useStyles();
    const bull = "hi nani";
    return (
        
        <div className="Billing_system">
            
            <div className="billing_system_card">
            <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         
            </div>
            
        </div>
    )
}

export default Billing
