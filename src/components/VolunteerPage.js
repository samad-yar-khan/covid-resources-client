import React from 'react'
import VolunteerForm from './VolunteerForm'



class VolunteerPage extends React.Component {

  
  render(){

   


    return (
      <div>

<div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Volunteer Form
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Volunteer with us . Help us veriify leads
            </p>
           
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              <VolunteerForm />
              
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:enactusnsut@gmail.com" target="_blank" className="text-blue-500" rel="noreferrer">enactusnsut@gmail.com</a>
                <p className="leading-normal my-5">
                  Netaji Subhas University of Technology, Azad Hind Fauj Marg
                  <br />
                  Dwarka Sector-3, Dwarka, Delhi, 110075
                </p>
                <span className="inline-flex">
                  <a href="https://www.facebook.com/EnactusNSUT/"  target="_blank" rel="noreferrer" className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/EnactusNSUT"  target="_blank" rel="noreferrer" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/enactusnsut/" rel="noreferrer" target="_blank" className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 Aashray —
              <a
                href="https://enactusnsut.com/"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enactus NSUT
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Social Entrepreneurs available 24x7
            </span>
          </div>
        </div>
    </div>
    );
  }

}


// function App() {
//   return (
//     <div className="App">
//        <Navbar/>
//     </div>
//   );
// }

export default VolunteerPage;
