import React , { Component } from "react";
import './welcome.css'

 class Welcome extends Component{
    constructor(){
        super();
        this.state ={
            counter : 0
        }
        console.log('constructor triggered');
    }
    componentWillMount(){
        console.log('inside the will mount');
    }
    increment = ()=>{
        this.setState((prev)=>({counter:prev.counter +1 }))
    }
    decrement = ()=>{
        this.setState((prev)=>({counter:prev.counter - 1}))
    }
    render(){
        console.log('inside the render');
        return(
            <center>
                <h1 className="title">{this.state.counter}</h1>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
            </center>
        )
    }
    componentDidMount(){
        console.log('inside didmount');
    }
 }
 export default Welcome