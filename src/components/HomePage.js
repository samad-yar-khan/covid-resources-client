import React from "react";
// import TagInput from "./TagInput";
import homeimage from "../assets/images/homepage.png";
import ContactForm from './ContactForm'

function HomePage() {
  // const [selected, setSelected] = useState([]);
  // const requirements = [
  //   "Beds",
  //   "ICU",
  //   "Tests",
  //   "Food",
  //   "Plasma",
  //   "Ventilator",
  //   "Fabiflu",
  //   "Remdesivir",
  //   "Favipiravir",
  // ];


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:px-5 pt-10 pb-4 sm:justify-center items-center px-0">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={homeimage}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-1 font-medium text-gray-900">
            Twitter search for Covid-19
            </h1>
            <svg
                      fill="#1da1f2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
            <p className="mb-8 leading-relaxed text-xs sm:text-md">
            Search for all Covid-19 resources on Twitter using filters
            </p>
            {/* <div className="flex flex-col w-full justify-center items-center">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-4/5 md:w-80% text-left my-5">
                <label for="hero-field" className="leading-7 text-lg text-gray-600">
                  Name of the city
                </label>
                <input
                  type="text"
                  placeholder="Enter the city name here"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-blue-200 focus:bg-transparent border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-4/5 md:w-full text-left my-5 sm:w-80%">
                <label for="hero-field" className="leading-7 text-lg text-gray-600">
                  Requirements
                </label>
                <div className="flex flex-wrap justify-between">
                  {requirements.map((e) =>
                    selected.indexOf(e) !== -1 ? (
                      <div
                        className="mt-2 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer"
                        onClick={() => setSelected(s => s.filter(e_ => e_ !== e))}
                        >
                        {e}
                      </div>
                    ) : (
                      <div
                        className="mt-2 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer"
                        onClick={() => setSelected([...selected, e])}
                        >
                        {e}
                      </div>
                    )
                  )}
                </div>
              </div>
              <TagInput />
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-4/5 md:w-full text-left my-5">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="focus:outline-none" />
                  <span className="ml-2">
                    Show verified Tweets only
                  </span>
                </label>
                <br/>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="focus:outline-none" />
                  <span className="ml-2">Show Tweets near me</span>
                </label>
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-4/5 md:w-full text-left my-3">
                <div className="mt-2 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Generate Links
                </div>
              </div>
            </div> */}
            <a href="https://covid19-twitter.in/" 
              className="flex h-11 w-aoto px-4 bg-blue-400 rounded justify-center items-center text-white" 
              target="_blank"  
              rel="noopener noreferrer"
            >
              <div>
                Covid-19 Twitter Leads Here
              </div>
            </a>
            
          </div>
        </div>
      </section>
     
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-4 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Guidelines to follow
            </h1>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-blue-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-16 sm:h-16 w-10 h-10" fill="#fff" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                Payments
              </h2>
              <p className="leading-relaxed text-xl">
                Do not make advanced payments unless you are 100% sure about
                their authenticity.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                Verification
              </h2>
              <p className="leading-relaxed text-xl">
                Check for replies under the tweets for the verification of the
                contact.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-blue-500 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-16 sm:h-16 w-10 h-10" fill="#fff" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-blue-500 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 20 20" fill="#fff">
  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
</svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                Sorting
              </h2>
              <p className="leading-relaxed text-xl">
                Make sure search results are sorted by ‘Latest’.

              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please feel free to talk to us if you have any questions.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              <ContactForm />
              
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:enactusnsut@gmail.com" target="_blank" className="text-blue-500" rel="noreferrer">enactusnsut@gmail.com</a>
                <p className="leading-normal my-5">
                  Netaji Subhas University of Technology, Azad Hind Fauj Marg
                  <br />
                  Dwarka Sector-3, Dwarka, Delhi, 110075
                </p>
                <span className="inline-flex">
                  <a href="https://www.facebook.com/EnactusNSUT/" target="_blank" className="text-gray-500" rel="noreferrer">
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
                  <a href="https://twitter.com/EnactusNSUT" target="_blank" className="ml-4 text-gray-500" rel="noreferrer">
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
                  <a href="https://www.instagram.com/enactusnsut/" target="_blank" className="ml-4 text-gray-500"  rel="noreferrer">
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
                rel="noreferrer"
              >
                Enactus NSUT
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Social Entrepreneurs available 24x7
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
