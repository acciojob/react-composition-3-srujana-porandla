
import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';


const App = () => {
  

  return (
    <div className="App">
      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>
       <br />
       <br />
       <br />
       <p>-----------------------</p>
       <br />
       <br />
       <br />
       <br />
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>   
    </div>
  )
}

export default App
