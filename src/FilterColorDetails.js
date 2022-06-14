import React from "react";
import { useParams } from "react-router-dom";
import Color from "./Color";

const FilterColorDetails = ({ colors }) => {
  const { color } = useParams()

  if (colors.indexOf(color) !== -1) {
    return (
      <Color color={color} />
    )
  }
  return 
}

export default FilterColorDetails