import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';



class ResourceItem extends React.Component {


  constructor(){
    super();
    this.state = {
      liked:null//we will only maintaion whether a resoource is liked or not
    }
  }

  componentDidMount(){
    this.setState({
      liked:localStorage.getItem(`Liked-${this.props.id}`)//we will only maintaion whether a resoource is liked or not
    })
  }

  handleLikeClick(id , liked){

    let change = 0;
    if(liked === null ){
      
      //user hasnt done liked/ disliked
      change =1 ;
      localStorage.setItem(`Liked-${this.props.id}` , 'true');
      this.setState({
        liked : 'true'
      })
    }else if(liked === 'true'){
      change = -1 ;
      localStorage.setItem(`Liked-${this.props.id}` , null);
      this.setState({
        liked : null
      })
    }else {
      change = 2 ;
      localStorage.setItem(`Liked-${this.props.id}` , 'true');
      this.setState({
        liked : 'true'
      })
    }

    this.props.updateVoteCount(id , change)

  }

  handleDisikeClick(id , liked){

    let change = 0;
    if(liked === null ){
      
      //user hasnt done liked/ disliked
      change = -1 ;
      localStorage.setItem(`Liked-${this.props.id}` , false);
      this.setState({
        liked : 'false'
      })
    }else if(liked === 'false'){
      change = 1 ;
      localStorage.setItem(`Liked-${this.props.id}` , null);
      this.setState({
        liked : null
      })
    }else {
      change = -2 ;
      localStorage.setItem(`Liked-${this.props.id}` , false);
      this.setState({
        liked : 'false'
      })
    }

    this.props.updateVoteCount(id , change)

  }

  render(){

    const {title , description , date , link, votes , verified , id } = this.props;
    const {liked} = this.state


    return (
      <div className='p-2 bg-gray-50 mb-2'>
    
        <div className='header text-lg font-bold'>
            {title}
   
        </div>
        <p className='text-xs text-gray-400' >
        {date}
        </p>
        <div className ='description text-md '>
            {description}
        </div>
        <p className={`${verified?'text-green-500':'text-red-500'}`}>
          {verified?`Verified at ${date}`:'Unverified'}
        </p>
        <div>
           98732888882
            
        </div>

        <div className="button-conatiner flex w-24 justify-between mt-2">
         
            <button 
              onClick={()=>{this.handleLikeClick(id,liked)}}
              className={`relative flex text-white p-2 rounded font-bold text-xs overflow-visible mt-2 ${this.state.liked === 'true' ? 'bg-green-400' :'bg-blue-500'}`}
            >
              <FontAwesomeIcon icon="thumbs-up" />
            </button>
            <div className="font-bold pt-3 px-1 py-1 text-gray-500 text-s">{votes}</div>
            <button 
              onClick ={()=>{this.handleDisikeClick(id,liked)}}
              className={`relative text-white p-2 rounded font-bold overflow-visible text-xs mt-2  ${this.state.liked === 'false' ? 'bg-red-400' :  'bg-blue-500'}`}>
            <FontAwesomeIcon icon="thumbs-down" />
            {/* <div className="absolute top-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-red-500 rounded-full text-xs">{downvotes}</div> */}
            </button>
            </div>
        </div>
    
    );
  }

}

export default ResourceItem ;