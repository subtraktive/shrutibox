import React, { Component } from 'react';
import Styles from './styles';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {start, stop} = this.props;
    return (
        <div className={Styles.controlContainer}>
            <div onClick={start} className={Styles.button}>
                Click To Start
            </div>
            <div onClick={stop} className={Styles.button}> 
                Click to Stop
            </div>
        </div>
    )
  }
}

export default Control;
