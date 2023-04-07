// CHristian Johnson
// 4/7/2023
// Optional assignment 'Object Master'

const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//Assignment:
const pkmnIdsBy3 = pokemon.filter((p) => p.id % 3 === 0);
console.log(
  "/======= 1 : an array of pokémon objects where the id is evenly divisible by 3========/"
);
console.log(pkmnIdsBy3);

const pkmFireType = pokemon.filter((p) => p.types.includes("fire"));
console.log(
  "/======= 2 : an array of pokémon objects that are 'fire' type ========/"
);
console.log(pkmFireType);

const pkmMoreThanOneType = pokemon.filter((p) => p.types.length > 1);
console.log(
  "/======= 3 : an array of pokémon objects that have more than one type ========/"
);
console.log(pkmMoreThanOneType);

const pkmnNames = pokemon.map((p) => p.name);
console.log(
  "/======= 4a : an array with just the names of the pokémon || BONUS:  Sort the names too! ========/"
);
console.log(pkmnNames);

const pkmnNamesSorted = [...pkmnNames].sort();
console.log("/======= 4b :  4a SORTED ========/");
console.log(pkmnNamesSorted);

const pkmnNamesIDOver99 = pokemon.filter((p) => p.id > 99).map((p) => p.name);
console.log(
  "/======= 5 :  an array with just the names of pokémon with an id greater than 99  ========/"
);
console.log(pkmnNamesIDOver99);

const pkmnPoisonNames = pokemon
  .filter((pmn) => pmn.types.includes("poison") && pmn.types.length == 1)
  .map((pmn) => pmn.name);
console.log(
  "/======= 6: an array with just the names of the pokémon whose only type is poison ========/"
);
console.log(pkmnPoisonNames);

const pkmnFlying2 = pokemon
  .filter((p) => p.types[1] == "flying")
  .map((p) => p.types[0]);
console.log(
  "/======= 7: an array containing just the first type of all the pokémon whose second type is 'flying'========/"
);
console.log(pkmnFlying2);

//  Note: not asking for an arraay with the number.... just the number.
const pkmnNumOfNormal = pokemon.filter((p) => p.types.includes("normal"));
console.log(
  "/=======Problem 8: a count of the number of pokémon that are 'normal' type.========/"
);
console.log(pkmnNumOfNormal.length);
