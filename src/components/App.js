
import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';


const App = () => {
  

  return (
    <div className="App">
       <h2 className="tooltip-heading">
           <Tooltip text="This is a tooltip">
              Hover over me
            </Tooltip>
        </h2>
       <br />
       <br />
       <br />
       <p>-----------------------</p>
       <br />
       <br />
       <br />
       <br />
       <p className="tooltip-para">
        <Tooltip text="This is another tooltip">
           Hover over me to see another tooltip
        </Tooltip> 
       </p>  
    </div>
  )
}

export default App
