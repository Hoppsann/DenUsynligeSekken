// console.log("Hello World!")

// const button = document.getElementById("leggTil")

// button.addEventListener("click", () => {
//     console.log("test")
// })

let select = document.getElementById("selectForm");
let sekkDiv = document.getElementById("sekkDiv");
let resetButton = document.getElementById("resetButton");
let category;
let score = 0;

let fjernKnappTekst = "Fjern";


select.addEventListener("change", () =>{
    let selectValue = document.getElementById("selectForm").value;
    let number = Number(selectValue);
    

    switch(number){
        case 1:
            category = "Kropp og utseende";
            break;
        case 2:
            category = "Søvn og hvile";
            break;
        case 3:
            category = "Framtiden";
            break;
        case 4:
            category = "Økonomi";
            break;
        case 5:
            category = "Vennner";
            break;
        case 6: 
            category = "Familie";
            break;
        case 7: 
            category = "Karakterer";
            break;
        case 8:
            category = "Forventninger";
            break;
        case 9:
            category = "Sosiale medier";
            break;
        case 10:
            category = "Skolepress";
            break;
    }   

    score += number;
    document.getElementById("scoreText").innerHTML = score;
    document.getElementById("sekkDiv").innerHTML += 
    `
    <div data-value="${number}">
    <p>${category}</p> 
    <button class="removeButton">${fjernKnappTekst}</button>
    </div>
    `;
   
    if(!document.querySelector(".resetButton")){
        sekkDiv.innerHTML += 
        `
        <button class="resetButton" id="resetButton">Reset</button>
        `;
    }

    
})



sekkDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        let div = event.target.parentElement;
        let value = Number(div.dataset.value);

        score -= value;
        div.remove();

        document.getElementById("scoreText").innerHTML = score;

    };

    if(event.target.classList.contains("resetButton")){
        sekkDiv.innerHTML = "";
        score = 0;
        document.getElementById("scoreText").innerHTML = score;
    }

});


