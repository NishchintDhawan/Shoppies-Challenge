import React, {useState} from "react";
import './App.css';
import Home from './components/Home';
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import MovieBox from "./components/MoviesBox";
import Box from '@material-ui/core/Box';

function App() {

    const[results,setResults] = useState([])

    const useStyles = makeStyles((theme) => ({
        appBar: {
            backgroundColor:'#fff'
        },
        root:{
            flexGrow: 1
        },
        moviebox:{
            width: 800
        }
    }));

    const updateResults = (value) =>{
        setResults(value);
    }

    const classes = useStyles();
    return (

     <div className='App'>
         <div className={classes.root}>
             <Grid item md={12}>
                 <Home/>
             </Grid>
            <Grid container>
                <Box m={3} pl={3}>
                    <Search results = {updateResults}/>
                </Box>
            </Grid>
             <Grid container >
                 <Box m={3} pl={3} className={classes.moviebox}>
                 <MovieBox results = {results}/>
                 </Box>
             </Grid>

         </div>
     </div>
      );
}

export default App;
