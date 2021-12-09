document.addEventListener("DOMContentLoaded", main);

async function main(){
    const response = await fetch( "https://ghibliapi.herokuapp.com/films" );
    const data = await response.json();

    // title, original_title_romanised, description, rt_score.


    for(const movie of data){

       
        const {title, original_title_romanised, description, rt_score, image, ...rest} = movie; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

        console.log(title, original_title_romanised, description, rt_score, image); // skriver ut dom bestämda values.
        console.log(rest); // skriver ut resten

        let movieDiv = document.getElementById("movieDiv");

        // let titleElement = document.createElement("p")
        // titleElement.innerHTML = title;
        
        // let titleRomanisedElement = document.createElement("p")
        // titleRomanisedElement.innerHTML = original_title_romanised;

        // let descriptionElement = document.createElement("p")
        // descriptionElement.innerHTML = description;

        // let rtScoreElement = document.createElement("p")
        // rtScoreElement.innerHTML = rt_score;

        // let imageElement = document.createElement("img")
        // imageElement.src = image;



        const template = document.querySelector("#movieCard")
        let clone = template.content.cloneNode(true)

        let elements = clone.querySelectorAll("*") // Börjar på 1, pga div "card"
        elements[1].textContent = title;
        elements[2].textContent = original_title_romanised;
        elements[3].textContent = description;
        elements[4].textContent += rt_score; // notera +=, så kan vi ha text i template istället. 
        elements[5].onclick = function(){
            console.log(movie.producer);
            console.log(movie.director);
            console.log(movie.release_date);
            console.log(movie.running_time);

            movieDiv.hidden = true;

            const template2 = document.querySelector("#moreInfoCard")
            let clone2 = template2.content.cloneNode(true)

            let moreInfo = document.getElementById("moreInfo")
            moreInfo.hidden = false;

            let elements2 = clone2.querySelectorAll("*")
            elements2[1].textContent = title;
            elements2[2].textContent = original_title_romanised;
            elements2[3].textContent = description;
            elements2[4].textContent += rt_score;
            elements2[5].textContent += movie.director;
            elements2[6].textContent += movie.producer;
            elements2[7].textContent += movie.release_date;
            elements2[8].textContent += movie.running_time;
            elements2[9].onclick = function(){
                moreInfo.hidden = true;
                movieDiv.hidden = false;

            }
            elements2[10].src = movie.movie_banner;

            moreInfo.innerHTML= "";
            moreInfo.appendChild(clone2);

        }
        elements[6].src = image;

        movieDiv.appendChild(clone);



        // let testTitle = clone.querySelector(".movieTitle") // Mer Kontroll, men kräver en class för varje element som ska editeras.
        // testTitle.textContent = "Test Title";
        // movieDiv.appendChild(clone);

        
    }



};

