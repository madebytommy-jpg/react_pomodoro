import React, { Component } from "react"
import "../assets/styles/box.scss"


class Box extends Component {
  constructor(){
    super()
    this.state = {
      minute: 25,
      seconds: "00",
    }
    this.counter = null
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.stop = this.stop.bind(this)

  }
  
  start (){
    if(this.counter){
      this.stop()
    } else {
      this.counter = setInterval(()=>{
        if( this.state.minute == 25){
          this.setState({ minute: 24})
          if( this.state.minute == 24 ){
            this.setState({ seconds: 59 })
          } 
        } else {
          this.setState({ seconds: this.state.seconds - 1})
          if( this.state.seconds == -1){
            this.setState({ minute: this.state.minute - 1})
            this.setState({ seconds: 59})
          }
          if ( this.state.minute == 0 && this.state.seconds == 0){
            clearInterval(this.counter)
            this.counter = null
          }
          if( this.state.seconds < 10 ){
            this.setState({ seconds: "0" + this.state.seconds})
          }
        }
      }, 1000)
    }
  }

  stop(){
    clearInterval(this.counter)
    this.counter = null
  }
  
  reset(){
    clearInterval(this.counter)
    this.counter = null
    this.setState({
      minute: 25,
      seconds: "00"
    })
  }

  render () {
    return (
      <div className="container">
        <div className="box">
          <div className="higher"></div>
          <div className="lower">
            <div className="content_number">
              <p>
                <span >{this.state.minute}</span>:
                <span >{this.state.seconds}</span>  
              </p>
            </div>
            <div className="botons">
              <input type="button" onClick={this.start} id="start" className="start btn" value="start"/>
              <input type="button" onClick={this.stop} id="stop" className="stop btn" value="stop"/>
              <input type="button" onClick={this.reset} id="reset" className="reset btn" value="reset"/>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Box



