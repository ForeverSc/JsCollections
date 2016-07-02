var person={name:"ff"};
Object.freeze(person);
Object.isExtensible(person);//false
Object.isSealed(person);//true
Object.isFrozen(person);//true