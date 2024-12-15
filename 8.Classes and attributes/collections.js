const myMap = new Map();

myMap.set("Ime", "+1-555-4981");
myMap.set("Ime 2", "+1-555-3252");

console.log(myMap);

console.log(myMap.get("Ime"));

myMap.set("Ime", "+1-777-4532");

console.log(myMap);

for (let entry of myMap) {
  console.log(entry);
}

console.log("transforming to array: ", Array.from(myMap));

console.log(myMap.entries());
console.log(myMap.keys());
