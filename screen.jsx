import React from 'react'; 
import ScreenRow from './screenRow';
const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.ques}/>
      <ScreenRow value={props.ans}/>
    </div>
  );
}


Screen.propTypes = {
  ques: React.PropTypes.string.isRequired,
  ans: React.PropTypes.string.isRequired
}


export default Screen;