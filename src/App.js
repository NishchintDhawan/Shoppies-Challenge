import React, {useState} from "react";
import './App.css';
import Home from './components/Home';
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import MovieBox from "./components/MoviesBox";

function App() {

    const[results,setResults] = useState([])

    const useStyles = makeStyles((theme) => ({
        appBar: {
            backgroundColor:'#fff'
        },
        root:{
            flexGrow: 1
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
            <Grid container spacing={10}>
             <Grid item md={6} sm={4}>
                <Search results = {updateResults}/>
                 <Grid item md={12} sm={2}>
                     <MovieBox results = {results}/>
                 </Grid>
             </Grid>
            </Grid>
         </div>
     </div>
      );
}

export default App;
