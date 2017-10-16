
import React from 'react'; 
import Screen from './screen'; 
import Button from './button'; 

import './styles/main.css';

class Frame extends React.Component {
  constructor() {
    super();
    
    this.state = {
      ques: '',
      ans: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="frame">
        <div style="align: center" className="calculator-title">
          Calculator By Salauni Patel
        </div>
        <Screen ques={this.state.question} ans={this.state.ans}/>
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='action' />
          <Button label={'+'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='action' />
          <Button label={'/'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'Cls'} handleClick={this.handleClick} type='action' />
          <Button label={'='} handleClick={this.handleClick} type='action' />
        </div>
      </div>
    );
  }

  handleClick(e){
    const value = event.target.value;
    switch (value) {
      case '=': { 
              const ans = eval(this.state.ques).toString();
      
        this.setState({ ans });
        break;
      }
      case 'Cls': {
       
        this.setState({ ques: '', ans: '' });
        break;
      }
      default: {
       
        this.setState({ ques: this.state.ques += value})
        break;
      }
    }
  }
}


export default Frame;