let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
    document.querySelector("#host-name").innerHTML = "Ammad"
    document.querySelector("#collaborator-name").innerHTML = "Noah"


// Question 2
// You can also create their own CSS classes in style.css file and use that. 
document.getElementById("instruction_button")
// Assuming there is a button with ID instruction_button  Turn it into a toggle button. On click, it should hide/remove all the instructions  give me javascript below
document.getElementById("instruction_button").addEventListener("click", function(){
    let instructions = document.querySelectorAll(".question");
    instructions.forEach(instruction => {
        instruction.style.display = instruction.style.display === "none" ? "block" : "none";
    });
});

// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
// In javascript for assuming this is html
// Add an event listener to the first name input field
document.getElementById("first_name").addEventListener("input", function() {
    let firstName = document.getElementById("first_name").value;
    if (firstName.toLowerCase() === "john") {
        document.getElementById("last_name").value = "Doe";
    } else {
        document.getElementById("last_name").value = "";
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
 // Select the password fields and the alert text
const password1Input = document.getElementById('password');
const password2Input = document.getElementById('confirm_password');
passwordMatchAlert = document.getElementById('password-alert');

 // Function to check if passwords match
 passwordMatchAlert.addEventListener("input", function() {
   checkPasswordMatch();
 });

 function checkPasswordMatch() {
    const password1 = password1Input.value;
    const password2 = password2Input.value;

   // Update alert text based on password match status
   console.log(password1, password2);
   if (password1 === password2) {
     passwordMatchAlert.textContent = "Password Matches";
   } else {
     passwordMatchAlert.textContent = "Password does not match";
   }
 }



//Question 6





//Question 7 





//Question 8





//Question 9 

