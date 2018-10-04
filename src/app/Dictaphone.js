import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <Button variant="raised" color="primary" onClick={resetTranscript}>Reset Audio</Button>
        <Card style={{marginTop:'20px',padding:'10px',minHeight:'300px'}}>
            <Typography variant="headline" component="h4">Start Speaking Now</Typography>
            <hr />
            <Typography component="p">{transcript}</Typography>
        </Card>
      </div>
    )
  }
}

export default SpeechRecognition(Dictaphone)