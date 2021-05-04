import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import VolunteerPage from './VolunteerPage'
import ResourcesPage from './ResourcesPage'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'





class App extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
        
        resources : [],
        tabs : [
               
                {
                  tabName : "Resources" , 
                  tabLink :'resources'
                }, 
                {
                  tabName : "Twitter" , 
                  tabLink :'twitter'
                }, 
                {
                  tabName : "Volunteer" , 
                  tabLink :'volunteer'
                }, 
                // {
                //   tabName : "About Us" , 
                //   tabLink :'about'
                // },
               ],
        activeTabIndex : 0,
        loading : true,
        
    }
    
  }

  changeTab = (Tabindex) => {
    this.setState({
      activeTabIndex:Tabindex
    })
  }

  // componentDidMount(){
  //   ReactGA.initialize('G-QEKHMEYD35');
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  //   // console.log(window.location.pathname);
  // }  

  // componentDidUpdate(){
   
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  //   // console.log(window.location.pathname);
  // }


  render(){

 
    
    return (
      <Router >
        <div className="App">
        <Navbar 
          activeTabIndex = {this.state.activeTabIndex}
          tabs = {this.state.tabs}
          changeTab = {this.changeTab}
          setCurrentTab = {this.state.activeTabIndex}
        />
        <div>
        <Switch>
          <Route path ='/' exact component={ResourcesPage} />
          <Route path ='/home' exact component={ResourcesPage} />
          <Route path ='/twitter' exact component={HomePage}/>
          <Route path ='/about' exact component={AboutPage}/>
          <Route path ='/volunteer' exact component={VolunteerPage}/>
          <Route path ='/resources' exact component={ResourcesPage}/>
        </Switch>
        </div>
        </div>
      
      </Router>
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
