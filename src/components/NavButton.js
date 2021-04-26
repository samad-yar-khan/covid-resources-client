

function NavButton(props) {



  return (
  
    <a className={`mr-5 mt-2 py-1 px-3 hover:text-gray-900 font-bold ${ props.index == props.activeTabIndex ? ' bg-blue-500 rounded-md text-white': null}`}>
      
      {props.tabName}
    
    </a>
   
  );

}

export default NavButton;
