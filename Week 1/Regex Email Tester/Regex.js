let emailRegex = /[\w_.]+@[\w_.]{3,}\.{1}[a-z]{2,}$/;

// problems: regex should not allow multiple dots

function myFunction(){
  let inputtedEmail = document.getElementById("input").value;
  if(emailRegex.test(inputtedEmail) == true){
    alert("good email");
  } else {
    alert("bad email");
  }
}

document.getElementById("submit").addEventListener("click", myFunction, false);
