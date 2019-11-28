import React, { Component } from 'react';
import Styles from './styles';

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {inc, dec} = this.props;
    return (
        <div className={Styles.volume}>
            <div onClick={inc} className={Styles.button}>
                + Increase
            </div>
            <div onClick={dec} className={Styles.button}> 
               - Decrease
            </div>
        </div>
    )
  }
}

export default Volume;
