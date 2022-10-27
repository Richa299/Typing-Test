import {themeOptions} from "../styles/theme"
import { useTheme } from "../Context/ThemeContext"
import Select from "react-select"
import GitHubIcon from '@mui/icons-material/GitHub';
import { MenuItem } from '@mui/material'

function Footer(){
    const {setTheme,theme,defaultTheme}=useTheme()
    const handleTheme=(e)=>{
      localStorage.setItem('theme',JSON.stringify(e.value));
      setTheme(e.value);
    }
    return(
        <div className="footer">

          <div className="intructions">
            <div className="hint">
                press <kbd>Tab</kbd> to open commands
            </div>
        </div>
        <div className="actual-footer">
            <div className="footer-links">
            <a href='https://github.com' target="_blank">
                    <GitHubIcon />
                </a>
            </div>
            <div className="theme-options">

                <Select options={themeOptions}
                menuPlacement="top"
                onChange={handleTheme}
                defaultValue={{label:defaultTheme.label,value:defaultTheme}}
                styles={{
                  control: (styles) => ({...styles,backgroundColor:theme.background, cursor:'pointer', borderColor:theme.title}),
                  singleValue: (styles) => ({...styles, color:theme.title}),
                  menu: styles => ({...styles,backgroundColor:theme.background})
              }}></Select>
              
                  </div>
             </div>
        </div>
    )
}
export default Footer