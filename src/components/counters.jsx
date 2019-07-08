import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map(x => (
          <Counter
            key={x.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={x}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
