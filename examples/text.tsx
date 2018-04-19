import { Component, jsx } from '../build/d3-jsx';

const SEEYA = (props) => {
  return (
    <text textAnchor="middle" x={props.x} y={props.y}>See you next time!</text>
  );
};

<SEEYA textAnchor="middle" x={100} y={50} />;
