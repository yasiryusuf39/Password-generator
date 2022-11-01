const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


console.log(passwordTwo)
console.log(passwordOne)

function GeneratePassword() {
    let p1 = Math.floor(Math.random() * characters.length)
    let p2 = Math.floor(Math.random() * characters.length)
    let p3 = Math.floor(Math.random() * characters.length)
    let p4 = Math.floor(Math.random() * characters.length)
    let p5 = Math.floor(Math.random() * characters.length)
    let p6 = Math.floor(Math.random() * characters.length)
    let p7 = Math.floor(Math.random() * characters.length)
    let p8 = Math.floor(Math.random() * characters.length)
    let p9 = Math.floor(Math.random() * characters.length)
    let p10 = Math.floor(Math.random() * characters.length)
    let p11 = Math.floor(Math.random() * characters.length)
    let p12 = Math.floor(Math.random() * characters.length)
    let p13 = Math.floor(Math.random() * characters.length)
    let p14 = Math.floor(Math.random() * characters.length)
    let p15 = Math.floor(Math.random() * characters.length)
    passwordOne.textContent = characters[p1]+characters[p2]+characters[p3]+characters[p4]+characters[p5]+characters[p6]+characters[p7]+characters[p8]+characters[p9]+characters[p10]+characters[p11]+characters[p12]+characters[p13]+characters[p14]+characters[p15]

    let pp1 = Math.floor(Math.random() * characters.length)
    let pp2 = Math.floor(Math.random() * characters.length)
    let pp3 = Math.floor(Math.random() * characters.length)
    let pp4 = Math.floor(Math.random() * characters.length)
    let pp5 = Math.floor(Math.random() * characters.length)
    let pp6 = Math.floor(Math.random() * characters.length)
    let pp7 = Math.floor(Math.random() * characters.length)
    let pp8 = Math.floor(Math.random() * characters.length)
    let pp9 = Math.floor(Math.random() * characters.length)
    let pp10 = Math.floor(Math.random() * characters.length)
    let pp11 = Math.floor(Math.random() * characters.length)
    let pp12 = Math.floor(Math.random() * characters.length)
    let pp13 = Math.floor(Math.random() * characters.length)
    let pp14 = Math.floor(Math.random() * characters.length)
    let pp15 = Math.floor(Math.random() * characters.length)
    passwordTwo.textContent = characters[pp1]+characters[pp2]+characters[pp3]+characters[pp4]+characters[pp5]+characters[pp6]+characters[pp7]+characters[pp8]+characters[pp9]+characters[pp10]+characters[pp11]+characters[pp12]+characters[pp13]+characters[pp14]+characters[pp15]
}




