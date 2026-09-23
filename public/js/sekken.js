// console.log("Hello World!")

// const button = document.getElementById("leggTil")

// button.addEventListener("click", () => {
//     console.log("test")
// })

let select = document.getElementById("selectForm");
let sekkDiv = document.getElementById("sekkDiv");
let resetButton = document.getElementById("resetButton");
let sekkImage = document.getElementById("backpack");
sekkImage.src = "/img/backpack/backpack1.png"
let category;
let image;
let imageAlt;

let score = 0;
let fjernKnappTekst = "X";


select.addEventListener("change", (event) =>{
    let selectValue = document.getElementById("selectForm").value;
    let number = Number(selectValue);
    

    switch(number){
        case 1:
            category = "Kropp og utseende";
            image = "utseende.jpg";
            imageAlt = "dame som ser seg i speilet";
            break;
        case 2:
            category = "Søvn og hvile";
            image = "hvile.jpg";
            imageAlt = "jente som sover";
            break;
        case 3:
            category = "Framtiden";
            image = "framtiden.jpg";
            imageAlt = "robot";
            break;
        case 4:
            category = "Økonomi";
            image = "økonomi.jpg"
            imageAlt = "sparegris som bruker kalkulator";
            break;
        case 5:
            category = "Venner";
            image = "venner.jpg";
            imageAlt = "4 venner som sitter sammen ved en kliffe";
            break;
        case 6: 
            category = "Familie";
            image = "familie.jpg";
            imageAlt = "familie i solnedgang";
            break;
        case 7: 
            category = "Karakterer";
            image = "karakterer.jpg";
            imageAlt = "klasserom";
            break;
        case 8:
            category = "Forventninger";
            image = "forventninger.jpg";
            imageAlt = "medalje";
            break;
        case 9:
            category = "Sosiale medier";
            image = "sosiale-medier.jpg";
            imageAlt = "telefon med sosiale medier installert";
            break;
        case 10:
            category = "Skolepress";
            image = "skolepress.jpg";
            imageAlt = "noen som er stresset foran pcen"
            break;
    }   
    score += number;

    if(score >= 0 && score < 10){
        sekkImage.src = "/img/backpack/backpack1.png";
    }else if(score > 10 && score < 20){
        sekkImage.src = "/img/backpack/backpack2.png";
    }else if(score > 20 && score < 30){
        sekkImage.src = "/img/backpack/backpack3.png";
    }else if(score > 30 && score < 40){
        sekkImage.src = "/img/backpack/backpack4.png";
    }else if(score > 40 && score < 50){
        sekkImage.src = "/img/backpack/backpack5.png";
    }else if(score > 50 && score < 55){
        sekkImage.src = "/img/backpack/backpack6.png";
    }

    document.getElementById("scoreText").innerHTML = score;

    event.target.options[event.target.selectedIndex].disabled = true;

    document.getElementById("sekkDiv").innerHTML += 
    `
    <div data-value="${number}">
    <p>${category}</p> 
    <button class="removeButton">${fjernKnappTekst}</button>
    <img src="/img/${image}" alt="${imageAlt}"
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
        select.querySelector(`option[value = "${value}"]`).disabled = false
        document.getElementById("scoreText").innerHTML = score;

    };

    if(event.target.classList.contains("resetButton")){
        sekkDiv.innerHTML = "";
        score = 0;
        document.getElementById("scoreText").innerHTML = score;

        for(let i = 0; i < select.options.length; i++){
            select.options[i].disabled = false;
        }
    }

});





