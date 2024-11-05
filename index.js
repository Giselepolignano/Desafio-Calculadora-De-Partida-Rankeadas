let nivel = "Ferro"

function calcularRank(vitorias, derrotas){
  if(vitorias >= 11 && vitorias <= 20){
    nivel = "Bronze";
  };
  if(vitorias >= 21 && vitorias <= 50){
    nivel  = "Prata";
  };
  if(vitorias >= 51 && vitorias <= 80){
   nivel  = "Ouro";
  };
  if(vitorias >= 81 && vitorias <= 90){
    nivel  = "Diamante";
  };
  if(vitorias >= 91 && vitorias <= 100){
    nivel  = "Lendário";
  };
  if(vitorias >= 101 ){
    nivel  = "Imortal";
  };

  return  vitorias - derrotas;
};

const resultado = calcularRank(95, 30);
  
console.log(`O Herói tem de saldo de ${resultado} está no nível de ${nivel}`);




