//Function1: Password Validation (8 char, 1 no., 1Upper, 1 lower) 
function validatePassword(pass1, pass2)
{
    if(pass1 !== pass2)      return false;
    if(pass1.length < 8)     return false;
    if(!/[a-z]/.test(pass1)) return false;
    if(!/[A-Z]/.test(pass1)) return false;
    if(!/[0-9]/.test(pass1)) return false;

    return true;
}



//Function2: Reverse a string (to be used in password reversion in storePassword function)
function reverseString(str)
{
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--)
    {
        reversed += str[i];
    }
    return reversed
}