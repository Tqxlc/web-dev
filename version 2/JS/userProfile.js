
// Array of questions
const questions = ["Part 1\nQuestion 1/3\nEnter your name:", "Part 1\nQuestion 2/3\nEnter your age:", "Part 1\nQuestion 3/3\nEnter your gender:",
                   "Part 2\nQuestion 1/3\nEnter your phone number:", "Part 2\nQuestion 2/3\nEnter your Email:", "Part 2\nQuestion 3/3\nEnter any additional contact information:",
                   "Part 3\nQuestion 1/3\nEnter your postcode:", "Part 3\nQuestion 2/3\nEnter your house number:", "Part 3\nQuestion 3/3\nEnter your town", 
                   "Part 4\nQuestion 1/3\nEnter your area of profession:", "Part 4\nQuestion 2/3\nEnter your level of education:", "Part 4\nQuestion 3/3\nEnter your Intitution:"];

// Arrays to store input data
const answers = new Array(12).fill("");

let set = 1;
let percent = 0;
function progressBar(index){
    if (percent <= 99){
        if (answers[index] === null){
                percent = percent;
        }
        else if(answers[index].trim() ===""){
                percent = percent;
        }
        else{
                percent = percent + (100 / 12);
        }           
        let progress = document.getElementById('progress-bar-value');

        progress.style.width = percent + '%';
        document.getElementById('percent-text').textContent = (percent.toFixed(0) + "%");
    }
}

function nextSet(){

    if (set == 2){
        collectUserInformation2()

    }
    else if (set == 3){
        collectUserInformation3()

    }
    else if(set == 4){
        collectUserInformation4()

    }


}
function updateQuestion(index){
    switch (index) {
        case 0:
            document.getElementById('question1').textContent = answers[index];
            break;
        case 1:
            document.getElementById('question2').textContent = answers[index];
            break;
        case 2:
            document.getElementById('question3').textContent = answers[index];
            break;
        case 3:
            document.getElementById('question4').textContent = answers[index];
            break;
        case 4:
            document.getElementById('question5').textContent = answers[index];
            break;
        case 5:
            document.getElementById('question6').textContent = answers[index];
            break;
        case 6:
            document.getElementById('question7').textContent = answers[index];
            break;
        case 7:
            document.getElementById('question8').textContent = answers[index];
            break;
        case 8:
            document.getElementById('question9').textContent = answers[index];
            break;
        case 9:
            document.getElementById('question10').textContent = answers[index];
            break;
        case 10:
            document.getElementById('question11').textContent = answers[index];
            break;
        case 11:
            document.getElementById('question12').textContent = answers[index];
            break;
            
            
        }

}

function collectUserInformation1() {
    // Loop through each question in the array
    for (let index1 = 0; index1 < 3; index1++) {
        // Prompt the user for an answer to the current question
        let answer = prompt(questions[index1]);
        answers[index1] = answer;
        progressBar(index1);
        updateQuestion(index1);
        console.log('inputs', answers)

        console.log('Inputs:', percent);
        

        // update the user's answer to the userAnswers array
        console.log('index=', index1)
        
    }
    set = 2;
}
function collectUserInformation2() {

    // Loop through each question in the array
    for (let index2=3; index2 < 6; index2++) {
        // Prompt the user for an answer to the current question
        let answer = prompt(questions[index2]);
        answers[index2] = answer;
        progressBar(index2);
        updateQuestion(index2);
        console.log('Inputs:', answers);
        

        // update the user's answer to the userAnswers array
    }
    set = 3;
}
function collectUserInformation3() {

    // Loop through each question in the array
    for (let index3 = 6; index3 < 9; index3++) {
        // Prompt the user for an answer to the current question
        let answer = prompt(questions[index3]);
        answers[index3] = answer;
        progressBar(index3);
        updateQuestion(index3);
        console.log('Inputs:', answers);
        

        // update the user's answer to the userAnswers array
        
    }
    set = 4;
}
function collectUserInformation4() {

    // Loop through each question in the array
    for (let index4 = 9; index4 < 12; index4++) {
        // Prompt the user for an answer to the current question
        let answer = prompt(questions[index4]);
        answers[index4] = answer;   
        progressBar(index4);  
        updateQuestion(index4);
        console.log('Inputs:', answers);
        

        // update the user's answer to the userAnswers array
        
    }
    set = 5;
}