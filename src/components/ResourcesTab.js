import React from 'react'


function ResourceNavbar(props){


    
    
        return (
    
          <section className="text-gray-600 body-font">
            <div className="container px-1 py-2 mx-auto flex flex-wrap flex-col">
              <div className="flex flex-wrap mb-5">
                {
                    props.categories.map((item , index)=>{
                        return (<a onClick={()=>{props.changeResourceCatgory(index)}} key={index} className= {`cursor-pointer sm:px-6  py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none  tracking-wider ${index === props.activeResourceIndex ? 'text-blue-600 border-blue-600 bg-gray-100 rounded-t' : ' hover:text-gray-900 border-gray-200'} `}>
                                 {item}
                                </a>)
                    })
                }
              </div>
            </div>
          </section>
        );
     
    }
    


export default ResourceNavbar;
