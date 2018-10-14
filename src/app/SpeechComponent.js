import React from 'react';

export default class SpeechComponent extends React.Component {


    render(){
        return(
            <div>
                {speechSynthesis.speak(
                    new SpeechSynthesisUtterance(this.props.speak)
                )}
            </div>
        )
    }
}