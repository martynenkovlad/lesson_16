function randomDelayPrint(message) {
    const delayPrint = (char, delay) => {
      setTimeout(() => {
        console.log(char);
      }, delay);
    };
  
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const randomDelay = Math.random() * 1000;
      delayPrint(char, randomDelay);
    }
  }
  
  randomDelayPrint("Hello"); 