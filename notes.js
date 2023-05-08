// object
let bellBoy1 = {
    name:"Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function() {
        alert("May I take your suitcase?");
        pickUpSuitCase();
        move();
    }
}

// to call a method 
bellBoy1.moveSuitcase();

// using constructor functions
function BellBoy (name, age, hasWorkPermit, languages) // function name must but UpperCase 
{
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() 
    {
        alert('May I take your suitcase?');
        pickUpSuitCase();
        move();
    }
}

// housekeeper example:
function HouseKeeper (yearsOfExperience, name, cleaningRepertorie)
{
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertorie = cleaningRepertorie;
    this.clean = function()
    {
        alert('cleaning in progress');
    }
}

// create new houskeeper
let houseKeeper1 = new HouseKeeper(10, 'Rebby', 'dusting, painting');
console.log(houseKeeper1.name);


// referencing the drum project:
function Audio (fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        // tap into audio hardware
        // check the file at fileLocation exists
        // check the file at fileLocation is a sound file 
        // play the file at fileLocation 
    }
}

// note on eventListeners
// we add an eventListener to an element 
// then when the event happens 
// the element triggers the function (that lives as the second parameter)
// example:
document.addEventListener('keypress', function() {
    alert('key was pressed!');
})
// the function in the parameter can also have it's own parameters
// example: event is sometimes abbreviated to e 
document.addEventListener('keypress', function(event) {
    alert('key was pressed!');
})