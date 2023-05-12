import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
        super(props);
        this.person = {name: 'sarra' , age: 25 , image : 'https://st.depositphotos.com/1000686/3738/i/600/depositphotos_37383675-stock-photo-portrait-of-a-young-beautiful.jpg' };
      this.state = {count : 0}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState (prevstate=>({
                count: prevstate.count +1
            }))
        }, 1000);
    }
  render() {
    return (
      <div>
        <h2>{this.person.name}</h2>
        <h2>{this.person.age}</h2>
        <img src={this.person.image} alt = 'image1'/>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
