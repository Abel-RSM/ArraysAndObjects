import "./styles.css";

const fetchData = async () => {
  const f = await fetch(
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  );
  const jsonObj = await f;
  const response = await jsonObj.json();
  return response;
};

const r = fetchData().then((data) => {
  //console.log(data);

  //Generar un arreglo que contenga solamente los nombres de c/ind
  // const name = data["Brastlewark"][0]["name"];
  //console.log(name);

  // const nameArray = [];

  // for (var i in data["Brastlewark"]) {
  //   nameArray.push(data["Brastlewark"][i]["name"]);
  // }

  // console.log(nameArray);

  const nameMapArray = data.Brastlewark.map(function (element, indice) {
    element.numerito = indice;
    return element;
  });

  console.log(nameMapArray);
});
const names = ["Abel", "Fran", "Daniel", "Pepe"];

function printNames(elem, index) {
    return elem + " practique el map";
}

const printNamesArrow = (elem, index) => {
    return elem + " practique el map";
}

function addItems(list) {
    return list.map(printNamesArrow);
}

console.log(addItems(names));



console.log(names.find((item) => { return item.match(/^a/ig) }))

console.log(names.filter((item) => { return item.match(/^a/ig) }))

console.log(names.includes("Abel"));




const coxe = {
    puertas: 5,
    color: "azul",
    ruedas: 4,
    combustible: "diesel"

};

coxe.marca = 'Seat';
coxe.puertas = 4;
console.log(coxe);


const coxe = {
    puertas: 5,
    color: "azul",
    ruedas: 4,
    combustible: "diesel"
};

coxe.marca = "Seat";
coxe.puertas = 4;
console.log(coxe);

const { marca, puertas, ...rest } = coxe;
console.log(marca, rest);

const a = [1, 2];
const [abel, second] = a;
console.log(abel, second);




import "./styles.css";

const fetchData = async() => {
    const f = await fetch(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const jsonObj = await f;
    const response = await jsonObj.json();
    return response;
};


const processData = (data) => {
    console.log(data);
    console.log(data['Brastlewark'][0]['name']);
    console.log(data.Brastlewark[0].name);


    console.log(data['Brastlewark'][8]['professions'][data['Brastlewark'][8]['professions'].length - 1]);
    const professions = data['Brastlewark'][8]['professions'];
    console.log(professions[professions.length - 1]);
}

fetchData().then(processData);



import "./styles.css";

const fetchData = async() => {
    const f = await fetch(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const jsonObj = await f;
    const response = await jsonObj.json();
    return response;
};

const r = fetchData().then((data) => {
    console.log(data);

    //Generar un arreglo que contenga solamente los nombres de c/ind
    const name = data["Brastlewark"][0]["name"];
    console.log(name);

    const nameArray = [];

    for (var i in data["Brastlewark"]) {
        nameArray.push(data["Brastlewark"][i]["name"]);
    }

    console.log(nameArray);

    const nameMapArray = data.Brastlewark.map(function(element, indice) {
        element.numerito = indice;
        return element;
    });

    console.log(nameMapArray);

    const ageArray = data.Brastlewark.filter(function(element) {
        return element.age > 121;
    });
    console.log(ageArray);
});
