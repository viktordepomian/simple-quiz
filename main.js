const QUESTION = document.querySelector('.question');

async function getQuestions(){
    let response = await fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple');
    let data = await response.json();
    
}


getQuestions();

