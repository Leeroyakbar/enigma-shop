import { Component } from 'react'
import SubLifeCycle from './SubLifeCycle'
export default class Lifecycle extends Component {

    state = {
        todo: 'Makan',
        isLoading: false,
        isShow: false
    }


    componentDidMount() {
        this.getTodo().then(todo => {
            this.setState({
                todo,
                isLoading: true
            })
        })
    }

    getTodo = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Minum')
            }, 2000)
        })
    }

    changeValue = (todo) => {
        this.setState({
            todo
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.todo}</h1>
        <button className='btn btn-primary' onClick={() => this.setState({isShow: !this.state.isShow})}>Ubah state</button>
        {this.state.isShow && <SubLifeCycle changeValue={this.changeValue}/>}
      </div>
    )
  }
}
