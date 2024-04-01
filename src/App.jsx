import React from "react"
import Home from "./pages/Home/Home"
import ListProduct from "./pages/Products/components/ListProduct"
import Login from "./pages/Authentication/Login"
import Register from "./pages/Authentication/Register"
import Product from "@pages/Products/Product"
import Lifecycle from "./pages/LIfecycle/Lifecycle"
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
        {/* <Home></Home> */}
        {/* <ListProduct/> */}
        
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <Product/> */}
        <Lifecycle/>
      </>
    )
  }
}

export default App
