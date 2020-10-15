function isVowel(char){
    var arr = ['a','e','i','o','u','A','E','I','O','U'];
    if(arr.includes(char)){
        return true;
    }
    return false;
}
function countVowels(){
    var count=0;
    
    sentence = document.getElementById("sentence").value;
    for (var i = 0; i < sentence.length; i++){
        if(isVowel(sentence[i])){
            count+=1;
        }
    }
    alert("Number of vowels in the given string is "+count);
    document.getElementById("sentence").value = "";
    return false;
}   