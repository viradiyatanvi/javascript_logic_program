let score = prompt("Enter a score:");
    var grade;
    if(score<=100 && score>=90){
        grade="A"
    }
    else if(score<=89 && score>=75){
        grade="B"
    }
    else if(score<=74 && score>=65){
        grade='C'
    }
    else if(score<=64 && 45){
        grade='E'
    }
    else{
        grade='f'
    }
    console.log("score is a :"+grade);