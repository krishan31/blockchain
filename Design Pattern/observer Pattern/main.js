const Shopper = require('./Shopper');
const Category = require('./Category');
const Sales = require('./Sales');

const designCategory = new Category("dESIGN category");
const WEBCategory = new Category("WEB dESIGN category");
const PCategory = new Category("P dESIGN category");

const paul = new Shopper("Paul");
const Mike = new Shopper("Mike");
const gopal = new Shopper("gopal");


const blackFriday = new Sales();
//black friday sale is for those category!
designCategory.subscribe(blackFriday);
WEBCategory.subscribe(blackFriday);
PCategory.subscribe(blackFriday);

//these users subscribe for categories!
designCategory.subscribe(paul);
WEBCategory.subscribe(Mike);
PCategory.subscribe(gopal);

//discount on category!
designCategory.sale(20);
WEBCategory.sale(15);
PCategory.sale(10);

console.log(blackFriday.sales);
