import { createRef, useEffect, useRef, useState, useContext, useMemo } from "react"
import UpperMenu from "./UpperMenu"
import { Dialog, DialogTitle } from '@material-ui/core';
import {GameModeContext} from "../Context/GameMode"
import CapsLock from "./CapsLock";
import Stats from "./Stats";
var randomWords = require('random-words');

function TypingBox(props) {
    const [IntervalId,setIntervalId]=useState(null)
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setcharIndex] = useState(0)
    const [timer, setTimer] = useState(15)
    const [testStart, setTestStart] = useState(false)
    const [testOver, setTestOver]=useState(false)
    const {gametime,gameWords, gameMode}=useContext(GameModeContext);
    const [capsLocked, setCapsLocked]=useState(false)
    const [correctChar, setCorrectChar]=useState(0)
    const [inCorrectChar, setInCorrectChar]=useState(0)
    const [missedChar, setMissedChar]=useState(0)
    const [extraChar, setExtraChar]=useState(0)
    const [correctWords, setCorrectWords]=useState(0)
    const [graphData, setGraphData]=useState([])
    const [openDialog, setOpenDialog] = useState(false);
    const wordWrapperRef=useRef();

    const [wordsArray, setWordsArray]=useState(()=>{
        return randomWords(50)
    })

    
    const words=useMemo(()=>{
       return wordsArray
    }, [wordsArray])

    

    const wordRef=useMemo(()=>{
       return Array(words.length).fill(0).map(i => createRef())
    }, [words])

    const handleDialogEvents = (e)=>{
        
        if(e.keyCode === 13 || e.keyCode===9){
            e.preventDefault();
            setOpenDialog(false);
            resetGame();
            return;   
        }
        if(e.keyCode===32){
            e.preventDefault();
            setOpenDialog(false);
            redoGame();
            return;
        }
        e.preventDefault();
        setOpenDialog(false);
        focusInput();
        startTest();
    }
    const redoGame = () =>{
        setcharIndex(0);
        setWordIndex(0);
        setTimer(gametime);
        setTestStart(false);
        setTestOver(false);
        clearInterval(IntervalId);
        resetWordSpanRef();
        setCorrectChar(0);
        setInCorrectChar(0);
        setCorrectWords(0);
        setExtraChar(0);
        setMissedChar(0);
        setGraphData([]);
        focusInput();
    }

   function resetGame(){
    setWordIndex(0);
    setcharIndex(0);
    setTimer(gametime);   //giving value of gametime to setTimer from context which we created.
    setTestOver(false);
    setTestStart(false);
    clearInterval(IntervalId);
    let random=randomWords(50);  // also we want to chng our random words again whenver reset happens
        setWordsArray(random) 
       focusInput()           
   }
    
    useEffect(()=>{
     resetGame();      // whenever there is chng in timer then we need to run our reset function
    }, [gametime])

    const textInput = useRef(null)
   


    const startTest = ()=>{

        const intervalId = setInterval(count, 1000);
        setIntervalId(intervalId);
        function count(){
            setTimer((previous)=>{
                setCorrectChar((correctChar)=>{
                    setGraphData((data)=>{
                        
                       // const gametime = (gameMode==='words')?180:gametime
                        return [...data,[gametime-previous,Math.round((correctChar/5)/((gametime-previous+1)/60))]];
                    })
                    return correctChar;
                });
                

                if(previous===1){
                    clearInterval(intervalId);
                    setTimer(0);
                    setTestOver(true);             
                }
                else{
                    return previous-1;
                }
               
            });
        }

    }



    const calculateWPM=()=>{
        return Math.round((correctChar/5)/(gametime/60))
    }
    const calculateAccuracy=()=>{
        return ((correctWords/wordIndex)*100);
    }

    const handleInputFocus=()=>{
        wordWrapperRef.current.className+=" blur"
    }

    const handleInputInFocus=()=>{
        wordWrapperRef.current.className= wordWrapperRef.current.className.replace("blur", "")
    }

    const handleKeyDown = (e) => {

        if(e.keyCode===9){
            if(testStart){
                clearInterval(IntervalId);
            }
            e.preventDefault();
            setOpenDialog(true);
            return;
        }

        // console.log(e);
        setCapsLocked(e.getModifierState("CapsLock"));
        if (!testStart) {
            startTest()
            setTestStart(true)
        }

let allSpan=wordRef[wordIndex].current.querySelectorAll('span');
        if (e.keyCode === 32) {
              const correctChar=wordRef[wordIndex].current.querySelectorAll('.correct');  //checking correct char length using the classname
               const incorrectChar=wordRef[wordIndex].current.querySelectorAll('.incorrect'); //same as above for incorrect chrs
            
               setMissedChar(missedChar+(allSpan.length-incorrectChar.length-correctChar.length))
               if(correctChar.length===allSpan.length){
                 setCorrectWords(correctWords+1);
               }

            if (wordRef[wordIndex].current.querySelectorAll('span').length <= charIndex) {
                wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].className = wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].className.replace("right", "");
            }
            else {
                wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className = wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className.replace("current", "");

            }
            wordRef[wordIndex+1].current.querySelectorAll('span')[0].className = 'char current';
            setWordIndex(() => wordIndex + 1)
            setcharIndex(0)
            return
        }

        if (e.keyCode === 8) {
            if (charIndex !== 0) {
                if (wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].className.includes('extra')) {
                    wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].remove();
                    wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 2].className += " right";
                    setcharIndex(charIndex - 1)

                }
                else {
                    wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className = "char"
                    wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].className = "current";
                    setcharIndex(charIndex - 1)
                }
                return
            }
            else {
                return
            }
        }
        if (e.key.length !== 1) {
            return
        }

        if (charIndex === wordRef[wordIndex].current.querySelectorAll('span').length) {
            let newSpan = document.createElement('span');// => <span></span>
            newSpan.innerText = e.key;
            newSpan.className = "incorrect extra";
            setExtraChar(extraChar+1);
            wordRef[wordIndex].current.append(newSpan)
            wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className += " right";
            wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].className = wordRef[wordIndex].current.querySelectorAll('span')[charIndex - 1].className.replace("right", "")
            setcharIndex(charIndex + 1);
            return
        }



        let key = e.key;
        let currentCharacter = wordRef[wordIndex].current.querySelectorAll('span')[charIndex].innerText;
        if (key === currentCharacter) {
            setCorrectChar(correctChar+1)
            wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className = "correct"
        }
        else {
             setInCorrectChar(inCorrectChar+1)
            wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className = "incorrect"
        }

        if (wordRef[wordIndex].current.querySelectorAll('span').length - 1 === charIndex) {

            wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className += " right";//right+correct classname

        }
        else {
            wordRef[wordIndex].current.querySelectorAll('span')[charIndex + 1].className = "current";
        }

        setcharIndex(() => charIndex + 1);
        wordRef[wordIndex].current.querySelectorAll('span')[charIndex + 1].className = "current";


    }


    const resetWordSpanRef = () =>{
        wordRef.map(i=>{

            Array.from(i.current.childNodes).map(ii=>{
                ii.className = 'char';
            })
        })

        if(wordRef[0]){
            wordRef[0].current.querySelectorAll('span')[0].className = 'char current';
        }
    }

    const handleKeyUp = (e) => {
        // console.log("up", e)

    }
    const focusInput = () => {
        textInput.current.focus();
    }

    useEffect(() => {
        focusInput();
        return ()=>{
            clearInterval(IntervalId)
        }
    }, [])

    useEffect(() => {

        wordRef.map(i=>{
            Array.from(i.current.childNodes).map(ii=>{
                ii.className='char';
            })
        })
        if(wordRef[0]){
        wordRef[wordIndex].current.querySelectorAll('span')[charIndex].className = "current";
        }
    }, [wordRef])   // cursor

 // const callback=((value)=>{  value received from callback from child component
    //   setTimer(value)
    // console.log("value we got", value)
   // setTimer(value)
 // })

    return (


        <div className="typing">
            <CapsLock open={capsLocked}/>
            <UpperMenu countdown={timer} />
            {!testOver? (<div className="typing-box" onClick={focusInput}>
                <div className="typing-box" ref={wordWrapperRef}>
                {words.map((word, index) => (
                    <span className="words" ref={wordRef[index]}>
                        {word.split("").map((char, index) => (
                            <span className="char">
                                {char}
                            </span>
                        ))}
                    </span>
                ))}
                </div>
            </div>):(<Stats wpm={calculateWPM()} accuracy={calculateAccuracy()} correctChars={correctChar} 
            incorrectChars={inCorrectChar} extraChars={extraChar} missedChars={missedChar}
            graphData={graphData} reset={resetGame}
           />)}
           
            <input type="text"
             className="hidden-input"
              ref={textInput} 
              onBlur={handleInputFocus}
              onFocus={handleInputInFocus}
              onKeyDown={handleKeyDown} 
              onKeyUp={handleKeyUp} />

            <Dialog
            PaperProps={{
                style: {
                    backgroundColor: "transparent",
                    boxShadow: "none"
                }
            }}
            style={{
                backdropFilter: 'blur(2px)'
            }}
            open={openDialog}
            onKeyDown={handleDialogEvents}
        >
            <DialogTitle>
                <div className='instruction'>
                    press Space to redo
                </div>
                <div className='instruction'>
                    press Tab/Enter to restart
                </div>
                <div className='instruction'>
                    press any other key to exit
                </div>
            </DialogTitle>

        </Dialog>
        </div>
    )
}
export default TypingBox
