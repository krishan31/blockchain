class Shopper{
    constructor(name){
            this.name = name;
    }

    notify(categoryName, discount){
        console.log(`${this.name}, there is a sale for ${categoryName} course! ${discount}% off for each course`);
    }
}

module.exports = Shopper;




//observer objects