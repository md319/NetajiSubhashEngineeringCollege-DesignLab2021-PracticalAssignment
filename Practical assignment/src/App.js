import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import StorageIcon from '@material-ui/icons/Storage';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h2" className={classes.bigSpace} color="blue">
             INVEST AND EARN
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="green">
            Trusted by Millions of Indians. Start Investing today
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<StorageIcon style={{fill: "#4dd275", height:"125", width:"125"}}/>}  title="MUTUAL FUNDS" btnTitle="Invest Now" />
          <Grid icon={<ShowChartIcon style={{fill: "#586ce0", height:"125", width:"125"}}/>} title="STOCKS" btnTitle="Invest Now"/>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<BarChartIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="FUTURE & OPTIONS" btnTitle="Show me More"/>
          <Grid icon={<AttachMoneyIcon style={{fill: "#de4f3f", height:"125", width:"125"}}/>}  title="US STOCKS" btnTitle="Get Started"/>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>  
          <Grid icon={<ViewAgendaIcon style={{fill: "#c6a45c", height:"125", width:"125"}}/>}  title="GOLD" btnTitle="Buy Now"/>
          <Grid icon={<AccountBalanceIcon style={{fill: "#30d3c7", height:"125", width:"125"}}/>} title="FIXED DEPOSIT" btnTitle="Deposit Now"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
