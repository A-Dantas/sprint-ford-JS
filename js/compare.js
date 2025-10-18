//car
let carArr = [];

class Car {
  nome;
  preco;
  alturaCacamba;
  alturaVeiculo;
  alturaSolo;
  capacidadeCarga;
  motor;
  potencia;
  volumeCacamba;
  roda;
  image;

  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.altauraVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) {
      return i;
    }
}
return -1;
}

function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked && carArr.length < 2) {
      carArr.push(carClass);
    } else {
      if (!el.checked) {
        if (GetCarArrPosition(carArr, carClass) === 1) {
          let itemRemovido = carArr.splice(1, 1);
        } else {
          let itemRemovidoShift = carArr.splice(0, 1);
        }
      }

      if (carArr.length === 2) {
        alert(
          `Só é possível comparar 2 carros. Gentileza, selecionar apenas 2.`
        );
        el.checked = false;
      }
    }
  } else {
    throw "You need set a Car Class";
  }
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert(`Gentileza, selecionar 2 carros para apresentação da comparação.`);
  } else {
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
  }
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
  for (let i = 0; i < carArr.length; i++) {
    if (carArr[i] instanceof Car) {
      document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carArr[i].image}" alt=""></img>`;
      document.getElementById(`compare_modelo_${i}`).innerHTML = `${carArr[i].nome}`;
      document.getElementById(`compare_alturacacamba_${i}`).innerHTML = `${carArr[i].alturaCacamba}`;
      document.getElementById(`compare_alturaveiculo_${i}`).innerHTML = `${carArr[i].altauraVeiculo}`;
      document.getElementById(`compare_alturasolo_${i}`).innerHTML = `${carArr[i].alturaSolo}`;
      document.getElementById(`compare_capacidadecarga_${i}`).innerHTML = `${carArr[i].capacidadeCarga}`;
      document.getElementById(`compare_motor_${i}`).innerHTML = `${carArr[i].motor}`;
      document.getElementById(`compare_potencia_${i}`).innerHTML = `${carArr[i].potencia}`;
      document.getElementById(`compare_volumecacamba_${i}`).innerHTML = `${carArr[i].volumeCacamba}`;
      document.getElementById(`compare_roda_${i}`).innerHTML = `${carArr[i].roda}`;
      document.getElementById(`compare_preco_${i}`).innerHTML = `${carArr[i].preco}`;
      
    }
  }
}
