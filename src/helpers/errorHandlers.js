// errorHandlers.js

function introduceErrors(user, errorAmount) {
  const properties = Object.keys(user);

  for (let i = 0; i < errorAmount; i++) {
    const randomPropertyIndex = Math.floor(Math.random() * properties.length);
    const randomProperty = properties[randomPropertyIndex];
    const originalValue = user[randomProperty];

    if (typeof originalValue === "string") { // Check if the property value is a string
      let newValue = originalValue;
      const errorType = Math.floor(Math.random() * 3); // 0: swap, 1: delete, 2: add

      switch (errorType) {
        case 0: // Swap a character
          if (originalValue.length >= 2) {
            const randomIndex = Math.floor(Math.random() * originalValue.length);
            const charArray = originalValue.split('');
            const temp = charArray[randomIndex];
            charArray[randomIndex] = charArray[(randomIndex + 1) % charArray.length];
            charArray[(randomIndex + 1) % charArray.length] = temp;
            newValue = charArray.join('');
          }
          break;
        case 1: // Delete a character
          if (originalValue.length >= 2) {
            const randomIndex = Math.floor(Math.random() * originalValue.length);
            newValue = originalValue.slice(0, randomIndex) + originalValue.slice(randomIndex + 1);
          }
          break;
        case 2: // Add a character
          const randomIndex = Math.floor(Math.random() * originalValue.length);
          const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase letter
          newValue = originalValue.slice(0, randomIndex) + randomChar + originalValue.slice(randomIndex);
          break;
        default:
          break;
      }

      user[randomProperty] = newValue;
    }
  }

  return user;
}

export default introduceErrors;
