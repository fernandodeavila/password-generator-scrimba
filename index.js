const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El=document.getElementById("password-1-el")
let password2EL=document.getElementById("password-2-el")
let symbolsBtn = document.getElementById("symbols-btn")
let numbersBtn = document.getElementById("numbers-btn")
let symIsClicked= true
let numIsClicked = true
let  lengthInput = document.getElementById("length-input")
const textToCopy1 = document.getElementById("password-1-el");
const textToCopy2 = document.getElementById("password-2-el");



function enableNumbers(){  
    if(numIsClicked===true){
        numbersBtn.style.backgroundColor = "#1F2937"
        numIsClicked = false
        characters.splice(characters.indexOf("0"), 10)
    } else {
        numbersBtn.style.backgroundColor = "#10B981"
        numIsClicked = true
        characters.splice(characters.indexOf("z"), 0,  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    }  
}
function enableSymbols(){
    if(symIsClicked===true){
        symbolsBtn.style.backgroundColor = "#1F2937"
        symIsClicked = false
        characters.splice(characters.indexOf("~"), 29)
        
    } else {
        symbolsBtn.style.backgroundColor = "#10B981"
        symIsClicked = true
        characters.splice(characters.indexOf("9"), 0, "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/" )
        
    }
    
}

function generatePassword(){
    
    
    password1El.textContent=" "
    password2EL.textContent=" "
    
    let passwordLength = Number(lengthInput.value)
    
    getFirstPassword(passwordLength)
    getSecondPassword(passwordLength)
    
    
}
function getFirstPassword(length){
    let getRandomCharacter 
     for(let i= 0;i< length;i++){
         getRandomCharacter = characters[Math.floor(Math.random()*characters.length)] 
        password1El.textContent+=getRandomCharacter        
    }
    
}

function getSecondPassword(length){
     for(let i= 0;i< length ;i++){
         let getRandomCharacter = characters[Math.floor(Math.random()*characters.length)] 
        password2EL.textContent+=getRandomCharacter        
    }
}

textToCopy1.addEventListener("click", function(){
    // cria um elemento temporário para armazenar o texto a ser copiado
    const tempElem = document.createElement("textarea");
    tempElem.value = textToCopy1.innerText;
    document.body.appendChild(tempElem);
    // seleciona todo o texto do elemento temporário
    tempElem.select();
    // copia o texto para a área de transferência do usuário
    document.execCommand("copy");
    // remove o elemento temporário
    document.body.removeChild(tempElem);
    // exibe uma mensagem ao usuário informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
})
textToCopy2.addEventListener("click", function(){
    // cria um elemento temporário para armazenar o texto a ser copiado
    const tempElem = document.createElement("textarea");
    tempElem.value = textToCopy2.innerText;
    document.body.appendChild(tempElem);
    // seleciona todo o texto do elemento temporário
    tempElem.select();
    // copia o texto para a área de transferência do usuário
    document.execCommand("copy");
    // remove o elemento temporário
    document.body.removeChild(tempElem);
    // exibe uma mensagem ao usuário informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
})


