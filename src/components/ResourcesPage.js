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
      oxygen :data.oxygen,
      categories : data.categories
    }
    
  }

  changeResourceCatgory = (categoryIndex)=>{
    this.setState({
      activeResourceIndex : categoryIndex
    })
  }

  updateVoteCount = (id , num) => { //we just add num to existig frequncy
    let { allResources } = this.state;
    allResources.forEach(resource => {
      if(resource.id === id){
        resource.votes += num;
        }
    });

    this.setState({
      allResources:allResources
    })
  }
  


  render(){

    const { allResources , medicine , plasama , beds , activeResourceIndex , categories , oxygen} = this.state;
    const listArr = [allResources , medicine , beds , plasama , oxygen];
    const list = listArr[activeResourceIndex];
    
    

    return (
      <div>
      <div className="flex flex-col  container px-2  mx-auto bg-white  ">
    
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
                    id={item.id}
                    date = {item.date}
                    votes = {item.votes}
                    // votes = {item.downvotes}
                    verified = {item.verified}
                    updateVoteCount = {this.updateVoteCount}
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
