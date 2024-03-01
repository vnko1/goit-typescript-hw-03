class Key {
  constructor(private signature = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  door = false;
  tenants: Array<Person> = [];
  key: Key;

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) this.tenants.push(person);
  }
}

class MyHouse extends House {
  constructor(public key: Key) {
    super();
  }

  openDoor(key: Key): void {
    if (key === this.key) this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
