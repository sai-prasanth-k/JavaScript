let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };
  
  let profileContainerEl = document.getElementById("profileContainer");
  let imgContainerEl = document.getElementById("imgContainer");
  
  profileContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");
  
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", profileDetails.imgSrc);
  imgEl.classList.add("profile-img");
  imgContainerEl.appendChild(imgEl);
  
  let nameEl = document.createElement("h1");
  nameEl.classList.add("profile_name", "mt-3");
  nameEl.textContent = profileDetails.name;
  nameEl.style.fontSize = "24px";
  profileContainerEl.appendChild(nameEl);
  
  let ageEl = document.createElement("p");
  ageEl.classList.add("profile_age");
  ageEl.textContent = "Age : " + profileDetails.age;
  ageEl.style.fontWeight = "bold";
  profileContainerEl.appendChild(ageEl);