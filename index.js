function IMC(weight, height) {
  return new Promise((resolve, reject) => {
      if (typeof weight !== 'number' || typeof height !== 'number') {
        reject('Peso e altura incorretos.')
      } else {
        resolve(weight / (height * height))
      }
  })
}

function showImc(weight, height) {
  IMC(weight, height).then((result) => {
    console.log(`O IMC é ${result}`)

    if (result < 18.5) console.log('índice de massa corporal: MAGRESA')
    else if (result < 24.9) console.log('índice de massa corporal: NORMAL')
    else if (result < 30) console.log('índice de massa corporal: SOBREPESO')
    else if (result < 40) console.log('índice de massa corporal: OBESIDADE')
    else console.log('índice de massa corporal: OBESIDADE GRAVE')
  }).catch((err) => {
    console.log(`Erro ao calcular IMC, motivo: ${err}`)
  })
  console.log(`Calculando o imc para o peso ${weight} e aultura ${height}...`)
}


showImc(70, 1.72) 
showImc(98, 1.64)