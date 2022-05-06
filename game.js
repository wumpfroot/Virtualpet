
//buttons//
const buttonPlayWith = document.getElementById("buttonPlayWith");
const buttonFeed = document.getElementById("buttonFeed");
const buttonWater = document.getElementById("buttonWater");
const buttonWalk = document.getElementById("buttonWalk");
const buttonKillPet = document.getElementById("buttonKillPet");
//get progress bars by ID//
const objectLvlPlay = document.getElementById("objectLvlPlay");
const objectLvlHunger = document.getElementById("objectLvlHunger");
const objectLvlThirst = document.getElementById("objectLvlThirst");
const objectLvlWalks = document.getElementById("objectLvlWalks");
const petBoxSingular = document.getElementById("petBoxSingular");
const buttonRevivePet = document.getElementById("buttonRevivePet");

// Audio
var audio = new Audio("cartoon-kitty-begging-meow.wav");
audio.volume = 0.07; //Changes the volume of the MEOW


//petIcon//
document.getElementById("petIcon").src="cyberPetCatNeutral.png";


//Interacting with Pet//
buttonPlayWith.addEventListener("click", ()=>{ //increases value of play level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlPlay.value+=20;
    petIcon.src="cyberPetCatHappy.png";
    setTimeout(() => {
        petIcon.src="cyberPetCatNeutral.png";    
    }, 2500);
})

buttonFeed.addEventListener("click", ()=>{ //increases value of hunger level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlHunger.value+=20;
    petIcon.src="cyberPetCatHappy.png";
    setTimeout(() => {
        petIcon.src="cyberPetCatNeutral.png";    
    }, 2500);
})

buttonWater.addEventListener("click", ()=>{//increases value of thirst level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlThirst.value+=20;
    petIcon.src="cyberPetCatHappy.png";
    setTimeout(() => {
        petIcon.src="cyberPetCatNeutral.png";    
    }, 2500);
})

buttonWalk.addEventListener("click", ()=>{//increases value of walks level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlWalks.value+=20;
    petIcon.src="cyberPetCatHappy.png";
    setTimeout(() => {
        petIcon.src="cyberPetCatNeutral.png";    
    }, 2500);
})

buttonKillPet.addEventListener("click", () => { //to make pet dead//
    objectLvlPlay.value=0;
    objectLvlHunger.value=0;
    objectLvlThirst.value=0;
    objectLvlWalks.value=0;
    petIcon.src="cyberPetCatDead.png";
    petBoxSingular.style.background = "grey";
    buttonKillPet.style.display = "none";
    buttonRevivePet.style.display = "block";
})
buttonRevivePet.addEventListener("click", () => { //to revive cat//
    audio.play();
    objectLvlPlay.value=1000;
    objectLvlHunger.value=100;
    objectLvlThirst.value=100;
    objectLvlWalks.value=100;
    petIcon.src="cyberPetCatNeutral.png";
    petBoxSingular.style.background = "#d49d49";
    // petBoxSingular.style.background = " #F4CEC7";
    buttonKillPet.style.display = "block";
    buttonRevivePet.style.display = "none";
})

objectLvlPlay.value = 100;
objectLvlHunger.value = 100;
objectLvlThirst.value = 100;
objectLvlWalks.value = 100;

let play = setInterval(() => {
    objectLvlPlay.value--;
}, 1000); 
let hunger = setInterval(() => {
    objectLvlHunger.value--;
}, 1100); 
let thirst = setInterval(() => {
    objectLvlThirst.value--;
}, 1200); 
let walks = setInterval(() => {
    objectLvlWalks.value--;
}, 2000); 

if(objectLvlPlay.value == 0) {
    clearInterval(play);
}
if(objectLvlHunger.value == 0) {
    clearInterval(hunger);
}
if(objectLvlThirst.value == 0) {
    clearInterval(thirst);
}
if(objectLvlWalks.value == 0) {
    clearInterval(walks);
}