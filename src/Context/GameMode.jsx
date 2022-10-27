import { createContext,  useContext, useState } from "react"

const GameModeContext=createContext();  // creating context for timer change on click
function GameMode({children}){
    const [gametime, setGameTime]=useState(15);
    const [gameMode, setGameMode] = useState('time');  // 'time' , 'word'
    const [gameWords, setGameWords] = useState(10);
    const values={
        gametime,
        setGameTime,
        gameMode,
        gameWords,
        setGameMode,
        setGameWords
    }
    return (
       <GameModeContext.Provider value={values}>{children}</GameModeContext.Provider>
    )
}
export default GameMode          //only one default export per file exist
export {GameModeContext}

