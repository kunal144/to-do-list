import React, { useState } from "react";
import "./checkbox.css";


export default function Checkbox(props) {
  
    
  
  return (
<div id="checklist" className=" ">
  <input  value={props.id} name="r" type="checkbox" id={props.id}/>
  <label htmlFor={props.id}>{props.item}</label>
  
</div>
  );
}
