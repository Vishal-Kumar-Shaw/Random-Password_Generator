const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_+/";


// selectors
const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numberInput = document.getElementById("numbers");
const symbols = document.getElementById("symbol");

const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}
const generatePassword = (password ="")=>{
    if(upperInput.checked && password.length<totalchar.value)  {
        password+= getRandomData(upperCase);
    }
    if(lowerInput.checked && password.length<totalchar.value) {
        password+= getRandomData(lowerCase);
    }
    if(numberInput.checked && password.length<totalchar.value) {
        password+= getRandomData(numberSet);
    }
    if(symbols.checked && password.length<totalchar.value) {
        password+= getRandomData(symbolSet);
    }
    if(password.length < totalchar.value){
        return generatePassword(password);

    }
    console.log(password);
    passbox.value = password;
}
// generatePassword();
document.getElementById('btn').addEventListener(
    "click",
    function (){
        generatePassword();
    }
)

