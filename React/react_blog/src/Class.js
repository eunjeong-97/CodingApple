import React, { Component } from 'react';

class Class extends Component {
  constructor() {
    super();
    this.state = { name: 'Park', age: 20 }
  }

  // arrow function
  changeName = () => {
    this.setState({ name: "Lee" });
  }

  render() {
    return (
      <div className="classComponent">
        <h3>저는 {this.state.name} 입니다.</h3>
        <button onClick={this.changeName}>이름변경</button>
      </div>
    );
  }
}

export default Class;