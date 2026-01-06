
const postsContainer = document.getElementById("postsContainer");
const postsData = [
  { username:"Ayush9828", profile:"images/download-1.jpg", img: "images/download-1.jpg", likes: 98, comments: 12 },
  { username:"Sun393", profile:"images/download-2.jpg", img: "images/download-2.jpg", likes: 240, comments: 18 },
  { username:"uji93", profile:"images/download-3.jpg", img: "images/download-3.jpg", likes: 56, comments: 2 }
];

function createPost(post) {
  const div = document.createElement("div");
  div.className = "post";

  div.innerHTML = `
    <div class="user">
          <img src="${post.profile}">
          <span>
            ${post.username}
          </span>
          <i class="fa-solid fa-ellipsis"></i>
      </div>

      <div class="media">
        <img src="${post.img}">
      </div>

      <div class="actions">
        <div>
          <i class="fa-regular fa-heart likebtn" style="color: #ffffff;"></i>
          <span class="likeCount">${post.likes}</span>
          <svg class="commentbtn" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          <span class="commCount">${post.comments}</span>
          <svg aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
        <svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
      </div>

      <div class="caption">
        <span>${post.username}</span> This is a sample caption for the post.
      </div>

      <div class="addcomment">
        <input type="text" placeholder="Add a comment..." class="comminp"/>
        <button class="commbtn">Comment</button>
      </div>
  `;

  return div;
}

postsData.forEach(post => {
  postsContainer.appendChild(createPost(post));
});

for (let i = 0; i < postsData.length; i++) {
let liked = 0;
const likebtn = document.getElementsByClassName("likebtn")[i];
const likeCount = document.getElementsByClassName("likeCount")[i];
const commCount = document.getElementsByClassName("commCount")[i];
const commbtn = document.getElementsByClassName("commbtn")[i];
const comminp = document.getElementsByClassName("comminp")[i];
const commentbtn = document.getElementsByClassName("commentbtn")[i];



likebtn.addEventListener("click", () => {
  
  if (liked === 0) {
    let count = parseInt(likeCount.innerText);
    count += 1;
    likeCount.innerText = count;
    liked = 1;
    likebtn.setAttribute("style", "color: red");
    likebtn.setAttribute("class", "fa-solid fa-heart");
    likebtn.classList.add("pop");
    setTimeout(() => likebtn.classList.remove("pop"), 300);
  } else {
    let count = parseInt(likeCount.innerText);
    count -= 1;
    likeCount.innerText = count;
    liked = 0;
    likebtn.setAttribute("class", "fa-regular fa-heart");
    likebtn.classList.add("pop");
    setTimeout(() => likebtn.classList.remove("pop"), 300);
    likebtn.setAttribute("style", "color: #ffffff");
  }
});

commbtn.addEventListener("click", () => {
  let count = parseInt(commCount.innerText);
  count += 1;
  commCount.innerText = count;
});

commentbtn.addEventListener("click", () => {
  comminp.focus();
});
}


// login page and register page toggling
let userlogin=null;

document.getElementById("navlogin").addEventListener("click", ()=>{
   if(userlogin==null) {document.getElementsByClassName("logintab")[0].style.visibility="visible";}
})

document.getElementById("rightlogin").addEventListener("click", ()=>{
   if(userlogin==null) {document.getElementsByClassName("logintab")[0].style.visibility="visible";}
})


document.getElementsByClassName("closebtn")[0].addEventListener("click", ()=>{
    document.getElementsByClassName("logintab")[0].style.visibility="hidden";
})

document.getElementsByClassName("closebtn")[1].addEventListener("click", ()=>{
    document.getElementsByClassName("registertab")[0].style.visibility="hidden";
})

document.getElementsByClassName("signupredirect")[0].addEventListener("click", ()=>{
    document.getElementsByClassName("logintab")[0].style.visibility="hidden";
    document.getElementsByClassName("registertab")[0].style.visibility="visible";
})

document.getElementsByClassName("logindirect")[0].addEventListener("click", ()=>{
    document.getElementsByClassName("logintab")[0].style.visibility="visible";
    document.getElementsByClassName("registertab")[0].style.visibility="hidden";
})

 // registering a user


document.getElementById("registerbtn").addEventListener("click", (e)=>{
    e.preventDefault();
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let username=document.getElementById("regusername").value;
    let password=document.getElementById("regpassword").value;
    let confpassword=document.getElementById("confpassword").value;
    if(fname==="" || email==="" || username==="" || password==="" || confpassword===""){
        alert("please fill all the fields");
        return;
    }
    
    if(password.length<5){
        alert("Password should be minimum of 5 characters");
        return;
    }

    if(password!==confpassword){
        alert("passwords do not match");
        return;
    }

    // email format validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("please enter a valid email address");
        return;
    }

    if(localStorage.getItem(username)!==null){
        alert("username already exists, please choose a different username");
        return;
    }


     let user={
        fname:fname,
        lname:lname,
        email:email,
        username:username,
        password:password
     }
        
     localStorage.setItem(username, JSON.stringify(user));
        alert("registration successful, please login");
        document.getElementsByClassName("registertab")[0].style.visibility="hidden";
        document.getElementsByClassName("logintab")[0].style.visibility="visible";
})

// logging in a user


document.getElementById("loginbtn").addEventListener("click", (e)=>{
    e.preventDefault();
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let entereduser=localStorage.getItem(username);
    if(entereduser==null){
        alert("user not found, please register");
        return;
    }
    userobj=JSON.parse(entereduser);
    if(userobj.password!==password){
        alert("incorrect password");
        return;
    }
    alert("login successful");
    localStorage.setItem("login", JSON.stringify(userobj));
    location.reload();
   

})
// After login
userlogin=JSON.parse(localStorage.getItem("login"));

if(userlogin===null){
    setTimeout(() => {document.getElementsByClassName("registertab")[0].style.visibility="visible";}, 7000);
   }

if(userlogin!==null){
    document.getElementById("navlogin").innerHTML=`<i class="fa-solid fa-circle-user"></i><span> &nbsp;${userlogin.username}</span>`;
    document.getElementById("rightlogin").innerHTML=`<i class="fa-solid fa-circle-user"></i><span> &nbsp;${userlogin.username}</span>`;
}

if(userlogin!=null){
document.getElementById("rightlogin").innerHTML=`<div class="topuser" style="display:inline; cursor: pointer"><i class="fa-solid fa-user"></i> ${userlogin.fname}</div><button class="logoutbtn">Logout</button>`;
document.getElementById("navlogin").innerHTML=`<div class="topuser" style="display:inline; cursor: pointer"><i class="fa-solid fa-user"></i> ${userlogin.fname}</div><button class="logoutbtn">Logout</button>`;
}

document.getElementsByClassName("logoutbtn")[0].addEventListener("click", ()=> {
localStorage.removeItem("login");
location.reload();
})

if(userlogin!=null){
    document.getElementsByClassName("dclose")[0].addEventListener("click", ()=> {
        document.getElementsByClassName("userdetail")[0].style.visibility="hidden";
    })

    document.getElementsByClassName("topuser")[0].addEventListener("click", ()=> {
        document.getElementsByClassName("userdetail")[0].style.visibility="visible";
    })

    
       document.getElementById(`detail0`).innerText = `First Name: ${userlogin.fname}`;
       document.getElementById(`detail1`).innerText = `Last Name: ${userlogin.lname}`;
       document.getElementById(`detail2`).innerText = `Username: ${userlogin.username}`;
       document.getElementById(`detail3`).innerText = `Email Id: ${userlogin.email}`;  
    
}

if(userlogin!=null){
document.getElementsByClassName("login")[0].innerHTML=`<div class="topuser" style="display:inline; cursor: pointer"><i class="fa-solid fa-user"></i> ${userlogin.fname}</div><button class="logoutbtn">Logout</button>`;
document.getElementsByClassName("logoutbtn")[0].addEventListener("click", ()=> {
localStorage.removeItem("login");
location.reload();
})
}






