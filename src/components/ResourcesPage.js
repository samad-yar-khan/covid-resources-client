import React from 'react'
import ResourceItem from './ResourceItem'
import ResourcesNavbar from './ResourcesTab'
import PostItem from './PostItem'
import Footer from './Footer'
import UserPostsForm from './UserPostsForm'
// import {data} from '../resourceData'
import axios from 'axios'
import Loader from './Loader'

class ResourcesPage extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
      // data : data,
      activeResourceIndex : 0,
      allResources : [] ,
      medicine : [] ,
      beds : [],
      plasma : [],
      oxygen :[],
      categories : [],
      icu :[],
      userPosts:[],
      loading : true
    }
    
  }

  //filter items based on category
  filterCategory(id,item) {

    let idAvailable = false;

    item.categories.forEach((cat)=>{
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
        url : "https://covid-resources-enactus.herokuapp.com/categories"
      })    

     
      const resourcesRes = await axios({
        method : 'GET' ,
        url: "https://covid-resources-enactus.herokuapp.com/resources?_sort=verified_at:desc&_limit=200"
      })

      const userPosts = await axios({
        method : 'GET' ,
        url :"http://localhost:1337/community-posts?_sort=createdAt:desc&_limit=200"
      })

      const allResources = resourcesRes.data;
      // allResources.reverse();

      let categoryId =categoriesRes.data.map((category)=>category.id);

      let medicine = allResources.filter((item) => {return this.filterCategory(categoryId[2],item)});
      let oxygen = allResources.filter((item) => {return this.filterCategory(categoryId[0],item)});
      let plasma = allResources.filter((item) => {return this.filterCategory(categoryId[1],item)} );
      let beds = allResources.filter((item) => {return this.filterCategory(categoryId[3],item)} );
      let icu = allResources.filter((item) => {return this.filterCategory(categoryId[4],item)} );
      let categories = categoriesRes.data.map((category)=> category.name)
     
      categories =  ["All", "Community"  ,...categories];
      

      this.setState({
        allResources : allResources,
        plasma : plasma,
        oxygen :oxygen,
        medicine : medicine,
        beds : beds,
        icu : icu,
        categories : categories,
        userPosts : userPosts.data,
        loading : false
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

  async updateVoteCountInDB(id , num){

    try {
      
      await axios ({
        method : 'PUT' ,
        url : `https://covid-resources-enactus.herokuapp.com/resources/${id}`,
        data : {
          votes : num
        }
      });

    } catch (err) {
      console.log(err);
    }

  }

   updateVoteCount = (id , num) => { //we just add num to existig frequncy
      

    let { allResources } = this.state;
    let finalVotes = 0;
    allResources.forEach(resource => {
      if(resource.id === id){
        resource.votes += num;
        finalVotes =   resource.votes;
        }
    });

    this.setState({
      allResources:allResources
    })

    this.updateVoteCountInDB(id , finalVotes);
  }
  
  async updatePostVoteCountInDB(id , num){

    try {
      
      await axios ({
        method : 'PUT' ,
        url : `http://localhost:1337/community-posts/${id}`,
        data : {
          votes : num
        }
      });

    } catch (err) {
      console.log(err);
    }

  }

   updatePostVoteCount = (id , num) => { //we just add num to existig frequncy
      

    let { userPosts } = this.state;
    let finalVotes = 0;
    userPosts.forEach(post => {
      if(post.id === id){
        post.votes += num;
        finalVotes =   post.votes;
        }
    });

    this.setState({
      userPosts:userPosts
    })

    this.updatePostVoteCountInDB(id , finalVotes);
  }
  


  render(){

    if(this.state.loading === true ){
      return (<Loader />)
    }

    const { allResources , medicine , plasma , beds , activeResourceIndex , categories , oxygen , icu ,userPosts} = this.state;
    const listArr = [allResources , userPosts , oxygen , plasma , medicine , beds , icu];
    const list = listArr[activeResourceIndex];
    
    

    return (
      <div>
      <div className="flex flex-col  container px-2  mx-auto bg-white relative">
    
        <header className='overflow-hidden relative'>
          <div className='tabs relative'>
            <ResourcesNavbar
               activeResourceIndex = {activeResourceIndex} 
                categories = {categories}  
                changeResourceCatgory = {this.changeResourceCatgory}
            />
          </div>
        </header>
          
      <div className="min-h-screen">
        {/* {(list.length===0)&&
          <h1 className="text-xl font-bold text-blue-600 flex item-center justify-center px-4 py-6">
            We dont have any verfieds leads on this resource !
          </h1>
        } */}

        
        {//displaying Resources
        activeResourceIndex !== 1  &&

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
                    location = {item.location}
                    phoneNumbers ={item.phoneNumbers}
                  />
          })
        }

        {
          //Displaying posts 
          activeResourceIndex === 1 &&
          <div>
             <UserPostsForm />
          <div>
            {
               list.map((item)=>{
                return <PostItem
                        title = {item.title}
                        name = {item.name}
                        content = {item.content}
                        key = {item.id}
                        id={item.id}
                        date = {item.updated_at}
                        votes = {item.votes}
                        // votes = {item.downvotes}
                       createdAt = {item.createdAt}
                        updatePostVoteCount = {this.updatePostVoteCount}
                        location = {item.location}
                        phoneNumber ={item.phone}
                        email={item.email}
                      />
              })
          
            }
          </div>
          
          <p>hello</p>
          </div>
         
          
          

        }
        </div> 
      
      </div>

      <Footer/>
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
