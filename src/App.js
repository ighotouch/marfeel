import React, { Component } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgress } from './CircularProgress';
import './App.css';
import SwipeableViews from 'react-swipeable-views';



const items = [
  {
    tablet: { percentage: 60, price: 120000, color: '#8AD344' },
    smartphone: { percentage: 40, price: 80000, color: '#3C6719' },
  },
  {
    tablet: { percentage: 60, price: 20000000, color: '#73C8E4' },
    smartphone: { percentage: 40, price: 30000000, color: '#2E4F65' },
  },
  {
    tablet: { percentage: 60, price: 480000000, color: '#EDC42F' },
    smartphone: { percentage: 40, price: 120000000, color: '#A84C23' },
  },
];
const percentage = 66;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Desktop">
        {items.map(item => (
            <CircularProgress
              counterClockwise={true}
              title="Revenue"
              // how are data passed will define how this props will be defined.
              data={item}
            />
          ))}
        </div>
        <SwipeableViews enableMouseEvents className="Mobile">
          {items.map(item => (
            <CircularProgress
              counterClockwise={true}
              title="Revenue"
              // how are data passed will define how this props will be defined.
              data={item}
            />
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
