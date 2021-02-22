import React from "react"
import './App.css'
// import { orange } from '@material-ui/core/colors'
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper  from '@material-ui/core/Paper'
import Grid  from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// custom styles
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    border: 0,
    marginButtom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '５px 30px'
  }
})

// custome theme
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginButtom: 15,
    }
  },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: orange[500],
  //   }
  // }
})

// 
function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

//
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
        'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
  )
}

// App component
function App() {
  return (    
    <ThemeProvider theme={theme}>
      <Container maxWidth="large">
        <div className="App">
          <header className="App-header">
            {/* AppBar */}
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>           
            </AppBar>
            {/* Typography */}
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material ui
            </Typography>
            <ButtonStyled />
            {/* Grid */}
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={3}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Paper style={{height:75, width:'100%'}}/>
              </Grid>
            </Grid>

            {/* <TextField 
              variant="outlined"
              color="secondary"
              type="email"
              label="The Time"
              placeholder="test@test.com"
            /> */}
            Hello World
            <CheckboxExample />
            <ButtonGroup>
            <Button 
              startIcon={<SaveIcon />}
              endIcon
              // onClick={()=>alert("Hello")}
              size="large"
              style={{
                fontSize: 24
              }}
              // disabled
              variant="contained" 
              color="secondary"
            >
              Save
            </Button>
            <Button 
              startIcon={<DeleteIcon />}
              endIcon
              size="large"
              style={{
                fontSize: 24
              }}
              variant="contained" 
              color="secondary"
            >
              Discard
            </Button>
          </ButtonGroup>

          </header>
        </div>

      </Container>
    </ThemeProvider>
  );
}

export default App;