import React from 'react'
import ResourceItem from './ResourceItem'
import ResourcesNavbar from './ResourcesTab'
import {data} from '../resourceData'
class ResourcesPage extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
      data : data,
      activeResourceIndex : 0,
      allResources : data.allResources ,
      medicine : data.medicine ,
      beds : data.beds,
      plasama : data.plasma,
      categories : data.categories
    }
    
  }

  changeResourceCatgory = (categoryIndex)=>{
    this.setState({
      activeResourceIndex : categoryIndex
    })
  }

  


  render(){

    const { allResources , medicine , plasama , beds , activeResourceIndex , categories } = this.state;
    const listArr = [allResources , medicine , beds , plasama ];
    const list = listArr[activeResourceIndex];
    
    

    return (
      <div>
      <div className="flex flex-col  container px-5  mx-auto bg-white  ">
    
        <header>
          <div className='tabs'>
            <ResourcesNavbar
               activeResourceIndex = {activeResourceIndex} 
                categories = {categories}  
                changeResourceCatgory = {this.changeResourceCatgory}
            />
          </div>
        </header>
          
      <div>
        {
         
          list.map((item)=>{
            return <ResourceItem
                    title = {item.title}
                    description = {item.description}
                    link = {item.link}
                    key = {item.id}
                    date = {item.date}
                    upvotes = {item.upvotes}
                    downvotes = {item.downvotes}
                    
                  />
          })
        }
        </div> 
      
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
