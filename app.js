
document.getElementById("userInputForm").addEventListener("submit",function(event){
    event.preventDefault();
    let userName = document.getElementById().value;
    let userAge = document.getElementById().value;

    if(userAge != null){
        let earlyYears = 10.5;
        let laterYears = userAge - 2;
        laterYears *= 4;
        let myAgeInDogYears = laterYears + earlyYears;
        userName = userName.toLowerCase();
        document.getElementById("test").innerHTML = `Your name is ${userName}. you are ${userAge} years old in human years which is ${myAgeInDogYears} years old in dog years`;
        }else{
            document.getElementById("test").innerHTML = 'please enter valid value';
        }
})









