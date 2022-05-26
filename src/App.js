import React from 'react'
// import {Button, Stack} from "@mui/material";
import {Navbar} from "./components/Navbar";
import {Leftbar} from "./components/Leftbar";
import {Grid} from "@mui/material";
import {Feed} from "./components/Feed";
import {Rightbar} from "./components/Rightbar";
import {makeStyles} from "@mui/styles";
import {Add} from "./components/Add";

const App = () => {
    const useStyle = makeStyles(theme => ({
        right: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    }))
    const {right} = useStyle()
    return (
        <div className="app">
            <Navbar/>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Leftbar/>
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed/>
                </Grid>
                <Grid item sm={3} className={right}>
                    <Rightbar/>
                </Grid>
            </Grid>
            <Add/>
        </div>
    )
}
export default App


