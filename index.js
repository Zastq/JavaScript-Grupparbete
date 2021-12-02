document.addEventListener("DOMContentLoaded", main);


function main(){

}

function activitesSubmit(event){
    //console.log(event.target);

    const inputName = document.getElementById("username")
    const inputEmail = document.getElementById("email")
    const inputAlt = document.getElementById("alternativ") // Unsure if needed.
    const inputComment = document.getElementById("bookingcomment")
    const errorMessage = document.getElementById("errorMessage");

    let messages = [];

    if (inputName.value === '' || inputName.value == null) {
        messages.push("Name cannot be empty")
    } 


    if (inputEmail.value === '' || inputEmail.value == null) {
        messages.push("Email cannot be empty")
    } else if (!inputEmail.value.match(/^\S+@\S+/)) 
    {
        messages.push("Incorrect email input.")
    }


    if (inputComment.value === '' || inputComment.value == null) {
        messages.push("Comment cannot be empty")
    } 


    if (messages.length == 0) {
        messages.push("Sucess!")

        const data = new FormData(event.target);
        fetch("/Aktiviteter.html/activitySubmited", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(Object.fromEntries(data))})
    }

    errorMessage.innerText = messages.join(", \n");

    event.preventDefault();

}