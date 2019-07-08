import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };
  formCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //   handleIncrement = () => {
  //     //console.log(product);
  //     this.setState({ value: this.props.counter.value + 1 });
  //   };

  reSet = () => {
    this.setState({ value: (this.props.counter.value = 0) });
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //onDelete = () => {};

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>

        {/* <ul>
          {this.state.tags.map(x => (
            <li key={x}>{x}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
