import React, { useState } from "react"
import ColorList from "./ColorList"
import NewColorForm from "./NewColorForm"
import FilterColorDetails from "./FilterColorDetails"
import { Route, Switch, Redirect, useHistory } from "react-router-dom"

const Routes = () => {
  const INITIAL_STATE = ["FF0000", "0000FF", "00FF00"]
  const [colors, setColors] = useState(INITIAL_STATE)
  const history = useHistory()

  const addColor = ({color}) => {
    setColors([...colors, color.slice(1)])
    history.push("/colors")
  }

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors}/>
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm addColor={addColor}/>
      </Route>
      <Route exact path="/colors/:color">
        <FilterColorDetails colors={colors}/>
        {history.push("/colors")}
      </Route>
      <Redirect to="/colors" />
    </Switch>
  )
}

export default Routes