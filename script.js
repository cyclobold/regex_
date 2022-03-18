let btn = document.querySelector("#btn");
let formId = document.querySelector("#form-id");

formId.addEventListener("submit", function(e){
    e.preventDefault();

    //let pattern = /james@gmail.com/
    let pattern = /\w+@(gmail|yahoo|hotmail).(com|ng|net|org)/
    


    let email = document.querySelector("#email").value;

    let result = pattern.test(email);

    if(result){
        alert("You may proceed");
    }else{
        alert("wrong email address. We accept only gmail accounts");
    }


})





// btn.onclick = function(){
//     let username = document.querySelector("#username").value;


//     const pattern = /^happy/

//     let result = pattern.test(username);

//     if(result == true){
//         alert("You may proceed")
//     }else{
//         alert("Input must begin with 'happy'")
//     }


// }