/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


//For friends: loop through severl people and passe them through teh data 
//Do first two bullets 
  

function createHeader(title){
  const h3 = document.createElement("h3")
  h3.className = "name";
  h3.innerText = title;
  return h3
}

function createParagraph(text, fieldName, className="") {
  const p = document.createElement("p");
  p.className = className;
  p.innerText = `${fieldName}: ${text}`;
  return p
}

function createLink(url, text) {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.innerText = text;
  return link;
}


function createUserCard(data) {
  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.className = "card-info";

  const header = createHeader(data.name)
  cardInfoDiv.appendChild(header);

  const p1 = createParagraph(data.login, "Username", className="username")
  cardInfoDiv.appendChild(p1)

  const p2 = createParagraph(data.location, "Location")
  cardInfoDiv.appendChild(p2)

  const link = createLink(data.html_url, data.login);
  const p3 = createParagraph(link, "Profile")
  p3.appendChild(link)
  cardInfoDiv.appendChild(p3);

  const p4 = createParagraph(data.followers,"Followers");
  cardInfoDiv.appendChild(p4);

  const p5 = createParagraph(data.following, "Following");
  cardInfoDiv.appendChild(p5);

  // const bio = document.createElement("p");
  // if (data.bio == null) {
  //   bio.innerText = "Bio: I'm a programmer."
  // } 
  // else {
  //   bio.innerText = `Bio: ${data.bio}`
  // }

  // cardInfoDiv.appendChild(bio);
  return cardInfoDiv;

  }


function createComponment(data) {

  const cards = document.querySelector(".cards");
  
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cards.appendChild(cardDiv);
 
  const img = document.createElement("img");
  img.setAttribute("src", `${data.avatar_url}`);
  cardDiv.appendChild(img)

  const newUserCard = createUserCard(data)
  cardDiv.appendChild(newUserCard)
  
}


axios.get('https://api.github.com/users/amymhaddad')
 .then(function (response) {
   createComponment(response.data);
 })
 .catch(function (error) {
   console.log(error.response.status);
 })

 





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

// const followersArray = [];

// //remember to run this in the broswer (ie index.html)
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
