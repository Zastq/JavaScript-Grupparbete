document.addEventListener("DOMContentLoaded", main);


function main(){

}

function sumbitLogin(event){
    event.preventDefault();

    let bokningInfo = document.getElementById("bokningInfo");

    const inputName = document.getElementById("loginUserName");
    const inputPassword = document.getElementById("loginPassword");
    const errorMessage = document.getElementById("errorMessage");

    if(inputName.value == "Admin" && inputPassword.value =="123abc")
    {
        errorMessage.innerText = "Correct!"
        console.log("Correct!");
        fetch("../myfile.json").then(response => response.json()).then(result => {
            result.forEach(element => {
                const userNameElement = document.createElement("p");
                const userEmailElement = document.createElement("p");
                const altElement = document.createElement("p");
                const commentElement = document.createElement("p");
    
                userNameElement.innerHTML = "<b>Namn: </b>" + element.username;
                userEmailElement.innerHTML = "<b>Epost: </b>" + element.email;
                altElement.innerHTML = "<b>Typ: </b>" + element.alternativ;
                commentElement.innerHTML = "<b>Kommentar: </b>" + element.bookingcomment;
    
                bokningInfo.append(userNameElement,userEmailElement,altElement ,commentElement, document.createElement("hr"));

            }
        )})
        
        
    }
    else{
        errorMessage.innerText = "Incorrect!"
        console.log("Incorrect..");
    }
    loginForm.reset();
}