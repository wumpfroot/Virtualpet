class Pet {
    constructor(name) {
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._energy = 100;
    }
    get name() {
        return this._name
    }
    get hunger() {
        return this._hunger
    }
    get thirst() {
        return this._thirst
    }
    get energy() {
        return this._energy
    }

    play() {
        if (this._energy < 80) {
            console.log("I want to sleep!")
        } else if (this._hunger < 40) {
            console.log("I want to eat!")
        } else if (this._thirst < 40) {
            console.log("I need water!")
        } else {
            this._energy -= 5;
            this._hunger -= 5;
            this._thirst -= 10;
        }
    }
    eat() {
        if (this._hunger >= 100) {
            console.log("I am not hungry")
        } else {
            this._hunger += 20
        }


    }
    drink() {
        if (this._thirst >= 100){
            console.log("I am not thirsty");
        }else{
            this._thirst += 20;
        }

    }
    walk() {
        if (this._energy <= 30){
            console.log("I want to sleep!")
        }

    }
    sleep(){
    if(this._energy >=100){
        console.log("I dont want to sleep!")
    } else {
        this._enegry += 20;
        this._hunger -= 10;
        this._thirst -=10;
    }
    }
}

const petName = new Pet("Tufis")

petName.play()
petName.play()
petName.play()
petName.play()
petName.play()

console.log(petName)
petName.play()
petName.eat()
console.log(petName)