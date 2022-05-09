//Examine doc object 
console.dir(document);
console.log(document.domain);
console.log(document.doctype);

//get element by id
var headerTitle = document.getElementById("header-title");
//changes text. overrides any styling
headerTitle.textContent = 'Emeka is Desert Power';
//this is a better use since it outputs the stylizing from html file
headerTitle.innerText = "Emeka: \"I am Desert Power\" ";
//can use inner html so replacement will be placed inside original DOM el
headerTitle.innerHTML = "We are Desert Power";
console.log(headerTitle);