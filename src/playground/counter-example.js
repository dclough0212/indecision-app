import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.state = {
      count:0
    };
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'));
      if (count != NaN)
        {
          console.log(count + " was read");
          this.setState(() => ({count}));
        }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)
      {
          console.log("componentDidupdate"); 
         localStorage.setItem("count", this.state.count);
      }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset(){
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }
  render() {
    return(
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//   count = count + 1;
//   renderCounterApp();
// }
// const subOne = () => {
//   count = count - 1;
//   renderCounterApp();
// }
// const resetCount = () => {
//   count = 0;
//   renderCounterApp();
// }

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>
//         Count: {count}
//       </h1>
//       <p>
//         <button className="button" onClick={addOne}>+1</button>
//         <button onClick={subOne}>-1</button>
//          <button onClick={resetCount}>reset</button>       
//       </p>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot);
// };




// renderCounterApp();
