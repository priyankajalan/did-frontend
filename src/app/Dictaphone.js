import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import request from 'superagent';
// import Speech from 'react-speech';

const options = {
  // autoStart: false
  intrimResults: true,

}

class Dictaphone extends Component {

  constructor(props){
    super(props);
    this.state = { answers: 'Good morning' }
  }

  // sendNow = () => {
  //   console.log('Transcript',this.props);
  //   // const { resetTranscript } = this.props;
  // }

  // startSpeaking = (e) => {
  //   e.preventDefault();
  //   const { startListening } = this.props;
  //   startListening();
  // }
  componentWillMount(){
    // console.log('Start the speech recognition now',this.props);
    this.props.startListening();
  }

  componentWillReceiveProps(){

    const { finalTranscript, resetTranscript, abortListening, startListening } = this.props;
    // if(this.props.transcript.includes('amica') || this.props.transcript.includes('Amica')){
    //     resetTranscript();
    // }
    console.log(this.props);
    if(finalTranscript != ""){
      // abortListening();
      request
      .post('http://localhost:5080/conversation')
      .send({ question: finalTranscript })
      .set('accept', 'json')
      .end((err, res) => {
        const { data } = res.text && JSON.parse(res.text);
        console.log(data);
        resetTranscript();
        startListening();
      });
    }
    
  }

  render = () => {
    const { finalTranscript, transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    let style = {
      play: {
        button: {
          width: '50',
          height: '28',
          cursor: 'pointer',
          pointerEvents: 'none',
          outline: 'none',
          backgroundColor: 'yellow',
          border: 'solid 1px rgba(255,255,255,1)',
          borderRadius: 6
        },
      }
    };
    
    return (
      <div>
        <Button variant="raised" color="primary" onClick={resetTranscript}>Reset Audio</Button>
        {/* <Button variant="raised" color="primary" onClick={this.startSpeaking}>Start Listening</Button> */}
        <Card style={{marginTop:'20px',padding:'10px',minHeight:'300px'}}>
            <Typography variant="headline" component="h4">Start Speaking Now</Typography>
            <hr />
            <Typography component="p">{finalTranscript}</Typography>
        </Card>
        {/* <Button  variant="raised" color="primary" onClick={this.sendNow(transcript)}>Send</Button> */}
        {/* <Speech 
          styles={style}
          autostart={true}
          text='Good morning'
          pitch="0.5"
          rate="0.5"
          volume="0.1"
          lang="en-GB"
          voice="Google UK English Female" */}
        />
      </div>
    )
  }
}

export default SpeechRecognition(Dictaphone)