import React from 'react'
import NavButton from './NavButton'
import EnactusLogo from '../assets/images/enactus.jpg'



function Navbar(props){

    const {tabs , activeTabIndex} = props;
    
        return (
        <header className="text-gray-600 body-font">
             <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
               
                <img src={EnactusLogo} alt="Enactus NSUT" fill="none" stroke="currentColor" stroke-ss="round" stroke-linejoin="round" stroke-width="2" className="w-32 h-32 text-white p-1 " />
                    
               
                {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                
                <nav className="md:ml-auto flex flex-wrap justify-items-end text-base justify-end cursor-pointer">
                    {
                        tabs.map((tabName , index) => {
                            return <NavButton 
                                tabName = {tabName}
                                key ={index}
                                index = {index}
                                activeTabIndex  = {activeTabIndex}
                            />
                        })
                    }
                {/* <a className="mr-5 mt-5 py-1 px-3 hover:text-gray-900 bg-blue-500 rounded-md">Home</a>
                <a className="mr-5 mt-5 py-1 px-3 hover:text-gray-900 rounded-md">Resources</a>
                <a className="mr-5 mt-5 py-1 px-3 hover:text-gray-900 rounded-md">Volunteer</a>
                <a className="mr-5 mt-5 py-1 px-3 hover:text-gray-900 rounded-md">Contact Us</a> */}
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button> */}
            </div>
        </header>
       );
    

}

export default Navbar;
