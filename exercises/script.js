let facingFoward = true;
let position = 0;
function moveForward(distance) {
 if (facingFoward === true)
    {
        position = position + distance
    }
    else{
        position = position - distance
    }
}
function movebackward(distance) {
    if (facingFoward === true)
       {
           position = position - distance
       }
       else{
        position = position + distance }
   }
   function printlocation() {
    console.log(position)
       }
       function turnAround() {
        if (facingFoward === true)
           {
            (facingFoward = false)
           }
           else{
            position = position - distance }
       }