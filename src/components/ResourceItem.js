import React from 'react'



class ResourceItem extends React.Component {

 


  render(){

    const {title , description , date , link, upvotes , downvotes } = this.props;


    return (
      <div class='p-2'>
    
        <div class='header text-lg font-bold'>
            {title}
        </div>
        <div class ='description text-md '>
            {description}
        </div>
        <div>
            <a href={`${link}`} >Link</a>
            
        </div>

        <div class="button-conatiner flex w-24 justify-between mt-2">
          <button class='relative bg-blue-500 text-white p-2 rounded font-bold text-xs overflow-visible mt-2'>
            UP
            <div class="absolute top-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-red-500 rounded-full text-xs ">{upvotes}</div>
            </button>
            
            <button class='relative bg-blue-500 text-white p-2 rounded font-bold overflow-visible text-xs mt-2'>
            DN
            <div class="absolute top-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-red-500 rounded-full text-xs">{downvotes}</div>
            </button>
            </div>

        </div>
    
    );
  }

}

export default ResourceItem ;