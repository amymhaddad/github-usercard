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
    
  // if (text.startsWith("http")) {
  //   p.innerText = `${fieldName}:`;
  //   }
  else {
      p.innerText = `${fieldName}: ${text}`;
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

function createUserCard(data) {
  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.className = "card-info";
  
  const header = createHeader(data.name)

  const p1 = createParagraph(data.login, "Username", className="username")
  const p2 = createParagraph(data.location, "Location")

  const link = createLink(data.html_url, data.login);
  const p3 = createParagraph(link, "Profile")
  p3.appendChild(link)

  const p4 = createParagraph(data.followers,"Followers");
  const p5 = createParagraph(data.following, "Following");
  const p6 = createParagraph(data.bio, "Bio")
  const p7 = createArticle();
  const button = createButton();

  const allElements = [header, p1, p2, p3, p4, p5, p6, p7, button]
  allElements.forEach(element => cardInfoDiv.appendChild(element))


  // const buttonClick = function(event) 

  button.addEventListener("click", function(event){
    const learnMore = event.target.previousSibling;
  
    learnMore.classList.toggle("learn-more");

    if (button.innerText == "Learn More") {
      button.innerText = "Close";
    }
    else {
      button.innerText = "Learn More";
    }
  });
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


function getPersonData(data){
  let url = data.forEach(user => {
    axios.get(user.url) 
    .then(function (response){
          createComponment(response.data);
      })
  });

}


function accessOthersData(peopleData) {    
  axios.get(peopleData)
    .then(function (response) {
      getPersonData(response.data)
    })
    .catch(function (error) {
        console.log(error.response.status);
      })
}


function accessUserData(data) {
  createComponment(data) 
  console.log(data)
  const following_url = data.following_url
  const peopleIFollow = following_url.slice(0, following_url.indexOf("{"))
  accessOthersData(peopleIFollow)
}


axios.get("https://api.github.com/users/amymhaddad")
 .then(function (response) {
   accessUserData(response.data);
 })
 .catch(function (error) {
   console.log(error);
 })



 //Need to put a height on the size of the card class -- but having trouble getting this to work properly
// const allCards = document.querySelectorAll(".cards"); 
// const button = document.querySelectorAll



// const allCards = document.querySelectorAll(".card");
// console.log(allCards)
// for (let card of allCards) {
//   card.style.height = "10px";
// }


// const cardContainers = document.querySelector(".cards")
// for (let card of cardContainers) {
//   card.style.height = "100px"
// }



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
