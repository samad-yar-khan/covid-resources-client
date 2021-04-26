import React from 'react'



class ResourceItem extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
      
    }
     //we put this in the constrcutor because it will be used again and again to aceess the firestore

    //method 2 , we bind our functions to this (otherwise their 'this' value wull be uundefined when they are assigned to an event listenr or aany other var)
    // this.increaseQuantity = this.increaseQuantity.bind(this)}
  }


  render(){

    


    return (
      <div class='p-2'>
       
      
        <div class='header text-lg font-bold'>
            Oxygen Cylender
        </div>
        <div class ='description text-md '>
            Oxygen cylenders avialable
        </div>
        <div>
            <a href=''>Link</a>
            
        </div>

        <div class="button-conatiner flex w-24 justify-between mt-2">
          <button class='relative bg-blue-500 text-white p-2 rounded font-bold text-xs overflow-visible mt-2'>
            UP
            <div class="absolute top-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-red-500 rounded-full text-xs ">1</div>
            </button>
            
            <button class='relative bg-blue-500 text-white p-2 rounded font-bold overflow-visible text-xs mt-2'>
            DN
            <div class="absolute top-0 right-0 -mt-4 -mr-4 px-1 py-1 bg-red-500 rounded-full text-xs">2000</div>
            </button>
            </div>

        </div>
    
    );
  }

}

export default ResourceItem ;