import { jsx } from '../build/d3-jsx';
var SEEYA = function (props) {
    return (jsx("text", { textAnchor: "middle", x: props.x, y: props.y }, "See you next time!"));
};
jsx(SEEYA, { textAnchor: "middle", x: 100, y: 50 });
