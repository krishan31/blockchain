const _accounts = [];

const _findAccount = name => _accounts.find(acc => acc.name === name);

const createAccount = (name, money = 0) => {
    if(!_findAccount(name)) {
        _accounts.push({
            name,
            money
        });
        return `New account created for ${name}`;
    } else {
        return "Account already exists";
    }
};

const credit = (name, money) =>{
    if(_findAccount(name)) {
        _accounts.forEach(acc => {
            if(acc.name === name) {
                acc.money = acc.money + money;
            }
        });
    }
};

const debit = (name, money) =>{
    if(_findAccount(name)) {
        _accounts.forEach(acc => {
            if(acc.name === name) {
                acc.money = acc.money - money;
            }
        });
    }
};

const getFunds = name =>{
    if(_findAccount(name)) {
        return _accounts.find(acc => acc.name === name)["money"];
    }
    return "Account not found!";
};

module.exports = {
    createAccount,
    credit,
    debit,
    getFunds

};