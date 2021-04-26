import React from 'react'
import Navbar from './Navbar'


class App extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
        
        resources : [],
        tabs : ["Home" , "Resources" , "Volunteer" , "About Us"],
        activeTabIndex : 0,
        loading : true,
        
    }
     //we put this in the constrcutor because it will be used again and again to aceess the firestore

    //method 2 , we bind our functions to this (otherwise their 'this' value wull be uundefined when they are assigned to an event listenr or aany other var)
    // this.increaseQuantity = this.increaseQuantity.bind(this)}
  }

  render(){

    


    return (
      <div className="App">
      <Navbar 
        activeTabIndex = {this.state.activeTabIndex}
        tabs = {this.state.tabs}
      />
    
      </div>
    );
  }

}


// function App() {
//   return (
//     <div className="App">
//        <Navbar/>
//     </div>
//   );
// }

export default App;