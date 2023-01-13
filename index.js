// Javascript program to validate
// Visa Credit Card Number using Regular Expression

//Function to Validate Visa Card Number

function validate_VisaCard_Num(Card_Num) {
    let regex = /^4[0-9]{12}(?:[0-9]{3})?$/ ;

    //check if Card_Num is empty
    if(Card_Num == null){
        return "Please input Card Number";
    }

    //validate Card_Num
    if(regex.test(Card_Num)== true){
        return "Correct Card Number";
    } else{
        return "Incorrect Card Number";
    }
}

// Input 1 :
let str1 = "4795251259936797" ;
console.log(validate_VisaCard_Num(str1));

// Input 2 :
let str2 = "41286904659w70gvvmn" ;
console.log(validate_VisaCard_Num(str2));

// Input 3 ;
let str3 
console.log(validate_VisaCard_Num(str3));

/*
Where regex;
1) ^ represents the starting of the string.
2) 4 represents the string that should start with 4.
3) [0-9]{12} represents the next twelve digits should be any between 0-9.
4) ( represents the start of the group.
5) ? represents the 0 or 1 time.
7) [0-9]{3} represents the next three digits should be any between 0-9.
8) ) represents the ending of the group.
9) ? represents the 0 or 1 time.
10) $ represents the ending of the string.
*/





