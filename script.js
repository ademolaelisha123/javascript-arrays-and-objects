// var allstudent = ['Erling haaland','kevin debruyne','phil foden','jack grealish','kyle walker','rodrygo']
// console.log(allstudent);

// var ages = [34,45,45,45,35]
// console.log(ages);

// var food = ['pomo', 'eja kika', 'efo tete']
// console.log(food);

// var girlfriends = ['pelumi','mary', 'christiana', 'blessing','adeola']




// girlfriends.pop()
// girlfriends.push('adunni')
// girlfriends.unshift('precious')
// girlfriends.shift()
// console.log(girlfriends);

var cart = []
console.log(cart);

function submitItem() {
    if (inp.value  === '') {
    alert("Fill in something nah")
    } else  {
        console.log(inp.value);
        cart.push(inp.value)
        document.getElementById('inp').value = ''
        console.log(cart);
        
        let table = ''
        show.innerHTML = ""
       
        table += `<table style="border:2px solid;">`
        table += `<tr>`
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `<td><p>${i+1}.${cart[i]}</p></td>`
            
        }
       
    }
    
}

function firstButton() {
    cart.shift()
        document.getElementById('inp').value = ''
        console.log(cart);
        
        show.innerHTML = ""
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `<p>${i+1}.${cart[i]}</p>`
            
        }
}

function secondbutton() {
    cart.pop()
        document.getElementById('inp').value = ''
        console.log(cart);
        
        show.innerHTML = ""
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `<p>${i+1}.${cart[i]}</p>`
            
        }
}

function thirdbutton() {

    if (inp.value === '') {
        alert("Fill the box to add to the beginning")
    } else {
    cart.unshift(inp.value)
        document.getElementById('inp').value = ''
        console.log(cart);
        
        show.innerHTML = ""
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `<p>${i+1}.${cart[i]}</p>`
        }
        }
}


function sixthbutton() {
    cart.splice(0,cart.length)
        document.getElementById('inp').value = ''
        console.log(cart);
        
        show.innerHTML = ""
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `<p>${i+1}.${cart[i]}</p>`
            
        }
}

function fifthbutton() {
    var numberOne =  (prompt('Enter the index you want to edit'))
    var numberTwo =  (prompt('Enter the the new item'))
    cart.splice(numberOne-1, 1, numberTwo)
    displaycart()
}

function fourthbutton() {
   var getnumber = Number(prompt("which number did you want to delete"))
   cart.splice(getnumber-1, 1)
   displaycart()
   if (getnumber == 0) {
    
   }
}

function displaycart() {
    show.innerHTML = ""         
    show.style.display = "block"
    for (let i = 0; i < cart.length; i++) {
        show.innerHTML +=`<p>${i+1}.${cart[i]}</p>`
    }
}