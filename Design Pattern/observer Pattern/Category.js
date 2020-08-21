//observable objects


class Category{
    constructor(name) {
        this.name = name;  //name is - category
        this.subscribers = []; //we are going to notify particular users about category
    }

    subscribe(observer){
        this.subscribers.push(observer);
    }

    sale(discount){
            this.subscribers.forEach(observer => observer.notify(this.name, discount)) //put a loop on each subscriber to get a sale message
    }
}

module.exports = Category;