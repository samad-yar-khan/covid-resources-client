import React from 'react'
import axios from 'axios'


class ContactForm extends React.Component{

    constructor(){

        super();
        this.state = {
    
            userName : "" ,
            userEmail : "" ,
            mailContent : ""
    
        }   

    }

    handleNameChange = (event)=>{
        let userName = event.target.value;
        this.setState({
            userName :userName
        })
        
    }
    handleEmailChange = (event)=>{
        let userEmail = event.target.value;
        this.setState({
            userEmail :userEmail
        })
      
    }
    handleContentChange = (event)=>{
        let mailContent = event.target.value;
        this.setState({
            mailContent :mailContent
        })
     
    }

    submitForm = ()=>{

        axios.post("")


    }




    render(){
        return (
           
            <form className= "flex flex-wrap -m-2" onSubmit = {}>
                <div className="p-2 w-1/2">
                  
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                        value ={this.state.userName}
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange = {this.handleNameChange}
                   />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                        required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="location" className="leading-7 text-sm text-gray-600">
                      Location
                    </label>
                    <input
                        required
                      type="text"
                      id="location"
                      name="location"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div> */}
                <div className="p-2 w-full">
                  <div className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Submit
                  </button>
                </div>
            </form>
       
            

        );
    }
   

}

export default ContactForm 