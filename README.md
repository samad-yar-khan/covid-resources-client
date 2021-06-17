<h1 align="center">
     Covid Help
</h1>

<blockquote align="center">
  <b><i>
   This was an initiative by Enactus NSUT to help people get access to resources such as ICU Beds , Oxygen Cylinders , Medicines etc which were essential for patients suffering from Covid-19 . The WebApp proved to be very useful at the time of the second wave of covid-19 in India and impacted over 5000 people in the first week . The resoures were constanty being updated by thee EnactusNSUT team and the volunteers . If you are need of resources , check out the website - https://www.covidhelp.enactusnsut.com
  </i></b>
</blockquote>

<br/>

## Installation

To run the Web Application on your local system download Node.js - https://nodejs.org/en/download/ . This will give you access to the node package manager which is essential to run the project .

### 📌 Setting up project using `npm` :

1. Open this cloned folder in the text editor of your choice.
2. If you want to use the project using `npm` then that comes alongside when you download and install node js.

### 🚩 Running in Development mode :

1. Open the terminal and type in `npm install`, to install all the dependencies.
2. Run: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. The page will reload if you make edits.

### 🚩 Testing changes :

1. After doing changes type `npm test`. This launches the test runner in the interactive watch mode.
2. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 🚩 Building project :

1. Run the command `npm run build`
2. Builds the app for production to the `build` folder.
3. It correctly bundles React in production mode and optimizes the build for the best performance.
4. The build is minified and the filenames include the hashes.
   Your app is ready to be deployed!
5. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Usage



After typing `npm start` in the terminal , the project can be used opened on [http://localhost:3000](http://localhost:3000).



### 1)Resources Page 

<ul>
  <li>Resources Page will give you access to the latest verified resources from different category tabs</li>
  <li>You can add your own resources</li>
  <li>Upvote or downvote resources </li>
 </ul>


### 2)Twitter Search Page
  
  <ul>
  <li>Access to basic information regarrding covid-19</li>
  <li>Link to a website using which you can search resources on twitter using tags and city</li>
  </ul>

### 3)Volunteer Page
  
   <ul>
  <li>Contains a volunteer form which allows user to get access to the data database and credentials to the server</li>
  </ul>

<div>
  
  ### Mobile View
  <img alt='demo' height="400px" src='https://user-images.githubusercontent.com/70485812/122311144-2bc9f380-cf2f-11eb-9b45-a0d883b0d118.gif'/>
  
  ### Desktop View
 <img alt='demo'  height="400px" src='https://user-images.githubusercontent.com/70485812/122311846-b19a6e80-cf30-11eb-8e16-8eb4bc961b2a.gif' />
 
</div>

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.Please make sure to update tests as appropriate.
### 📌 Prerequisites

### 💻 1. System requirement :

1. Any system with basic configuration.
2. Operating System : Any (Windows / Linux / Mac).

### 💿 2. Software requirement :

1. Updated browser
2. Node.js installed (If not download it [here](https://nodejs.org/en/download/)).
3. Any text editor of your choice.

### ⚡ 3. Skill set :

1. Knowledge of git & github.
2. JavaScript
3. [ReactJS](https://reactjs.org/)
4. TailWindCSS

## Features In Pipeline 
  
1. Adding Authentication for users posting resources , and adding authenticated likes.
2. Adding Search feature for resources .
3. Filtering Resources by different feilds - likes , verifies tag , date & time.
4. Adding a location filter to resources .
5. Add

## Server Side

Due to the time constraints and urgency of the situation , the project was made using a [strappy](https://strapi.io/) node.js sever , hence we will be migrating the server to different server which will made using Node.js and Express.js . Please  head over to the [covid-sever](https://github.com/samad-yar-khan/covid-resources-server-mongodb) project to get an idea of the backend API .
