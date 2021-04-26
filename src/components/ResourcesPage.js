import React from 'react'
import ResourceItem from './ResourceItem'

class ResourcesPage extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
            
    }
    
  }

  // componentDidMount(){
  //   this.setState{

  //   }
  // }


  render(){

    

    return (
      <div>
      <div class="flex flex-col  container px-5  mx-auto bg-gray-100  ">
    
        <header>
          <div className='tabs'>

          </div>
        </header>
          
             
      <ResourceItem/>
      </div>
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

export default ResourcesPage;
