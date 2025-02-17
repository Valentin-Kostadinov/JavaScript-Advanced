class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.currentWorkLoad = 0;
    this.totalProfit = 0;
    this.clients = [];
  }

  getPet(owner, petName) {
    if (!owner) {
      return;
    }

    return owner.pets.find((x) => x.petName == petName);
  }

  getClient(ownerName) {
    let client = this.clients.find((x) => x.ownerName == ownerName);

    return client;
  }

  newCustomer(ownerName, petName, kind, procedures) {
    if (this.currentWorkLoad >= this.capacity) {
      throw new Error("Sorry, we are not able to accept more patients!");
    }

    let currentOwner = this.getClient(ownerName);
    let currentPet = this.getPet(currentOwner, petName);
    if (currentOwner && currentPet) {
      if (currentPet.procedures.length > 0) {
        throw new Error(
          `This pet is already registered under ${
            currentOwner.ownerName
          } name! ${
            currentPet.petName
          } is on our lists, waiting for all his ${currentPet.procedures.join(
            ", "
          )}.`
        );
      } else {
        currentPet.procedures = procedures;
      }
    } else if (!currentOwner) {
      currentOwner = {
        ownerName,
        pets: [],
      };
      this.clients.push(currentOwner);
    }

    currentOwner.pets.push({
      petName,
      kind,
      procedures,
    });

    this.currentWorkLoad++;

    return `Welcome ${petName}!`;
  }

  onLeaving(ownerName, petName) {
    let currentOwner = this.getClient(ownerName);

    if (!currentOwner) {
      throw new Error("Sorry, there is no such client!");
    }

    let currentPet = this.getPet(currentOwner, petName);

    if (!currentPet || currentPet.procedures.length == 0) {
      throw new Error(
        `Sorry, there are no procedures for ${currentPet.petName}`
      );
    }

    this.totalProfit += currentPet.procedures.length * 500;

    this.currentWorkLoad--;

    currentPet.procedures = [];

    return `Goodbye ${currentPet.petName}. Stay safe!`;
  }

  toString() {
    let busyPercentage = Math.floor(
      (this.currentWorkLoad / this.capacity) * 100
    );

    let result = `${this.clinicName} is ${busyPercentage}% busy today!`;
    result += "\n";
    result += `Total profit: ${this.totalProfit.toFixed(2)}`;

    this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

    for (let client of this.clients) {
      client.pets.sort((a, b) => a.petName.localeCompare(b.petName));
      result += "\n";
      result += `${client.ownerName} with:`;

      for (let pet of client.pets) {
        result += "\n";
        result += `---${
          pet.petName
        } - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(
          ", "
        )}`;
      }
    }
    return result;
  }
}

let clinic = new VeterinaryClinic("SoftCare", 10);
console.log(
  clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
);
console.log(
  clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
);
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
console.log(clinic.toString());
