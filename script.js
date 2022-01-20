function verificar(){
    let date = new Date()
    let ano = date.getFullYear()
    let fano = document.getElementById('txtano')
    let result = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO} Verifique os dados e tente novamente!')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'img/criancaH.png')
            } else if ( idade < 20){
                imagem.setAttribute('src', 'img/jovemH.png')
            } else if (idade < 50){
                imagem.setAttribute('src', 'img/adulto.png')
            } else{
                imagem.setAttribute('src', 'img/idoso.png')
            }
        } else{
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'img/criancaM.png')
            } else if (idade < 20){
                imagem.setAttribute('src', 'img/jovemM.png')
            } else if (idade < 50){
                imagem.setAttribute('src', 'img/adulta.png')
            } else{
                imagem.setAttribute('src', 'img/idosa.png')
            }
        }
        result.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        result.style.textAlign = 'center'
        result.appendChild(imagem)
    }
}