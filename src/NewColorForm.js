import React, { useState } from "react";

const NewColorForm = ({ addColor }) => {
  const INITIAL_STATE = {
    color : ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
      ...formData, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">New Color:</label>
      <input 
      id="color"
      type="color"
      name="color"
      value={formData.color}
      onChange={handleChange}
      />
      <button>Submit!</button>
    </form>
  )
}

export default NewColorForm