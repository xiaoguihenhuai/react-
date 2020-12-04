//react  使用ref 获取dom元素

import React, { Component,createRef } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state = {
            inputValue:''
        }
        //在constructor中创建ref
        this.inputDom = createRef()
    }
    inputValueChange = (e)=>{
        this.setState({
            inputValue:e.currentTarget.value
        })
    }

    addValue = ()=>{
        console.log(this.inputDom)
        this.props.addOne(this.state.inputValue)
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus()
        })
    }

    addKeyUpValue = (e)=>{
        if(e.keyCode === 13){
            this.addValue()
        }
    }

    render() {
        return (
            <div>
              <input 
              type='text' 
              value = {this.state.inputValue}
              onChange = {this.inputValueChange}
              onKeyUp={this.addKeyUpValue}
              ref={this.inputDom}
              />
              <button 
              onClick={this.addValue}
              >
                  添加</button>
            </div>
        )
    }
}
