import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import ReedBank from './ReedBank';
import Control from './Control';
import Volume from './Volume';
import Tone from 'tone';
import Styles from './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tone = null;
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.dec = this.dec.bind(this);
    this.inc = this.inc.bind(this);
  }

  componentDidMount() {
    if(!this.tone) {
      //this.tone = new Tone();
      this.synth = new Tone.PolySynth(2, Tone.Synth, {
        oscillator : {
          type : "square"
        }
      }).toMaster();
      //set the attributes using the set interface
      this.synth.set("detune", -1200);
      console.log("THE VIL", Tone.Master.volume);
      //play a chord
      
    }
  }

  onStart(){
    console.log("STARTING THE STY", this.synth);
    this.synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");
  }

  onStop() {

  }

  inc() {

  }

  dec() {

  }

  render() {
    
    return (

      <div id={Styles.main} >
        <Volume inc={this.inc} dec={this.dec}/>
        <Control start={this.onStart} stop={this.onStop} />
      </div>
    )
  }
}

export default hot(App);
