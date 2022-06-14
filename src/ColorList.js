import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({colors}) => {
  return(
    <div>
      <h4>Add a color <Link to="/colors/new">here</Link>!</h4>
      <h4>Available colors:</h4>
      <ul>
        {colors.map(color => (
          <li><Link to={`/colors/${color}`}>{color}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default ColorList