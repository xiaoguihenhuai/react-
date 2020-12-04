import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            isLike: false
        }
    }

    handleClick = ()=>{
        //使用这种方式来修改 使用 setstate
        //两种方法来修改数据
        //第一种是修改一个对象
        // this.setState({
        //     isLike : !this.state.isLike
        // })
        //第二种方法是 修改一个方法来改变
        this.setState((prev)=>{
            console.log(prev);
            return {
                isLike : !prev.isLike
            }
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>
                    {
                        this.state.isLike ? 'love' : 'hate'
                    }
                </span>
            </div>
        )
    }
}
