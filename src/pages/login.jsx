/**
 * @module       pages
 * @file         login.jsx
 * @description  creates form for login
 * @author       Saurbah <charjan44@gmail.com>
 * @since        14/08/2021
----------------------------------------------------------------------------------------------- */
import { Avatar, Button, Grid, Paper,TextField} from '@material-ui/core';
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../scss/login.scss';
   
const Login=()=>{ 
    const [room, setRoom] = React.useState('');
    const initialValues ={  
        userName:'',
    } ;
    /**
   * @description schema validation for login page
   */
    const validationSchema=Yup.object().shape({
        email:Yup.string().email('Enter valid mail address').required('Required'),
    });
    const handleChange = (event) => {
        setRoom(event.target.value); 
        console.log(room)
      };
      const onSubmit=(values,props)=>{
            setTimeout(()=>{
                props.resetForm();
            },1000); 
    };
    /**
     * @description creating login page
     */
    return(
        <Grid>
            <Paper elevation={10} className="paperStyle">
                <Grid align='center'>
                <Avatar>
                <AccountBoxIcon/>
                </Avatar>
                <h2 className="header" data-testid="title">Chat App</h2>
                <h2 className="header" data-testid="login">Login</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {()=>(
                    <Form data-testid="form">
                        <Field as={TextField} fullWidth autoComplete="off" name='userName' label='User Name' placeholder= 'Enter your Name'  required  helperText={<ErrorMessage name="userName">{ msg => <div className="errorMessage">{msg}</div> }</ErrorMessage>}/>
                        <FormControl  fullWidth>
                        <InputLabel id="room">Room</InputLabel>
                         <Select
                             labelId="room"
                              id="room"
                             value={room}
                             onChange={handleChange}
                         >
                          <MenuItem value="">
                           <em>None</em>
                             </MenuItem>
                             <MenuItem value={"xyz"}>ABC</MenuItem>
                             <MenuItem value={"abc"}>XYZ</MenuItem>
                          </Select>
                        </FormControl>
                        <Button type='submit' fullWidth className="buttonMargin"  data-testid="submit">Login</Button>
                    </Form>
                )}
                </Formik>
            </Paper>
        </Grid>
    );
};
export default Login;