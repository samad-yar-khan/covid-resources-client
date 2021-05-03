import React from 'react'
import NavButton from './NavButton'
import EnactusLogo from '../assets/images/ashray.png'
import { Link } from 'react-router-dom'



function Navbar(props){

    const {tabs , activeTabIndex , changeTab } = props;
    
        return (
        <header className="text-gray-600 body-font mt-2 mb-2 ">
             <div className="container mx-auto flex  p-1 flex-row items-center">
               
                <img src={EnactusLogo} alt="Enactus NSUT" fill="none" stroke="currentColor" stroke-ss="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-20 sm:h-20 w-10 h-10 relative top-1 text-white p-1 bg-white rounded" />
                    
               
                {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                
                <nav className="ml-auto flex justify-items-end text-base justify-end items-end cursor-pointer justify-end">
                    {
                        tabs.map((tab , index) => {
                            
                                return <Link to ={tab.tabLink} key={index}>
                                    <NavButton 
                                    tabName = {tab.tabName}
                                    key ={index}
                                    index = {index}
                                    activeTabIndex  = {activeTabIndex}
                                    changeTab = {changeTab}
                                /></Link>
                        })
                    }
              
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button> */}
            </div>
        </header>
       );
    

}

export default Navbar;
