const tropicalfruit = "Mango";

function SliceMango() {
    return tropicalfruit.split('').join('|');  
}                                                   //local to the module


function makeSolid() {                                  //public
    console.log(`Your ${SliceMango()} is here`);
}
const fru = makeSolid();
console.log(fru);
console.log(tropicalfruit); //can access locally 
module.exports = makeSolid;   

