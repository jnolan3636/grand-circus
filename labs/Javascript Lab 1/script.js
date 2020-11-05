const name="Mitch Cukovich"
const age =25
const birthday ="January 24"
const detroitGC=true
let lifeEvents=["I was born in Troy, Michigan", "I went to Hope College", "I went to the Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I am a graduate of the front-end bootcamp."]


if (detroitGc=true) {
    console.log("My name is " +name+ " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + age +" years old and my birthday is on " + birthday+".");
}

else if (detroitGC=false) {
    console.log("My name is " +name+ " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " +age+ " years old and my birthday is on " +birthday+".");
}

for (let event of lifeEvents) {
    console.log(event);
}




let counter=0

while (true)
 {
    counter++;
    var randomNumber = Math.floor(Math.random() * 11);
   if (randomNumber ===5) {
       console.log ("5===5. It took "+ counter +  " iterations to randomly generate the number 5.");
       break
   }
  else  { 
        console.log(randomNumber + "!==5")
                   
               
    }
    
 }