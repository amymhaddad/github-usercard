/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


function createHeader(title){
  const h3 = document.createElement("h3")
  h3.className = "name";
  h3.innerText = title;
  return h3
}

function createParagraph(text, fieldName, className="") {
  const p = document.createElement("p");
  p.className = className;
  if (text == null) {
      p.innerText = `${fieldName}: No data available`
    } 
  
  else {
      p.innerHTML = `${fieldName}: ${text}`;
    }
  return p
}

function createLink(url, text) {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.innerText = text;
  return link;
}

function createButton() {
  const button = document.createElement("button");
  button.innerText = "Learn More";
  button.style.height = "30px";
  button.style.width = "75px";
  button.style.borderRadius = "6px";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer"
  return button;
}

function createArticle() {
  const p = document.createElement("p");
  p.className = "learn-more";
  p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return p;
}

function createProfile(url, username) {
  const p = document.createElement("p");
  p.innerHTML = `Profile: <a href=${url}>${username}</a>`;
  return p;
}


function createDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function createImg(attribute, attributeData) {
  const img = document.createElement("img");;
  img.setAttribute(attribute, attributeData);
  return img
}


function buttonClick(event) {
  const learnMore = event.target.previousSibling;
    
    learnMore.classList.toggle("learn-more");
    if (event.target.innerText == "Learn More") {
      event.target.innerText = "Close";
    }
    else {
      event.target.innerText = "Learn More";
    }
}


function createUserCard(data) {
  const cardInfoDiv = createDiv("card-info")

  const header = createHeader(data.name)
  const p1 = createParagraph(data.login, "Username", className="username")
  const p2 = createParagraph(data.location, "Location")
  const p3 = createProfile(data.html_url, data.login)
  const p4 = createParagraph(data.followers,"Followers");
  const p5 = createParagraph(data.following, "Following");
  const p6 = createParagraph(data.bio, "Bio")
  const p7 = createArticle();
  const button = createButton();

  const allElements = [header, p1, p2, p3, p4, p5, p6, p7, button]
  allElements.forEach(element => cardInfoDiv.appendChild(element))
  
  button.addEventListener("click", buttonClick);
  
  return cardInfoDiv;
  }
  

function createUserComponent(data) {
  const cards = document.querySelector(".cards");

  const cardDiv = createDiv("card")
  cards.appendChild(cardDiv);
 
  const img = createImg("src",`${data.avatar_url}`);
  cardDiv.appendChild(img)

  const newUserCard = createUserCard(data)
  cardDiv.appendChild(newUserCard)

}


function getFollowingPersonData(data){
  let url = data.forEach(user => {
    axios.get(user.url) 
    .then(function (response){
          createUserComponent(response.data);
      })
  });
}

function peopleFollowingData(mainUserPeopleFollowingUrl) {
  axios.get(mainUserPeopleFollowingUrl)
    .then(function (response) {
      getFollowingPersonData(response.data)
    })
    .catch(function (error) {
        console.log(error.response.status);
      })
}

function mainUserCard(data) {
  createUserComponent(data) 
}

axios.get("https://api.github.com/users/amymhaddad")
 .then(function (response) {
      let mainUserData = response.data;
      mainUserCard(mainUserData);
      
      const mainUserPeopleFollowingUrl = mainUserData.following_url.slice(0, mainUserData.following_url.indexOf("{"))
      peopleFollowingData(mainUserPeopleFollowingUrl);
 })
 .catch(function (error) {
   console.log(error);
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
