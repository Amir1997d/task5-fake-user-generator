// Function to randomly choose an error type with equal probabilities
function chooseRandomErrorType() {
    const errorTypes = ["delete", "add", "swap"];
    const randomIndex = Math.floor(Math.random() * errorTypes.length);
    return errorTypes[randomIndex];
}

// Function to add a random character from the alphabet in a random position
function addCharacter(inputString) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    const randomIndex = Math.floor(Math.random() * (inputString.length + 1));
    return inputString.slice(0, randomIndex) + randomChar + inputString.slice(randomIndex);
}

function introduceErrors(originalString, errorProbability) {
    const output = [...originalString];
    
    for (let i = 0; i < output.length; i++) {
      if (Math.random() < errorProbability) {
        const randomErrorType = chooseRandomErrorType();
        if (randomErrorType === "delete" && output.length > 0) {
          output.splice(i, 1);
          i--;
        } else if (randomErrorType === "add") {
          output.splice(i, 0, addCharacter(output[i]));
          i++;
        } else if (randomErrorType === "swap" && i < output.length - 1) {
          const temp = output[i];
          output[i] = output[i + 1];
          output[i + 1] = temp;
          i++;
        }
      }
    }
    
    return output.join("");
}
  
  
export default introduceErrors;
