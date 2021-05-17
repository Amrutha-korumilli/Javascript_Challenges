// Challenge 1: Your age in DAYS

function ageInDays() // click me functionality
{
var birthYear = prompt("What year were you born ...... Friend?????");
var ageInDayss = (2021-birthYear)*365;
var h3 = document.createElement('h3');
var textAnswer = document.createTextNode('You are '+ageInDayss+' days old');
h3.setAttribute('id','ageInDays');
h3.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h3);
}

function reset()
{
    document.getElementById('ageInDays').remove();
}

//  Challenge 2: Generate Cat
function generateCat()
{
    var image=document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?fromat=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice)
{

    console.log(yourChoice);
    var humanChoice, botChoice;
     humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    results = decideWinner(humanChoice,botChoice); //(0,1) (1,0),(0.5,0.5)
    console.log(results);
    message = finalMessasge(results); // {'message':'You won','color':'green'} You won /lost/tie
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message)
}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}
function numberToChoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,botChoice)
{
    var rpsDatabase ={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'scissors' :{'scissors':0.5,'rock':0,'paper':1},
        'paper' :{'scissors':0,'rock':1,'paper':0.5},


    };
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];
    
    return [yourScore,botScore];

}

function finalMessasge(results)
{
    if(results[0]===0){
        return {'message':'You Lost!!!','color':'red'};
    }
    else if(results[0]==1){
        return {'message':'You Win!!!','color':'green'};

    }
    else if(results[0]==0.5){
        return {'message':'You Tie!!!','color':'yellow'};
    }

}
function rpsFrontEnd(yourImageChoice,botImageChoice,message)
{
    var images = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };
    // let remove all images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    messageDiv.innerHTML = "<h4 style='color:"+message['color']+"; font-size:40px;padding:30px'>"+message['message']+"</h4>"
    humanDiv.innerHTML = "<img src='"+images[yourImageChoice]+"' height=150 width=150 style = 'box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML = "<img src ='" +images[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);

}

// Challenge 4: Change colors of Buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = new Array();

for( let i=0;i<all_buttons.length;i++)
{
    copyAllButtons[i]=all_buttons[i]; 

}
console.log(copyAllButtons[0].classList[1]);

function buttonColorChange(buttonThis)
{
    console.log(buttonThis.value);
    if (buttonThis.value ==='red'){
        buttonRed();
    }
    else if(buttonThis.value ==='green'){
        buttonGreen();
    }
    else if(buttonThis.value==='yellow'){
        buttonYellow();
    }
    else if(buttonThis.value==='blue'){
        buttonBlue();
    }
    else if(buttonThis.value==='reset'){
        buttonReset();
    }
    else if(buttonThis.value === 'random')
    {
        randomColors();
    }
}
function buttonRed()
{
    console.log(copyAllButtons);

    for(let i=0;i<all_buttons.length;i++)
    {
        console.log(all_buttons[i].classList);
        console.log(all_buttons[i].classList[1]);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
        
    }
}

function buttonGreen()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        console.log(all_buttons[i].classList);
        console.log(all_buttons[i].classList[1]);

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonBlue()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        console.log(all_buttons[i].classList);
        console.log(all_buttons[i].classList[1]);

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}
function buttonYellow()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        console.log(all_buttons[i].classList);
        console.log(all_buttons[i].classList[1]);

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}
function buttonReset()
{
     console.log(copyAllButtons);
    for(let i=0;i<all_buttons.length;i++)
    {

        console.log(all_buttons[i].classList)
        console.log(all_buttons[i].classList[1]);
        console.log(copyAllButtons[i].classList[1]);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i].classList[1]);
    }
}

function randomColors()
{
    var colors = ['btn-primary','btn-success','btn-danger','btn-warning'];

    for(let i=0;i<all_buttons.length;i++)
    {
        let colorRand = Math.floor(Math.random()*4);
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(colors[colorRand]); 

    }
}
// Challenge 5: Black Jack

let blackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses' : 0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sound/swish.mp3');
const winSound = new Audio('static/sound/cash.wav');
const lostSound = new Audio('static/sound/aww.mp3');

document.querySelector("#blackjack-hit-button").addEventListener('click',blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click',blackjackDeal);
document.querySelector("#blackjack-stand-button").addEventListener('click',dealerLogic);

function blackjackHit()
{
    if(blackjackGame['isStand']=== false)
    {
    let card = randomCard();
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
    }

}
function randomCard()
{
    let randomIndex=Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];


}
function showCard(card,activePlayer)
{
    if(activePlayer['score']<=21)
    {
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
   
}
function blackjackDeal()
{
    if(blackjackGame['turnsOver'])
    {
    //showResult(computeWinner());
    let yourImages = document.querySelector("#your-box").querySelectorAll('img');
    let dealerImages = document.querySelector("#dealer-box").querySelectorAll('img');

    for(let i=0;i<yourImages.length;i++)
    {
        yourImages[i].remove();
    }
    for(let i=0;i<dealerImages.length;i++)
    {
        dealerImages[i].remove();
    }
        YOU['score']=0;
        DEALER['score']=0;
        document.querySelector(YOU['scoreSpan']).textContent = YOU['score'];
        document.querySelector(DEALER['scoreSpan']).textContent = YOU['score'];
        document.querySelector(YOU['scoreSpan']).style.color = '#ffff';
        document.querySelector(DEALER['scoreSpan']).style.color = '#ffff';
        document.querySelector('#blackjack-result').textContent = "Let's Play!!!";
        document.querySelector('#blackjack-result').style.color = 'black';
        blackjackGame['turnsOver']=false;
        blackjackGame['isStand']=false;
    }
}
function updateScore(card,activePlayer)
{

    if(card==='A')
    {
   
        if(activePlayer['score']+ blackjackGame['cardMap'][card][1]<=21)
        {
            activePlayer['score']+=blackjackGame['cardMap'][card][1];
        }
        else{
            activePlayer['score']+=blackjackGame['cardMap'][card][0];
        }
    }
    else
    {
    activePlayer['score']+=blackjackGame['cardMap'][card];
    }
    console.log(activePlayer['score']);
}
function showScore(activePlayer)
{
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}
async function dealerLogic(){
    blackjackGame['isStand']=true;
    
    while(DEALER['score']<16 && blackjackGame['isStand']=== true)
    {
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    let winner = computeWinner();
    showResult(winner);
    blackjackGame['turnsOver']=true;


}
// compute winner and return who just won
// update wins, losses and draw
function computeWinner(){

    let winner;
    if(YOU['score']<=21)
    {
        // condition : higher score than dealer or when dealer busts but you are <=21;
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            blackjackGame['wins']++;
            winner = YOU;

        }
        else if(YOU['score']<DEALER['score'])
        {
            blackjackGame['losses']++;
            winner = DEALER;

        }
        else if(YOU['score']===DEALER['score'])
        {
            blackjackGame['draws']++;

            
        }

    }
    // condition when user bust and dealer doesnt bust
    else if(YOU['score']>21 && DEALER['score']<=21)
    {
        blackjackGame['losses']++;
        winner=DEALER;
    }
    // when you and dealer busts
    else if(YOU['score']>21 && DEALER['score']>21){

        blackjackGame['draws']++;

    }
    console.log("Winner is ",winner);
    return winner;

}
    function showResult(winner)
    {
        let message, messageColor;
        if(winner===YOU)
        {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = "You Won!!";
            messageColor = "green";
            winSound.play();
        }
        else if(winner ===DEALER)
        {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = "You Lost :-(";
            messageColor  = "red";
            lostSound.play();
        }
        else
        {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = "You Draw";
            messageColor = 'yellow';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;

    }

    function validate()
    {
        var name = document.myForm.name.value;
        if(name==="")
        {
            document.getElementsByTagName('p').innerHTML="enter name";
            return false;
        }
    }