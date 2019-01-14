import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    length : 0,
    typeText : ''
  }

  changeLength = (event) =>{
    let length = event.target.value.length;
    console.log(length);
    this.setState({
      length:length,
      typeText : event.target.value
    });
  }
  
  deleteComponent = (indexTex) =>{
    const tempType = this.state.typeText.split('');
    console.log (tempType.splice(indexTex,1));
    this.setState({typeText:tempType.join('')});
  }

  render() {

    let displayComponent = null;
    console.log(this.state.typeText);
    if(this.state.length >= 1){

    let arr = [...this.state.typeText];
      displayComponent = (
        <div>
          {arr.map((temp,index)=>{
            console.log(index);
            return(
              <CharComponent 
                click = {this.deleteComponent.bind(index)}
                key = {index}
                text = {temp}
              />
            );
          })}
        </div>
      );

    }




    return (
      <div className="App">
       <div>
         <label>Enter Your Text </label> &nbsp;&nbsp;&nbsp;
         <input type="text" onChange={(event) => this.changeLength(event)} value={this.state.typeText} />
         <br/>
         <p id = "inline">Length</p>&nbsp;&nbsp;&nbsp;<p id = "inline2">{this.state.length}</p>
       </div>
       
        <Validation 
          text = {this.state.length}
        />

        {displayComponent}
       
      </div>
    );
  }
}

export default App;
