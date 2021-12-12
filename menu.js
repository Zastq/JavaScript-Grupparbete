document.addEventListener("DOMContentLoaded", main);


function main(){

}

function menuBooking(event){
    const bookingförnamn = document.getElementById("förnamn")
    const bookingefternamn = document.getElementById("efternamn")
    const bookingMejlAdress = document.getElementById("Mejl Adress")
    const bookingsub = document.getElementById("sub")
    event.preventDefault();



    if (bookingförnamn.value === '' || bookingförnamn.value == null){
        alert("fyll i namn")
    }

    if (bookingefternamn.value === '' || bookinglastname.value == null){
        alert("Fyll i efternamn")
    }

    if (bookingMejlAdress.value === '' || bookingMejlAdress.value == null){
        alert("fyll i Mejl adress")
    } 
    else if (!bookingMejlAdress.value.match(/^\S+@\S+/)){
        alert("!Error!, skriv rätt format")
    }

    if (bookingsub.value === '' || bookingsub.value == null){
        alert("Skriv ditt meddelande ")
    }
const data = new FormData(event.target)
fetch("omoss.html/bookingSubmited", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(Object.fromEntries(data))})
}