import React from 'react';

export default class App extends React.Component {
  _handleSubmit(){
    console.log(data);
    // { title: "hello", content: "xxxx" }
  }
  render(){
    return(
      <div>
        <form>
          <input type="text" ref="title"/>
          <input type="text" ref="content"/>
        <form>
      </div>
    );
  }
}
