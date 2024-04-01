import { Component } from 'react'

export default class SubLifeCycle extends Component {
  componentWillUnmount(){
    this.props.changeValue('halo from sub')
  }
  
    render() {
    return (
      <div>SubLifeCycle</div>
    )
  }
}
