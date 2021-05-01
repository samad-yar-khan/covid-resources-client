import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class ResourceItem extends React.Component {

 


  render(){

    const {title , description , date , link, upvotes , downvotes , verified } = this.props;


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
          {verified?'Verified':'Unverified'}
        </p>
        <div>
            <a href={`${link}`} >Link</a>
            
        </div>

        <div className="button-conatiner flex w-24 justify-between mt-2">
          <button className='relative bg-blue-500 text-white p-2 rounded font-bold text-xs overflow-visible mt-2'>
          <FontAwesomeIcon icon="thumbs-up" />
            <div className="absolute bottom-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-white rounded-full text-xs text-blue-600 ">{upvotes}</div>
            </button>
            <div className="absolute bottom-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-white rounded-full text-xs text-blue-600 ">{upvotes}</div>
            <button className='relative bg-blue-500 text-white p-2 rounded font-bold overflow-visible text-xs mt-2'>
            <FontAwesomeIcon icon="thumbs-down" />
            <div className="absolute top-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-red-500 rounded-full text-xs">{downvotes}</div>
            </button>
            </div>
        </div>
    
    );
  }

}

export default ResourceItem ;