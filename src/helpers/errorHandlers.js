function chooseRandomErrorType() {
    const errorTypes = ["delete", "add", "swap"];
    const randomIndex = Math.floor(Math.random() * errorTypes.length);
    return errorTypes[randomIndex];
}

function deleteCharacter(inputString) {
  if (inputString.length === 0) {
    return inputString;
  }
  const randomIndex = Math.floor(Math.random() * inputString.length);
  return inputString.slice(0, randomIndex) + inputString.slice(randomIndex + 1);
}

function addCharacter(inputString) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomIndex = Math.floor(Math.random() * (inputString.length + 1));
  return inputString.slice(0, randomIndex) + randomChar + inputString.slice(randomIndex);
}

function swapCharacters(inputString) {
  if (inputString.length < 2) {
    return inputString;
  }
  const randomIndex = Math.floor(Math.random() * (inputString.length - 1));
  const char1 = inputString[randomIndex];
  const char2 = inputString[randomIndex + 1];
  return (
    inputString.slice(0, randomIndex) +
    char2 +
    char1 +
    inputString.slice(randomIndex + 2)
  );
}

// function introduceErrors(originalString, errorProbability) {
function introduceErrors(fakeUser, errorProbability) {
  console.log(errorProbability);
  const outputUser = { ...fakeUser };
  for (const property in outputUser) {
    if (property !== "index" && Math.random() < errorProbability) {
      const randomErrorType = chooseRandomErrorType();
      if (randomErrorType === "delete" && outputUser[property].length > 0) {
        outputUser[property] = deleteCharacter(outputUser[property]);
      } else if (randomErrorType === "add") {
        outputUser[property] = addCharacter(outputUser[property]);
      } else if (randomErrorType === "swap") {
        outputUser[property] = swapCharacters(outputUser[property]);
      }
    }
  }
  return outputUser;
}
  
export default introduceErrors;
