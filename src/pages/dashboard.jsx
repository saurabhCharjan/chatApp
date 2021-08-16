import { Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SendIcon from '@material-ui/icons/Send';
import "../scss/dashboard.scss"

const Dashboard=()=>{ 
    return(
        <Grid className="root">
            <Paper elevation={20} className="activeUser">
              <h3>Active User:</h3>  
            </Paper>
            <Grid className="chatBox"> 
            <Paper elevation={20} className="chat">
                <Grid className="icon">
                <h2><MeetingRoomIcon/>  Room Name</h2>
                </Grid>
            </Paper>
            <Grid className="message">
            <TextField placeholder= 'Enter your Message' fullWidth/>
            <SendIcon/>
            </Grid>
            </Grid>
        </Grid>
    )
}
export default Dashboard;