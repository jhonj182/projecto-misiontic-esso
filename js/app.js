const tabla = document.querySelector(".js-table-body");
// console.log(vehiculos);
// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//       if (rawFile.readyState === 4 && rawFile.status == "200") {
//           callback(rawFile.responseText);
//       }
//   }
//   rawFile.send(null);
// }

// //usage:
// readTextFile("/js/data.json", function(text){
//   var vehiculos = JSON.parse(text);
//   console.log(vehiculos);
// });


document.addEventListener('DOMContentLoaded', () => {
  cargarVehiculos(vehiculos);
});

function cargarVehiculos(vehiculos){
  vehiculos.forEach(function (vehiculo, i)  {
    const { marca, placa, modelo } = vehiculo;
    console.log(i);
    i++;
    const fila = document.createElement('tr');
    fila.classList.add('text-center');
    fila.innerHTML = `<th scope="row">${i}</th>
      <td>${marca}</td>
      <td>${placa}</td>
      <td>${modelo}</td>
      <td class="text-center">
        <a  href="tanquear/${placa}" class="btn btn-success btm-h"><i class="fas fa-edit"></i>Tanquear</i></a >
        <a href="editar/${placa}" class="btn btn-primary btm-h"><i class="far fa-eye"></i>Editar</a >
        <a  href="eliminar/${placa}" class="btn btn-danger btm-h"><i class="far fa-trash-alt"></i>Eliminar</a >
      </td>`;
    
    tabla.appendChild(fila);

  });
}