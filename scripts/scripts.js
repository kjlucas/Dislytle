import espers from "../data/espers.json" assert { type: "json" };
console.log(espers);
for (let i = 0; i < espers.length; i++) {
  let esper = espers[i];
  let option = document.createElement("option");
  option.value = esper.name;
  option.appendChild(document.createTextNode(esper.name));
  document.getElementById("esper_select").appendChild(option);
}
