// Pirma užduotis

var PVM = 21,       //PVM
    commodityPrice, //prekės kaina
    pricePVM,       //PVM kaina
    priceWithPVM;   //kaina su PVM
var whileNotNumber = false;
var RegularExpression = /^[0-9]*\.?[0-9]*$/; // ^ ir $ - string pradžia ir pabaiga; * 0 arba daugiau simboliu; [0-9]* 0 arba daugiau skaičių; \. jeigu nebūtų "\" prieš tašką, tai . reikštų 'bent kurį simbolį';
//expression su neigiamais skaičiais /^[0-9-]*\.?[0-9]*$/
//expression neleidžiant, kad būtų vien tik taškas /^[0-9-]+\.?[0-9]*$/

while(!whileNotNumber) {
    //prašo įvesti prekės kainą
    commodityPrice = prompt("Įveskite prekės kainą: ");
    //jeigu reikšmė atitinka aprašytą, tuomet kintamąjį konvertuoją į float tipą
    if(commodityPrice.match(RegularExpression)) {
        //+ konvertuoja į skaičių
        commodityPrice = +commodityPrice;
        //jeigu kaina lygi 0, įspėja, kad įvesta reikšmė negali būti mažesnė ar lygi 0
        if (commodityPrice <= 0) {
            console.log("Įvestas skaicius negali būti mažesnis arba lygus nuliui. Įveskite kainą iš naujo! ");
        } else {
            //kitu atveju jei kaina yra didesnė nei 0, yra sustabdomas while ciklas
            whileNotNumber = true;
        }
        
    } else {
        //jeigu buvo panaudotos raidės ar kiti simboliai be (.), yra atspausdinamas įspėjimas
        console.log("Ivesta reikšmė naudoja neleistinus simbolius. Bandykite dar kartą!")
    }
}

//Skaičiuojama PVM kaina
pricePVM = (21/100)*commodityPrice;
//Galutinė kaina su PVM
priceWithPVM = commodityPrice+pricePVM;

console.log("Prekės kaina su PVM: " + priceWithPVM.toFixed(2) + " €")
console.log("PVM: " + pricePVM.toFixed(2) + " €")
console.log("Prekės kaina be PVM: " + commodityPrice.toFixed(2) + " €")

//----------------------------------------------------------------------

// Antra užduotis
var GoTnames = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];
var firstName = GoTnames[0],
    lastName = GoTnames[GoTnames.length-1];

console.log("Pirmas vardas masyve yra: " + firstName + "\nPaskutinis vardas masyve yra: " + lastName);


//vartotojo įvestas skaičius
var insertedNumber;
var whileNotArrayNumber = false;
var numberCheck = /^[0-9]$/;

while(!whileNotArrayNumber) {
    insertedNumber = prompt("Iveskite skaičių nuo 1 iki " + GoTnames.length + ", kad būtų atspausintas masyvo elementas.")

    if(insertedNumber.match(numberCheck)) {
        if(insertedNumber <= 0  || insertedNumber > GoTnames.length) {
            console.log("Buvo įvestas netinkamas skaičius. Įveskite teigiamą sveikąjį skaičių nuo 1 iki " + GoTnames.length)
        } else {

            whileNotArrayNumber = true;
        }
        
    }
}

console.log("Įvestas numeris masyve atitinka personažą: " + GoTnames[insertedNumber-1]);



// ==== PAPILDOMAI =======

var skaiciuMasyvas = [7, 9, 1, 5, 15, 13];
var sumOfNumbers = 0,
    avgOfNumbers = 0,
    minNumber=skaiciuMasyvas[0],
    maxNumber=skaiciuMasyvas[0];

for(let i = 0; i < skaiciuMasyvas.length; i++) {
    sumOfNumbers += skaiciuMasyvas[i];
    if(skaiciuMasyvas[i] > maxNumber) {
        maxNumber = skaiciuMasyvas[i];
    }
    if(skaiciuMasyvas[i] < minNumber) {
        minNumber = skaiciuMasyvas[i];
    }
}

avgOfNumbers=sumOfNumbers/skaiciuMasyvas.length;

console.log("Skaičių suma: " + sumOfNumbers);
console.log("Skaičių vidurkis: " + parseFloat(avgOfNumbers).toFixed(2));
console.log("Didžiausias skaičius: " + maxNumber);
console.log("Mažiausias skaičius: " + minNumber);

// Perdavimas į html

var outPriceWithPVM = document.querySelector(".outPriceWithPVM");
var outPVM = document.querySelector(".outPVM");
var outPrice = document.querySelector(".outPrice");
//----------------------------------------------------------------
var outFirstName = document.querySelector(".firstName");
var outLastName = document.querySelector(".lastName");
var outInsertedNumber = document.querySelector(".insertedNumber");
var outInsertedNumberName = document.querySelector(".insertedNumberName");
//----------------------------------------------------------------
var outNumberArray = document.querySelector(".numberArray");
var outNumberArraySum = document.querySelector(".numberArraySum");
var outNumberArrayAvg = document.querySelector(".numberArrayAvg");
var outNumberArrayMax = document.querySelector(".numberArrayMax");
var outNumberArrayMin = document.querySelector(".numberArrayMin");
//----------------------------------------------------------------
outPriceWithPVM.innerHTML = priceWithPVM.toFixed(2);
outPVM.innerHTML = pricePVM.toFixed(2);
outPrice.innerHTML = commodityPrice.toFixed(2);
//----------------------------------------------------------------
outFirstName.innerHTML = firstName;
outLastName.innerHTML = lastName;
outInsertedNumber.innerHTML = insertedNumber;
outInsertedNumberName.innerHTML = GoTnames[insertedNumber-1];
//----------------------------------------------------------------
outNumberArray.innerHTML = skaiciuMasyvas;
outNumberArraySum.innerHTML = sumOfNumbers;
outNumberArrayAvg.innerHTML = parseFloat(avgOfNumbers).toFixed(2);
outNumberArrayMax.innerHTML = maxNumber;
outNumberArrayMin.innerHTML = minNumber;