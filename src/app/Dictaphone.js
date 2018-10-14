import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import request from 'superagent';
import Speech from 'react-speech';

class Dictaphone extends Component {

  constructor(props){
    super(props);
    this.state = { answers: null }
  }

  sendNow = (transcript) => {
    request
    .post('http://localhost:5080/conversation')
    .send({ question: transcript })
    .set('accept', 'json')
    .end((err, res) => {
      const { data } = res.text && JSON.parse(res.text);
      this.setState({ answers:data });
    });
  }


  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

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
        <Card style={{marginTop:'20px',padding:'10px',minHeight:'300px'}}>
            <Typography variant="headline" component="h4">Start Speaking Now</Typography>
            <hr />
            <Typography component="p">{transcript}</Typography>
        </Card>
        <Button  variant="raised" color="primary" onClick={this.sendNow(transcript)}>Send</Button>
        <Speech 
          styles={style} 
          autostart={false} text="Welcome to react speech"
          pitch="0.5"
          rate="0.5"
          volume="0.1"
          lang="en-GB"
          voice="Daniel"
        />
      </div>
    )
  }
}

export default SpeechRecognition(Dictaphone)