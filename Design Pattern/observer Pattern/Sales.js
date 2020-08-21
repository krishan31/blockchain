class Sales{

    constructor (){
        this.sales = [];
    }


    notify(categoryName, discount){
        console.log("we have sales for the following category: ");
        this.sales.push({categoryName, discount});
    }
}

module.exports = Sales;
