// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", choosePassword);

// Write password to the #password input

function choosePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

function generatePassword(){
    var password = "";
    var possibleChoices = []
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var specialCharacters = ["!","#","~","@","$","%","^","&","*","+"]
    var numbers = [0,1,2,3,4,5,6,7,8,9]

    var passwordLength  = parseInt(prompt("For the length of your password. Choose between 8 and 128 characters"));
    
    if(passwordLength < 8 || 128 < passwordLength){
        alert("Must choose a number between 8 and 128")
       //return if failed to meet above criteria
               return "" ;
    } 
   
    //checking the array if confirm is selected.

    var chooseLower = confirm("Include lowercase letters?")
     if(chooseLower) {

   //PossibleChoices array will concat with the rest of the arrays.

        possibleChoices = possibleChoices.concat(lowerCase);
     }
        var chooseUpper = confirm("Include uppercase letters?")
        if(chooseUpper){
            possibleChoices = possibleChoices.concat(upperCase);
        }
        var chooseNumber = confirm("Include numbers?")
        if(chooseNumber){
            possibleChoices = possibleChoices.concat(numbers);
        }
        var chooseCharacter = confirm("Include special characters?")
        if(chooseCharacter){
            possibleChoices = possibleChoices.concat(specialCharacters);
        }
        //for loop//
        for(var i = 0;i < passwordLength;i++)
         password += possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

        //displays the newly generated password onto the webpage.
       return password;
}
       // copy to clipboard

            var copy = document.querySelector("#copy");
            copy.addEventListener("click", function () {
                clipboardcopy();
            });
            function clipboardcopy() {
                document.getElementById("password").select();
                document.execCommand("Copy");
                alert("Password has been copied to clipboard.");
            }