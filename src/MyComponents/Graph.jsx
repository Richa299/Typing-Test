import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import {useTheme} from '../Context/ThemeContext';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function Graph({graphData, type}){

  
     const {theme} = useTheme();
    return(
       
             <Line 
             data={
                {
                  labels: graphData.map(i=>(type==='date')?(""):(i[0]+1))   ,
                 datasets: [
                {
                data: graphData.map(i=>i[1]),
                label: "wpm",
                borderColor: theme.stats
                }
                         ]
                }
               } />
        
    )
}
export default Graph