// const add = require('./script');

describe('translate', function(){
it("word starting with a", function(){
    expect(translate('anchor')).toEqual('anchorway');
});
});
it("word starting with vowel", function(){
    
    expect(translate('igloo')).toEqual('iglooway');
});
it("words that start with vowels with capital letters are converted to lowercase", function(){
    
    expect(translate('Elephant')).toEqual('elephantway');
});
it("words that have capital letter", function(){
    
    expect(translate('mAgic')).toEqual('agicmay');
});
it("words that start with one consonant", function(){
    
    expect(translate('battle')).toEqual('attlebay');
});
it("words that start with two consonants", function(){
    
    expect(translate('star')).toEqual('arstay');

});
it("words that start with three + consonants", function(){
    
    expect(translate('street')).toEqual('eetstray');

});
it("words that have capital letter", function(){
    
    expect(translate('rOpe')).toEqual('operay');
});
it("words that have capital letter", function(){
    
    expect(translate('tEEth')).toEqual('eethtay');
});