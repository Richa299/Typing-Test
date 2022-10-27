import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { auth } from "../firebaseConfig";
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';

function Login({handleClose}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAlert} = useAlert();
    
    const handleSubmit = () =>{
        if(!email || !password){
            setAlert({
                open: true,
                type: 'warning',
                message: 'fill all details'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);;
            return;
        }

        auth.signInWithEmailAndPassword(email,password).then((ok)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'logged in'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
            handleClose();
        }).catch((err)=>{
            console.log(err.code, err.message);
            setAlert({
                open: true,
                type: 'error',
                message: 'not able to login'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
        });
    }
    const {theme} = useTheme();

    return (
        <Box                                    // from material ui
        p={3}
        style={{
           padding:10,
           display:"flex",
           flexDirection:"column",
           gap:"20px",
           backgroundColor:"transparent"
        }}>
           <TextField 
           variant="outlined"
           type="email"
           label="Enter email"
           InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color: theme.title,
            }
        }
        }
           onChange={(e)=> setEmail(e.target.value)}>
   
           </TextField>
           <TextField 
           variant="outlined"
           type="password"
           label="Enter Password"
           InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color: theme.title,
            }
        }
        }
           onChange={(e)=> setPassword(e.target.value)}>
               
           </TextField>
          
           <Button
           variant="contained"
           size="large"
           style={{backgroundColor:theme.title, color:theme.background}}
           onClick = {handleSubmit}>
               Log In
   
           </Button>
        </Box>
    )
}
export default Login