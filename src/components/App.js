
import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';


const App = () => {
  

  return (
    <div className="App">
      <div>
      <h2 className="tooltip">
           <Tooltip text="This is a tooltip">
              Hover over me
            </Tooltip>
        </h2>
      </div>
       
       <br />
       <br />
       <br />
       <p>-----------------------</p>
       <br />
       <br />
       <br />
       <br />
       <div>
       <p className="tooltip">
        <Tooltip text="This is another tooltip">
           Hover over me to see another tooltip
        </Tooltip>
        </p> 
       </div>
       
         
    </div>
  )
}

export default App
