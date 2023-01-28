function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
let result = new Array(48);
result = result.fill(0).map(() => getRandomInt(101,1000));

result.sort((a, b) => a - b);


console.log(result);