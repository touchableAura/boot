let numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (let i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
        let buttonInnerHTML = this.innerHTML; //this.innerHTML refers to button that was clicked 
    
        switch (buttonInnerHTML) 
        {
            case 'w':
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                console.log('clicked w');
            break;
                
            case 'a':
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                console.log('clicked a');
            break;

            case 's':
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                console.log('clicked s');
            break;

            case 'd':
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                console.log('clicked d');
            break;

            case 'j':
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                console.log('clicked j');
            break;

            case 'k':
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                console.log('clicked k');
            break;

            case 'l':
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                console.log('clicked l');
            break;

            default: console.log(buttonInnerHTML);
        }

    });
}

document.addEventListener('keypress', function() {
    alert('key was pressed!');
})
    


