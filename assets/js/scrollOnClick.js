document.querySelector('.scroll-onclick > p:nth-child(1)').addEventListener('click', () => {
    document.querySelector('.carousel-section > div').scrollLeft -= 200;
})

document.querySelector('.scroll-onclick > p:nth-child(2)').addEventListener('click', () => {
    document.querySelector('.carousel-section > div').scrollLeft += 200;
})