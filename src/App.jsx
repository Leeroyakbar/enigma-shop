import React from "react"
import Home from "./pages/Home/Home"

/**
 * component react dibagi menjadi 2
 * 1. statefuul component (className component)
 *  - component yang menyediakan state, untuk menyimpan data, react lifecycle
 * 2. stateless component (functional component)
 * - component yang tidak menyediakan state dan tidak ada react lifecycle
 * - Hooks: dengan hooks kita bisa memmbuat stateless component menjadi seperti stateful component
 */

class App extends React.Component {
  render() {
    return (
      <>
        <Home></Home>
      </>
    )
  }
}

export default App
