

const data = [
    {
        comment: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.',
        foto: './assets/images/photo/first.png',
        nama: 'Chealsea Morgan',
        role: 'CEO of Subway'
    },
    {
        comment: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.',
        foto: './assets/images/photo/second.png',
        nama: 'Nick Cave',
        role: 'CMO ot Nokia'
    }, 
    {
        comment: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.',
        foto: './assets/images/photo/fourth.png',
        nama: 'Lana Rosenfeld',
        role: 'Senior VP ot Pinterest'
    },
    {
        comment: 'Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.',
        foto: './assets/images/photo/fifth.png',
        nama: 'Ronald Richards',
        role: 'Barone LLC.'
    },
    {
        comment: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.',
        foto: './assets/images/photo/first.png',
        nama: 'Ronald Richards',
        role: 'Barone LLC.'
    }
]

const CarouselComponents = () => {
    return data.map((data) => {
        return `
            <div class="shadow p-4">
                <div>
                    <img src="./assets/images/Rating.png" alt="">
                    <p class="mt-3">${data.comment}</p>
                    <div class="d-flex mt-3 gap-4">
                        <div>
                            <img src="${data.foto}" alt="">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">${data.nama}</p>
                            <p class="fw-lighten">${data.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

document.querySelector('.carousel-section > div').innerHTML = CarouselComponents();