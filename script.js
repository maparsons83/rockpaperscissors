var newArray = ['Rock', 'Paper', 'Scissors'] 


function choice2() {
    if (computer === 0) {
        computer = 'Rock'
    }

    else if(computer === 1){
        computer = 'Paper'
    }

    else {
        computer = 'Scissors'
    }
}

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        alert('Its a tie!');
    }
    if (choice1 === 'Rock') {
        if (choice2 === 'Scissors') {
            alert 'Rock Wins!'
        }
        else{
            alert('Paper Wins!');
        }
    }
    if (choice1 === 'Paper') {
        if(choice2 === 'Rock') {
            alert('Paper Wins!')
        }
        else{
            alert('Scissors Wins')
        }
    }
    if(choice1 === 'Scissors') {
        if(choice2 === 'Rock') {
            alert('Rock Wins!')
        }
        else{
            alert('Scissors Wins!')
        }
    }
}
compare(user,computer)