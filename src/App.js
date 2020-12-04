import React, { Component, Fragment } from 'react';
import { TodoHeader, TodoInput,Like } from './components'

export default class App extends Component {
  // state = {
  //   say: 'hello china'
  // }
  constructor() {
    super()
    this.state = {
      say: 'hello china',
      title: '我是head',
      goodsList: [
        {
          id: '1',
          name: 'xiaoming'
        },
        {
          id: '2',
          name: 'duoduo'
        }
      ]
    }
  }

  addOne = (value)=>{
    console.log(value)
    this.setState({
      goodsList:this.state.goodsList.concat(
        {
          id:"3",
          name:value
        }
      )
    })
  }

  render() {
    return (
      <Fragment>
        <TodoHeader title={this.state.title} x={1} y={3}>
          {/* {this.state.say} */}

        </TodoHeader>
        <TodoInput addOne = {this.addOne}/>
        {this.state.goodsList.map((item, index) => {
          return <div key={index}>{item.name}</div>
        })}
        <Like />
      </Fragment>
    )
  }
}
