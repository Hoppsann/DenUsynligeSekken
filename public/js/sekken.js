let select = document.getElementById("selectForm");
let sekkDiv = document.getElementById("sekkDiv");
let resetButton = document.getElementById("resetButton");
let sekkImage = document.getElementById("backpack");
let category;
let image;
let imageAlt;

let score = 0;
let fjernKnappTekst = "X";



function getBackpackTarget() {
    const rect = document.getElementById("backpack2").getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.6
    };
}


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

   

    document.getElementById("scoreText").innerHTML = score;

    event.target.options[event.target.selectedIndex].disabled = true;

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

     console.log(category)

    if(category == "Skolepress"){

        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/skolepress.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Sosiale medier"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/tiktok.png";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Forventninger"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/forventninger.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Økonomi"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/økonomi.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Karakterer"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/karakterer.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Venner"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/venner.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Familie"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/familie.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Framtiden"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/framtiden.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Søvn og hvile"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/hvile.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Kropp og utseende"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/utseende.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }


     

    
})



sekkDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        let div = event.target.parentElement;
        let value = Number(div.dataset.value);
        let removeImage;

        score -= value;

        
        div.remove();
        select.querySelector(`option[value = "${value}"]`).disabled = false
        let persentage = (score / 55) * 100;
        document.getElementById("scoreText").innerHTML = Math.round(persentage) + "%";
        


        switch(value){
            case 1: 
                removeImage = "utseende.jpg";
                break;

            case 2:
                removeImage = "hvile.jpg";
                break;

            case 3:
                removeImage = "framtiden.jpg";
                break;

            case 4:
                removeImage = "økonomi.jpg";
                break;

            case 5: 
                removeImage = "venner.jpg";
                break;

            case 6:
                removeImage = "familie.jpg";
                break;

            case 7:
                removeImage = "karakterer.jpg";
                break;

            case 8: 
                removeImage = "forventninger.jpg";
                break;

            case 9: 
                removeImage = "tiktok.png";
                break;

            case 10:
                removeImage = "skolepress.jpg";
                break;
        }

        let removeElement = document.createElement("img");
        removeElement.src = `/img/${removeImage}`;
        removeElement.classList.add("removeElement");
        let removeTarget = getBackpackTarget();
        removeElement.style.setProperty("--removeLeft", `${removeTarget.x}px`);
        removeElement.style.setProperty("--removeTop", `${removeTarget.y}px`);
        document.body.appendChild(removeElement);
        setTimeout(() => {
            removeElement.remove()
        }, 4000);
        console.log("value", value)
        enable(value);
        updateBackground(score);

        if(persentage == 0){
            sekkDiv.innerHTML = "";
        }

    };

    if(event.target.classList.contains("resetButton")){

    let items = sekkDiv.querySelectorAll(".removeButton");

    items.forEach((button, index) => {

        setTimeout(() => {

            let div = button.parentElement;
            let value = Number(div.dataset.value);
            let removeImage;

            switch(value){
                case 1: 
                    removeImage = "utseende.jpg"; 
                    break;

                case 2:
                     removeImage = "hvile.jpg"; 
                     break;

                case 3:
                     removeImage = "framtiden.jpg"; 
                     break;

                case 4:
                     removeImage = "økonomi.jpg"; 
                     break;

                case 5:
                     removeImage = "venner.jpg"; 
                     break;


                case 6:
                     removeImage = "familie.jpg"; 
                     break;

                case 7:
                     removeImage = "karakterer.jpg"; 
                     break;

                case 8:
                     removeImage = "forventninger.jpg"; 
                     break;

                case 9:
                     removeImage = "tiktok.png"; 
                     break;

                case 10:
                     removeImage = "skolepress.jpg"; 
                     break;
            }

            let removeElement = document.createElement("img");
            removeElement.src = `/img/${removeImage}`;
            removeElement.classList.add("removeElement");
            let removeTarget = getBackpackTarget();
            removeElement.style.setProperty("--removeLeft", `${removeTarget.x}px`);
            removeElement.style.setProperty("--removeTop", `${removeTarget.y}px`);
            document.body.appendChild(removeElement);

            setTimeout(() => {
                removeElement.remove();
            }, 4000);

            div.remove();

            score -= value;
            let persentage = (score / 55) * 100;
            document.getElementById("scoreText").innerHTML = Math.round(persentage) + "%";

            updateBackground(score)

            enable(value)
        }, index * 350);

    });

    setTimeout(() => {

        sekkDiv.innerHTML = "";
        score = 0;
        document.getElementById("scoreText").innerHTML = score + "%";

        for(let i = 0; i < select.options.length; i++){
            select.options[i].disabled = false;
        }

        for(let i = 1; i <= 10; i++){
            enable(i);
        }

        updateBackground(score);

    }, items.length * 500);
}

    
});





function addToBag(value) {
   
    let number = Number(value);

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

    let persentage = (score / 55) * 100;

    updateBackground(score);

    document.getElementById("scoreText").innerHTML = Math.round(persentage) + "%";


   

    // event.target.options[event.target.selectedIndex].disabled = true;

    document.getElementById("sekkDiv").innerHTML += 
    `
    <div data-value="${number}">
    <p>${category}</p> 
    <button class="removeButton">${fjernKnappTekst}</button>
    <img src="/img/${image}" alt="${imageAlt}">
    </div>
    `;
   
    if(!document.querySelector(".resetButton")){
        sekkDiv.innerHTML += 
        `
        <button class="resetButton" id="resetButton">Reset</button>
        `;
     }

     console.log(category)

    if(category == "Skolepress"){

        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/skolepress.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Sosiale medier"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/tiktok.png";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Forventninger"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/forventninger.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Økonomi"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/økonomi.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Karakterer"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/karakterer.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Venner"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/venner.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Familie"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/familie.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Framtiden"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/framtiden.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Søvn og hvile"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/hvile.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }if(category == "Kropp og utseende"){
        let dropDownElement = document.createElement("img");
        dropDownElement.src = "/img/utseende.jpg";
        dropDownElement.classList.add("dropDownElement");
        let dropTarget = getBackpackTarget();
        dropDownElement.style.setProperty("--dropLeft", `${dropTarget.x}px`);
        dropDownElement.style.setProperty("--dropTop", `${dropTarget.y}px`);
        document.body.appendChild(dropDownElement);
        setTimeout(() => {
            dropDownElement.remove();
        }, 4000);
    }

    


     
}


function disable(id) {
    document.getElementById(id).style.display = "none"
}

function enable(id){
    console.log("id", id);
    document.getElementById(`item${id}`).style.display = "list-item";
}

function updateBackground(number) {
    console.log(number, "number")
    if(number == 0){
        document.getElementById("rightleft").style.backgroundColor = "#367a92";
    }else if(number >= 1 && number < 10) {
        document.getElementById("rightleft").style.backgroundColor = "#3a4c86"
    }else if(number >= 10 && number < 20){
        document.getElementById("rightleft").style.backgroundColor ="#483770";
    }else if(number >= 20 && number < 30){
        document.getElementById("rightleft").style.backgroundColor = "#622764";
    }else if(number >= 30 && number < 40){
        document.getElementById("rightleft").style.backgroundColor = "#77152a";
    }else if(number >= 40 && number < 50){
        document.getElementById("rightleft").style.backgroundColor = "#a30000";
    }else if(number >= 50 && number <= 55){
        document.getElementById("rightleft").style.backgroundColor = "red"
    }
}