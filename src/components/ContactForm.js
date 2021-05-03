import React from 'react'
import axios from 'axios'


class ContactForm extends React.Component{

    constructor(){

        super();
        this.state = {
    
            userName : "" ,
            userEmail : "" ,
            mailContent : "",
            formSubmitted : false
    
    
        }   
        this.submitForm = this.submitForm.bind(this)
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

    resetState = ()=>{
        this.setState({
            
            userName : "" ,
            userEmail : "" ,
            mailContent : "",
            formSubmitted : true
        })

        setTimeout(()=>{
            this.setState({
                formSubmitted:false
            })
        },5000);
    }

    async submitForm(e) {
        e.preventDefault();
        const {  userName ,
        userEmail  ,
        mailContent} = this.state;
        
        try {

            const res = await axios ({
                method : 'POST' ,
                url : `https://covid-resources-enactus.herokuapp.com/messages`,
                data : {
                    "name":userName ,
                    "email": userEmail,
                    "content" : mailContent 
                }
              });
              
              this.resetState();

        } catch (err) {
            console.log(err);
        }

        // this.resetState();

        

    }




    render(){
        return (
           
            <form className= "flex flex-wrap -m-2" >
                {this.state.formSubmitted && 
                  <p className ="text-green-300">
                      Thank you for Contacting Us ! We will be reaching out to you soon !
                  </p>}
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
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
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                     value ={this.state.userEmail}
                        required
                        onChange={this.handleEmailChange}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="location" className="leading-7 text-sm text-gray-600">
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
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                    value ={this.state.mailContent}
                     onChange = {this.handleContentChange}
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button onClick={(e)=>{this.submitForm(e)}}className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Submit

                  </button>
                </div>
            </form>
       
            

        );
    }
   

}

export default ContactForm 