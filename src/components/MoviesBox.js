import React from 'react';
import MovieCard from "./MovieCard";
import {Grid, GridList, GridListTile, ListItem, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: "100%",
        height: "100%",
    },
    gridListItem:{
        padding: 5
    },
    noresults: {

    }
}));

const MovieBox = (props) => {
    const classes = useStyles();

    const results = props.results;
    //put the map function to return the list of items
    return (
    <div className={classes.root}>
        <Grid container className={classes.gridList} justify="flex-start">
                {results ? (
                    results.map( value => (
                    <Grid className={classes.gridListItem} item md={6} key={value.title}>
                       <MovieCard title = {value.Title}/>
                    </Grid>
                        )
                    )): (<div className={classes.noresults} >
                        <Typography variant="h6" component="h2">No results found.</Typography>
                    </div>)}
        </Grid>
    </div>
    );
}


export default MovieBox;