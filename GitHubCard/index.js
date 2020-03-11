/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const axios = require('axios');

//Q1 - shouldn't I store the response into an object so I can easily use it when creating component?
let gitHubData;
//Q2 - Did I define the CDN library correctly in index file? Get an error that document is not defined
//Q3 - No img key listed in my github request data


const getApi = () => {
  //axios is a function that i'm defining. THen I need to call it somehow hwihc is what I do below
  return (axios.get('https://api.github.com/users/amymhaddad')
    .then(function(response) {
      this.response = response.data
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  )
}


//I need to wait for the function to run so I can get the response 
// getApi()
//   .then(response => passDatatoHTML(response))

 


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

// const div = document.createElement("div");
// div.className = "card";


// const image = document.createElement("img");
// image.setAttribute()
// div.appendChild(image);





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
