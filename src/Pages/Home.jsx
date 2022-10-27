import TypingBox from '../MyComponents/TypingBox'
import Footer from '../MyComponents/Footer';
import { GlobalStyles } from '../styles/global';
import Header from '../MyComponents/Header';
import React from 'react';

function Home(){
   // const {theme}=useTheme()
    return (
        //<ThemeProvider theme={theme}>
        <div className="canvas">
      
     <Header/>
     <TypingBox/>
     <Footer/>
     </div>
    // </ThemeProvider>
    )
}
export default Home