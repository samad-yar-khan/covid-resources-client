import loader from '../assets/images/loader2.gif'

function Loader(props) {



    return (
    
      <div className='min-h-screen  item-center justify-center width-screen'>
        
        <img src={loader} alt="LOADING..." className="mx-auto mt-48 h-20 w-20" />
      
      </div>
     
    );
  
  }
  
  export default Loader;
  