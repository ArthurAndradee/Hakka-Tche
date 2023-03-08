const nut = document.getElementById("nut")
nut.addEventListener('click', () => {
    const nutrition = document.getElementById("nutrition")
    nutrition.innerHTML = "⠀Se você deseja ajudar moradores de rua com alimentos preencha o formulário abaixo. Você pode ajudar entregando alimentos no nosso ponto de coleta: EEEM Presidente Kennedy. Ou pode também nos sinalizar onde você viu um morador de rua para você levar diretamente a comida a ele e o manter cadastrado no site para receber ajuda sempre que possível."    
})

const healthSection = document.getElementById("healthsection")
healthSection.addEventListener('click', () => {
    const health = document.getElementById("health")
    health.innerHTML = "⠀Se você deseja ajudar moradores de rua com saúde e bem-estar preencha o formulário abaixo.  Você pode ver em nosso site onde são os locais que costumam ter moradores e se direcionar a eles após confirmar a localização pelo chat. Nesse contato com o necessitado será ofertado uma revisão básica de saúde ou um atendimento de primeiros socorros. Aconselhamos sempre que tenham empatia e estejam preparados para ouvir cada súplica do agora paciente. Vale ressaltar que para ajudar nessa área é necessário ser formado em algum curso da área da saúde."
} )

const clothesSection = document.getElementById("clothessection")
clothesSection.addEventListener('click', () => {
    const clothes = document.getElementById("clothes")
    clothes.innerHTML = "⠀Se você deseja ajudar moradores de rua com roupas preencha o formulário abaixo. Você pode ajudar entregando as roupas a serem doadas no nosso ponto de coleta: EEEM Presidente Kennedy. Ou pode também nos sinalizar onde você viu um morador de rua para você levar diretamente essa vestimenta a ele e o manter cadastrado no site para receber ajuda sempre que possível"
})


const ongsSection = document.getElementById("ongssection")

ongsSection.addEventListener('click', () => {
    const ongs = document.getElementById("ongs")
    ongs.innerHTML = "⠀Se você deseja ajudar moradores de rua participando de nossas ONG´s parceiras preencha o formulário abaixo. Nesse meio de ajuda você se torna nosso voluntário para pegar os alimentos e roupas e leva-los aos necessitados. Cria-se também um comprometimento de ajudar com a ONG que você escolher, para que assim o referido grupo possa ter vários programas que o estão amparando."
})