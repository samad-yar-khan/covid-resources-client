

function NavButton(props) {



  return (
  
    <div onClick={ () => {props.changeTab(props.index)}} className={`mr-5 mt-2 py-1 px-3 font-bold ${ props.index === props.activeTabIndex ? 'hover:text-gray-50 bg-blue-500 rounded-md text-white': 'hover:text-gray-900' }`}>
      
      {props.tabName}
    
    </div>
   
  );

}

export default NavButton;
