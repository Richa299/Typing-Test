import AccountIcon from "./AccountIcon"
import { Modal } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header(){
    const navigate = useNavigate();
    return(
        <div className="header">
             <Link to='/'>
        <div className="logo" style={{cursor:'pointer', fontSize:'2rem'}}>
            Typo
        </div>
      </Link>
            
            <div className="icons"><AccountIcon></AccountIcon></div>
        </div>
    )
}
export default Header