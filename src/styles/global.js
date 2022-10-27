import { createGlobalStyle } from "styled-components";



export const GlobalStyles=createGlobalStyle` 
body{
    background: ${({theme})=> theme.background};
    color:${({theme})=> theme.color};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  
}
.user-profile{
    width:1000px;
    margin:auto;
    display:flex;
    min-height:15rem;
    background:  ${ ({theme})=> theme.typeBoxText };
    border-radius: 30px;
}
.title{
    font-size: 20px;
    color: ${ ({theme})=> theme.typeBoxText };
}
.subtitle{
    font-size: 30px;
    color: ${ ({theme})=> theme.title };
}
.hint{
    kbd{
        background-color: ${ ({theme})=> theme.title };
        color: ${ ({theme})=> theme.background };
        padding: 2.5px 5px;
        border-radius: 3px;
    }
}
.instruction{
    color: ${ ({theme})=> theme.title };
}
.graph{
    height:80%;
}
.heading{
    //color:white;
    font-size:20;
}

.actual-footer{
    display:flex;
    justify-content: space-between;
    width: 1000px;
}
.canvas{
    text-align:center;
    justify-content:center;
    align-items:center;
    display:grid;
    grid-template-row: auto 2fr auto;
    gap:0.3rem;
    min-height:100vh; 
    min-width:100vw;
}
.typing-box{
    display:flex;
    text-align:center;
    max-width:700px;
    overflow:hidden;
    max-height:150px;
   //color:white;
   flex-wrap:wrap;
}

.words{
    margin-left:5px;
    margin-right:5px;
    padding:2px;
    align-content:center;
    color: ${ ({theme})=> theme.typeBoxText}
}
.char.correct{
    color: ${ ({theme})=> theme.title };
}
.hidden-input{
    opacity:0;
}
.correct{
    color:green;
}
.incorrect{
    color:red;
}
.current{
    border-left:1px solid white;
    animation:blinking 2s infinite;
    @keyframes blinking{
        0% {border-left-color:${ ({theme})=> theme.title };}
        25% {border-left-color:${ ({theme})=> theme.background };}
        50% {border-left-color:${ ({theme})=> theme.title };}
        75% {border-left-color:${ ({theme})=> theme.background };}
        100% {border-left-color:${ ({theme})=> theme.title };}
    }
}
.previous{
    border-left:1px solid black;
}
.right{
    border-right:1px solid white;
    animation:blinkingTwo 2s infinite;
    @keyframes blinkingTwo{
        0% {border-right-color:${ ({theme})=> theme.title };}
        25% {border-right-color:${ ({theme})=> theme.background };}
        50% {border-right-color:${ ({theme})=> theme.title };}
        75% {border-right-color:${ ({theme})=> theme.background };}
        100% {border-right-color:${ ({theme})=> theme.title };}
    }
}
.rightNone{
    border-right:1px solid black;
}
.timer{
    color:white;
}
.upper-part{
    justify-content:space-between;
    display:flex;
    width:1000px
    // display:flex;
    //color:white;
    margin-bottom:20px;
    color: ${ ({theme})=> theme.typeBoxText}
}
.time-mode{
    //color:white;
    // justify-content:space-between;
    display:flex;
}
.time{
    margin-right:1rem;
}
.time:hover{
    color:${ ({theme})=> theme.title };
    cursor:pointer;
}
.stats-box{
    color:white;
    display:flex;
    text-align:center;
    width:1000px;
    max-height:250px;
    justify-content:space-between;
}
.left-stats{
    // display:flex;
    width:30%;
}
.stats{
    height:80%;
    padding-bottom:1rem;
    color:#fff;
}
.right-stats{
    width:70%;
    display:flex;
    //color:white;
}
.countdown{
    font-size:35px;
    //color:white;
}
.footer{
   display:flex;
   // width:1000px;
    height:60px;
   // color:white;
    justify-content:space-between;
}
.header{
    display:flex;
   // width:1000px;
    height:60px;
   // color:white;
    justify-content:space-between;
}
.select{
    color: black,
    min-width: 90px
}
.reset-btn:hover{
    background: ${ ({theme})=> theme.typeBoxText };
}
.reset-btn{
    display:block;
    margin:auto;
    transform: scale(1.5);
}
.central-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}
.total-times{
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:3rem;
}
.central-data{
    width:1000px;
    margin: auto;
    margin-top:2rem;
    margin-bottom: 3rem;
}
.picture{
    position:relative;
    width:50%;
    min-height:5rem;
    min-width:5rem;
}
.info{
    width:50%;
    margin-top:1rem;
    text-align:center;
    padding:1rem;
    font-size:1.5rem;
}
.result-graph, .table{
    width:1000px;
    margin:auto;
}

.user{
    display:flex;
    width:50%;
    justify-content:center;
    margin-top:30px;
    margin-bottom:30px;
    padding:1rem;
    border-right: 2px solid
}

`;