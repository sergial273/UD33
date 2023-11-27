const apariciones = Array(11).fill(0); 

for (let i = 0; i < 36000; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;
  apariciones[suma - 2]++;
}

console.log("Suma\tApariciones");
for (let i = 0; i <= 10; i++) {
  console.log(i+2 + "\t" + apariciones[i]);
}
