import React, { Component } from 'react';
let wilddog = require('wilddog')


let config = {
  syncURL: "https://xiaofengtest.wilddogio.com/location/city/" 
};
wilddog.initializeApp(config);
let ref = wilddog.sync().ref();
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataList:[],
      testData:""
    }
    this.getData=this.getData.bind(this);
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    
  
    ref.on("value", function(datasnapshot) {    
        
        let obj = datasnapshot.val()
        console.log(obj);
    }, function(error){
        console.log('error');
        
    });
  }
  change(){
    ref.set("123123");
  }
  render() {
    return (
      <div>
        <button onClick={this.change.bind(this)}>变化</button>
      </div>
    )
  }
}
