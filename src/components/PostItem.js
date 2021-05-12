import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





class PostItem extends React.Component {


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

    this.props.updatePostVoteCount(id , change)

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

    this.props.updatePostVoteCount(id , change)

  }

  parseDateTime=(myDate)=>{
    const time = new Date(myDate).toLocaleTimeString('en',{ timeStyle: 'short', hour12: true, timeZone: 'IST' });
    return time;
  }

  parseDate =(myDate)=>{
    let date = new Date(myDate);  
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return (dt+'/'+month+'/'+year);
  }

  render(){

    const {name,title , content  , votes , id , createdAt ,location , phoneNumber , email} = this.props;
    const {liked} = this.state
    const time = this.parseDateTime(createdAt);
    const publishDate = this.parseDate(createdAt);
    // const showAllPhone = phoneNumbers === null || phoneNumbers === undefined || !Array.isArray(phoneNumbers);

    return (
      <div className='p-2 bg-gray-50 mb-2'>
    
        <div className='header text-lg font-bold'>
            {title}
   
        </div>
        {/* <p className='text-xs text-gray-400' >
        {date}
        </p> */}
        <div className ='description text-sm text-gray-500 font-bold '>
            {location}
        </div>
        <div className ='description text-sm  text-gray-600'>
            {content}
        </div>
        <p className={`text-sm text-green-500`}>
          {`Posted  by ${name} at ${publishDate}  ${time}`}
        </p>
      
        {/* {
          (!showAllPhone) &&
          <div className="text-sm  text-gray-600 flex flex-wrap">
            { phoneNumbers.map((number , numIndex) =>  <a className="pr-2"href={`tel:${number}` } key={numIndex}>{number}</a>)}
          </div>        
        } */}
        <div className="text-sm  text-gray-600 flex flex-wrap ">

          <a href={`tel:${phoneNumber}`} >{phoneNumber}</a>
                 
        </div>
        <div className="text-sm  text-gray-600 flex flex-wrap ">

          <a href={`mailto:${email}`} >{email}</a>
                 
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

export default PostItem ;