import React from 'react'




function Footer(){

    return(
        <div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a href="mailto:enactusnsit@gmail.com" target="_blank" className="text-blue-500" rel="noreferrer">enactusnsit@gmail.com</a>
        <p className="leading-normal my-5">
          Netaji Subhas University of Technology, Azad Hind Fauj Marg
          <br />
          Dwarka Sector-3, Dwarka, Delhi, 110075
        </p>
        <span className="inline-flex">
          <a href="https://www.facebook.com/EnactusNSUT/" className="text-gray-500" target="_blank" rel="noreferrer">
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
          <a href="https://twitter.com/EnactusNSUT" className="ml-4 text-gray-500" target="_blank" rel="noreferrer">
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
          <a href="https://www.instagram.com/enactusnsut/" className="ml-4 text-gray-500"  target="_blank" rel="noreferrer">
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
              <div className="bg-gray-100">
              <div className="container mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">
                  © 2021 Aashray —
                  <a
                    rel="noreferrer"
                    href="https://enactusnsut.com/"
                    className="text-gray-600 ml-1"
                    target="_blank"
                   
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
    )

}


export default Footer