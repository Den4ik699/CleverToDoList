import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Header = (props) => {

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.gridItem} xs={2}>
                <Typography variant='h4'>
                    Tasker
                </Typography>
            </Grid>
            <Grid item className={classes.gridItem} xs={8}></Grid>
            <Grid item className={classes.gridItem} xs={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={props.signOut}>SignOut</Button>
            </Grid>
        </Grid>
    )
}
export default Header;