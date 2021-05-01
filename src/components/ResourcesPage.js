import React from 'react'
import ResourceItem from './ResourceItem'
import ResourcesNavbar from './ResourcesTab'
import {data} from '../resourceData'
import axios from 'axios'

class ResourcesPage extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
      data : data,
      activeResourceIndex : 0,
      allResources : data.allResources ,
      medicine : data.medicine ,
      beds : data.beds,
      plasma : data.plasma,
      oxygen :data.oxygen,
      categories : data.categories
    }
    
  }

  //filter items based on category
  filterCategory(id,item) {

    let idAvailable = false;
    item.category.forEach((cat)=>{
      if(cat.id === id){
        idAvailable = true;
      }
    });

    return idAvailable

  }

  async componentDidMount(){
     
    try {
      const categoriesRes = await axios ({
        method :"GET",
        url : "http://localhost:1337/categories"
      })    

     
      const resourcesRes = await axios({
        method : 'GET' ,
        url: "http://localhost:1337/resources"
      })

      const allResources = resourcesRes.data

      let medicine = allResources.filter((item) => {return this.filterCategory(3,item)});
      let oxygen = allResources.filter((item) => {return this.filterCategory(1,item)});
      let plasma = allResources.filter((item) => {return this.filterCategory(2,item)} );
      let beds = allResources.filter((item) => {return this.filterCategory(4,item)} );
      

      this.setState({
        allResources : allResources,
        plasma : plasma,
        oxygen :oxygen,
        medicine : medicine,
        beds : beds
      })


    } catch (err) {
      console.log(err);
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

    const { allResources , medicine , plasma , beds , activeResourceIndex , categories , oxygen} = this.state;
    const listArr = [allResources , medicine , beds , plasma , oxygen];
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
                    key = {item.id}
                    id={item.id}
                    date = {item.updated_at}
                    votes = {item.votes}
                    // votes = {item.downvotes}
                    verified = {item.verified}
                    verified_at = {item.verified_at}
                    updateVoteCount = {this.updateVoteCount}
                    phone = {item.phone}
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
