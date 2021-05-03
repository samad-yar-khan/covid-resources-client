import loader from '../assets/images/loader2.gif'

function Loader(props) {



    return (
    
      <div className='min-h-screen  item-center justify-center width-screen'>
        
        <img src={loader} alt="LOADING..." className="mx-auto mt-32" />
      
      </div>
     
    );
  
  }
  
  export default Loader;
  