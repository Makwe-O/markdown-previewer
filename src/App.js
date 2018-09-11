import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const marked = require('marked')

class App extends Component {
  constructor(){
    super();
    this.state= {
      text: ''
    }
  }

  updateMarkdown = (event) =>{
    this.setState({
      text: event.target.value
    })
  }
  render() {
    const { text } = this.state
    return (
      <div className="text-center container">
        <h1>Issa Markdown Tin🔥🔥🔥</h1>
        <div className="App">
          <div className="section">
            <Form>
              <FormGroup>
                <h1>Text Output</h1>
                <Input type="textarea" name="text" id="editor" placeholder="Enter Markdown" rows="20"  onChange={this.updateMarkdown}/>
              </FormGroup>
            </Form>
          </div>
          <div className="section">
            <h1>Markdown Output</h1>
          
            <div className="markdown-output" dangerouslySetInnerHTML = {{__html:marked(text)}}></div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
