// stack(primitive): copy, heap(all non - primitive ):reference (original )

let myYoutubename ="Anushka@google"

let anotherName = myYoutubename//copy passed
anotherName = "Be COol !"
console.log(myYoutubename);
console.log(anotherName); // copy changed

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "anushka@google.com"

console.log(userOne.email);
console.log(userTwo.email);
