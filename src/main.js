const slider = document.querySelectorAll('.slider') // selecionando todas as imagens com classe "slider"
const btnPrev = document.getElementById('prev-button') // selecionando elemento com id prev-button
const btnNext = document.getElementById('next-button') // selecionando elemento com id next-button

let currentSlide = 0 // slide ativo (somando para avançar/diminuir para voltar)

function hideSlider() { // função de esconder slider
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() { // função de mostrar slider
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()

    if(currentSlide === slider.length - 1){ // se o slider estiver no último, ao clicar ele vai pro primeiro
        currentSlide = 0
    } else { // se não estiver no último slider, ele adiciona +1 ao currentSlider
        currentSlide++
    }

    showSlider()
}

function prevSlider() {
    hideSlider()

    if(currentSlide === 0){ // se o slider for o primeiro e clicarmos em voltar, ele vai para o último
        currentSlide = slider.length - 1
    } else { // se o slider não for o primeiro, ele só vai diminuir 1 
        currentSlide--
    }

    showSlider()
}


btnNext.addEventListener('click', nextSlider) // adicionando evento de click ao botão, quando ele for clicado ele exibira "clicado" no console
btnPrev.addEventListener('click', prevSlider) // adicionando evento de click ao botão, quando ele for clicado ele exibira "clicado" no console

showSlider() // exibindo primeira imagem no inicio do carregamento da página