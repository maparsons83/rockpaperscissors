var newArray = ['Rock', 'Paper', 'Scissors'] 


var click = function(event) {
    var computer = Math.floor(Math.random()*3);
    var user = event.target;
    var userChoice = user.innerHTML;
    var choices = document.getElementsByClassName('choices');
    if (computer === 0) {
        computer = 'Rock'
    }

    else if(computer === 1){
        computer = 'Paper'
    }

    else {
        computer = 'Scissors'
    }
    compare(userChoice,computer)
}


    var compare = function(user,computer) {
        console.log(user)
        console.log(computer)
     
        if (user === 'Rock') {
            if (computer === 'Scissors') {
                alert('User Wins!');
            }
            else if(user === computer) {
                alert('Its a tie!')
            }
            else{
                alert('Computer Wins!');
            }
        }
        if (user === 'Paper') {
            if(computer === 'Rock') {
                alert('User Wins!')
            }
            else if(user === computer) {
                alert('Its a tie!')
            }
            else{
                alert('Computer Wins')
            }
        }
        if(user === 'Scissors') {
            if(computer === 'Rock') {
                alert('Computer Wins!')
            }
            else if(user === computer) {
                alert('Its a tie!')
            }
            else{
                alert('User Wins!')
            }
        }
    }
    var button = document.querySelectorAll('button');

    for(var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', click);
    }