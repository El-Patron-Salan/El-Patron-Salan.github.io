function whoAreYou(nickname){
    switch (nickname){
        case 'mop':
            alert("Witam :) Czy chciałaby Pani porozmawiać o Freudzie? Teraz żarcik hihi:\nPolicjanci podjęli działania na terenie miejskiego ZOO. Jak się okazało, zakulisowe :D\nbtw. _ _ __");
            window.location.href = "roll.html";
            break;
        case 'mommy':
            alert("Hejka! Pozdrawiam serdecznie Lusie <3 Aczkolwiek następnym razem fotel będzie mój =)");
            window.location.href = "roll.html";
            break;
        case 'chadziak':
            alert("Siemano byq! Kiedy będzie grane duo na jednym lapku???");
            window.location.href = "roll.html";
            break;
        case 'bully':
            alert("Hallo Julia! Wie sind die Messer? ;)");
            window.location.href = "roll.html";
            break;
        case 'dobry_ziom':
            alert("Hejka Ania! Jak samopoczucie? :)");
            window.location.href = "roll.html";
            break;
        case 'non-binary':
            alert("Siemanko! Nie wiem czy oglądałeś, ale na pewno spodoba Ci się Szeregowiec Dolot ;)");
            window.location.href = "roll.html";
            break;
        case 'unknown':
            window.location.href = "roll.html";
            break;
        default:
            alert('Oj nie znam takiego loginu :(');
    }
}

function validate(){
    var stringVal = document.getElementById('stringVal').
    value;
    sessionStorage.setItem("nick", stringVal);
    whoAreYou(stringVal.toLowerCase());
}

function getKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
}

function generateRandomBetween (min, max, exclude){
    let ranNum = Math.floor(Math.random() * (max - min) + min);

    if (ranNum == exclude) {
        ranNum = generateRandomBetween(min, max, exclude);
    }

    return ranNum;  
}

function draw(){
    var list = {
        1: "dobry_ziom",
        2: "mop",
        3: "chadziak",
        4: "non-binary",
        5: "bully",
        6: "kochanek",
        7: "mommy"
    };
    var currentSessNick = sessionStorage.getItem("nick");
    var key = getKeyByValue(list, currentSessNick);
    var who = generateRandomBetween(1, 8, key);
    alert("\n\nRobisz prezeeeeeeeeent numerowi: " + who + ", czyli:\n\t\t" + list[who] + "  :)");
}