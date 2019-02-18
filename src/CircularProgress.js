import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';
import { numberWithCommas } from './utils';

export const CircularProgress = ({ percentage, title, data }) => {
  return (
    <div
      className="CircularProgress"
      style={{ width: 400, justifyContent: 'center', marginRight: 40 }}
    >
      <div className="CircularProgressContainer">
        <CircularProgressbar
          percentage={data.smartphone.percentage}
          strokeWidth={4}
          styles={{
            height: 200,
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: data.smartphone.color,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: data.tablet.color,
            },
            // Customize the text
            text: {
              // Text color
              fill: '#f88',
              // Text size
              fontSize: '16px',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            },
          }}
        />
        <div className="CircularProgressContent">
          <span style={{ fontSize: 10, position: 'absolute', left: 10 }}>
            0
          </span>
          <span style={{ fontSize: 10, position: 'absolute', top: 10 }}>0</span>
          <div style={{ marginTop: -25 }}>
            <span style={{ fontSize: 23, color: 'grey' }}>{title}</span>
            <br />
            <span style={{ fontSize: 30 }}>{numberWithCommas(data.tablet.price + data.smartphone.price)}€</span>
          </div>
          <span style={{ fontSize: 10, position: 'absolute', right: 10 }}>
            0
          </span>
          <span style={{ fontSize: 10, position: 'absolute', bottom: 10 }}>
            0
          </span>
        </div>
      </div>
      <div className="FooterContent">
        <div className="CircularProgressFooterHeader">
          <span
            style={{
              color: data.tablet.color,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Tablet
          </span>
          <span
            style={{
              color: data.smartphone.color,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Smartphone
          </span>
        </div>
        <div className="CircularProgressFooterContent">
          <div>
            <span style={{ fontSize: 21 }}>{data.tablet.percentage}%</span>
            <span style={{ fontSize: 21, color: 'grey', marginLeft: 10 }}>
              {numberWithCommas(data.tablet.price)}€
            </span>
          </div>
          <div>
            <span style={{ fontSize: 21 }}>{data.smartphone.percentage}%</span>
            <span style={{ fontSize: 21, color: 'grey', marginLeft: 10 }}>
            {numberWithCommas(data.smartphone.price)}€
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
