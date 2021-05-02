import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ResourceNavbar(props){


    
    
        return (
    
          <section className="text-gray-600 body-font relative">
            <div className="container px-1 py-2 mx-auto flex flex-wrap flex-col relative">
              <div className="whitespace-nowrap overflow-auto sm:flex  mb-5">
              <FontAwesomeIcon icon="angle-double-right" className="sm:hidden absolute right-0 top-5 text-blue-600 bg-white" />
                {
                    props.categories.map((item , index)=>{
                        return (<a onClick={()=>{props.changeResourceCatgory(index)}} key={index} className= {`cursor-pointer sm:px-6  py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none  tracking-wider ${index === props.activeResourceIndex ? 'text-blue-600 border-blue-600 bg-gray-100 rounded-t' : ' hover:text-gray-900 border-gray-200'} `}>
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
