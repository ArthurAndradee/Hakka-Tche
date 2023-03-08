var nutCount = 0
var healthCount = 0
var clothesCount = 0
var ongsCount = 0

const nut = document.getElementById("nut")
nut.addEventListener('click', () => {
    if (nutCount == 0) {
        const nutrition = document.getElementById("nutrition")
        nutrition.innerHTML = "⠀Se você deseja ajudar moradores de rua com alimentos preencha o formulário abaixo. Você pode ajudar entregando alimentos no nosso ponto de coleta: EEEM Presidente Kennedy. Ou pode também nos sinalizar onde você viu um morador de rua para você levar diretamente a comida a ele e o manter cadastrado no site para receber ajuda sempre que possível."    
        nutCount = 1
    } else {
        nutrition.innerHTML = ""
        nutCount = 0
    }
})

const healthSection = document.getElementById("healthsection")
healthSection.addEventListener('click', () => {
    if (healthCount == 0) {
        const health = document.getElementById("health")
        health.innerHTML = "⠀Se você deseja ajudar moradores de rua com saúde e bem-estar preencha o formulário abaixo.  Você pode ver em nosso site onde são os locais que costumam ter moradores e se direcionar a eles após confirmar a localização pelo chat. Nesse contato com o necessitado será ofertado uma revisão básica de saúde ou um atendimento de primeiros socorros. Aconselhamos sempre que tenham empatia e estejam preparados para ouvir cada súplica do agora paciente. Vale ressaltar que para ajudar nessa área é necessário ser formado em algum curso da área da saúde."
        healthCount = 1
    } else {
        health.innerHTML = ""
        healthCount = 0
    }
} )

const clothesSection = document.getElementById("clothessection")
clothesSection.addEventListener('click', () => {
    if (clothesCount == 0) {
        const clothes = document.getElementById("clothes")
        clothes.innerHTML = "⠀Se você deseja ajudar moradores de rua com roupas preencha o formulário abaixo. Você pode ajudar entregando as roupas a serem doadas no nosso ponto de coleta: EEEM Presidente Kennedy. Ou pode também nos sinalizar onde você viu um morador de rua para você levar diretamente essa vestimenta a ele e o manter cadastrado no site para receber ajuda sempre que possível"
        clothesCount = 1
    } else {
        clothes.innerHTML = ""
        clothesCount = 0
    }
})


const ongsSection = document.getElementById("ongssection")

ongsSection.addEventListener('click', () => {
    if (ongsCount == 0) {
        const ongs = document.getElementById("ongs")
        ongs.innerHTML = "⠀Se você deseja ajudar moradores de rua participando de nossas ONG´s parceiras preencha o formulário abaixo. Nesse meio de ajuda você se torna nosso voluntário para pegar os alimentos e roupas e leva-los aos necessitados. Cria-se também um comprometimento de ajudar com a ONG que você escolher, para que assim o referido grupo possa ter vários programas que o estão amparando."
        ongsCount = 1
    } else  {
        ongs.innerHTML = ""
        ongsCount = 0
    }
})