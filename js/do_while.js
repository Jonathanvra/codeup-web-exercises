// This is how you get a random number between 50 and 100
 let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
 let conesBought = Math.floor(Math.random() * 5) + 1;


function sellIceCream() {
  let allCones = Math.floor(Math.random() * 50) + 50;
  do {
   let conesBought = Math.floor(Math.random() * 5) + 1;
   if (conesBought > allCones) {
    console.log(` Sorry, can not sell you ${conesBought}, we only have ${allCones}...`)
   } else {
    allCones -= conesBought;
    console.log(`${conesBought} cones were bought.`)
   }
  }
   while(allCones > 0);
   console.log(`Yey! we sold them all`);
  }
  sellIceCream();