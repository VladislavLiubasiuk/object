function City(name, population) {
  this.name = name;
  this.population = population;
  this.getName = function() {
      return (this.name);
  };
  this.exportStr = function() {
      return ("name = " + this.name + "\n" + "population = " + this.population);
  };
}


let Random = new City("RandomCity", 545632175);

console.log(Random);
console.log(Random.getName());
console.log(Random.exportStr());


let x = function() {
  return (this.name);
};

let y = function(){
    return ("name = " + this.name + "\n" + "population = " + this.population);
};



let city1 = {}
city1.name = "GorodN";
city1.population = 1000000;
city1.exportStr = y;
city1.getName = x;


console.log(city1.getName());
console.log(city1.exportStr());

city2 = {name:"GorodM", population:10**6};
city2.exportStr = y;
city2.getName = x;

console.log(city2.getName());
console.log(city2.exportStr());

