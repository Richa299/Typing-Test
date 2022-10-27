import React from "react";
import { Alert, Slide, Snackbar } from "@mui/material";
// import Slide from "@mui/material";
// import Alert from "@mui/material";
function CapsLock({open}){
    return (
       <div>
        <Snackbar
            open={open}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}>
                 <Slide in={open} >
            <Alert severity="warning">
                caps
            </Alert>
        </Slide>
        </Snackbar>
       
       </div>
    )
}
export default CapsLock;