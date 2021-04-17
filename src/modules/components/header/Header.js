import React from 'react';
import CustomRouterLink from "../../ui/components/CustomRouterLink";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header() {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Grid
                        container
                        justify='space-evenly'
                    >
                        <Grid item>
                            <CustomRouterLink to='/dashboard'>Dashboard</CustomRouterLink>
                        </Grid>
                        <Grid item>
                            <CustomRouterLink to='/users'>Users</CustomRouterLink>
                        </Grid>
                        <Grid item>
                            <CustomRouterLink to='/albums'>Albums</CustomRouterLink>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    );
}