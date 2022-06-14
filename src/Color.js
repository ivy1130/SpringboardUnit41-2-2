import React from "react";
import "./Color.css"

const Color = ({color}) => (
  <div 
  className="Color"
  style={{backgroundColor : "#" + color}}>
  </div>
)

export default Color