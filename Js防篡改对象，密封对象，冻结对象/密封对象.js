var person={name:"ff"};
Object.seal(person);
Object.isExtensible(person);//true
Object.isSealed(person);//false