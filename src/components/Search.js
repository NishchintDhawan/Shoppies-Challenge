import React, {useState} from 'react';
import {makeStyles, TextField} from "@material-ui/core";
import axios from "axios";

const Search = (props) => {


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [results,setResults] = useState([])
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=${apiKey}`;

    const getResults = async () =>{
            axios.get(apiURL).then((response) => {
                //check why results are not being updated
                setResults([response.data.Search])
                props.results(response.data.Search)
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
    }

    const submitSearch = (e) => {
            e.preventDefault();
            if(search) {
                getResults()
            }
        }

        return (
            <form
                name="search"
                onChange={e => setSearch(e.target.value)}
                onSubmit={e => submitSearch(e)}
                className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Enter movie Name"/>
            </form>
        );
    }

export default Search;