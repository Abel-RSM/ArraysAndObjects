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
