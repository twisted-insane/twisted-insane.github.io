const VALIDCODE = 528918012;
const coords = "39°57'26.2\"N 75°02'53.6\"W";
const userInput = document.getElementById("input");
const submitButton = document.getElementById("button");
const result = document.getElementById("result");
submitButton.addEventListener("click", validateCode);

function validateCode(){

    console.log("Hello");
    if(userInput.value == VALIDCODE)
    {
        result.innerHTML = coords;
    }
    else result.innerHTML = "Incorrect code. Try again.";
}
