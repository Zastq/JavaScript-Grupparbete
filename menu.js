document.addEventListener("DOMContentLoaded", main);


function main(){

}

function menuBooking(event){
    const bookingName = document.getElementById("Namn")
    const bookingEmail = document.getElementById("E-post")
    const bookingOther = document.getElementById("Other")
    event.preventDefault();


    if (bookingName.value === '' || bookingName.value == null){
        alert("You must enter a name")
    }

    if (bookingEmail.value === '' || bookingEmail.value == null){
        alert("You must enter an Email")
    } 
    else if (!bookingEmail.value.match(/^\S+@\S+/)){
        alert("An error occurred. Please enter a valid email format")
    }

    if (bookingOther.value === '' || bookingOther.value == null){
        alert("Please specify number of guests, time, date and any allergies. Your request will not be handeled otherwise")
    }
const data = new FormData(event.target)
fetch("menu.html/bookingSubmited", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(Object.fromEntries(data))})
}