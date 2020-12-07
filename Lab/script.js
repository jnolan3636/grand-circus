


function translate(str) {
    
      str= str.toLowerCase();

      let vowel = str.match(/[aeiou]/);
      let firstPosition = str.indexOf(vowel);
       if (firstPosition > 0) {
           return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
       }
       return str + "way";
  };
  


