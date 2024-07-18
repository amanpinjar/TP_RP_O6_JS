class Account{
    constructor( id ,name ,balance){
        this.id =id;
        this.name = name;
        this.balance = balance;
    }

    depositAmount(amount){
        this.balance += amount;
        return this.balance;
    }

    withdrawAmount(amount){
        this.balance -= amount;
        return this.balance;
    }
}

class CurrentAccount extends Account{
    calculateInterest(){

    }
}

class SavingAccount extends Account{
    calculateInterest(){
        
    }
}