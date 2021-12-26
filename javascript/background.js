
const body=document.body

const img=[
    '0.jpg', '1.jpg', '2.jpg', '3.jpg'
]

const chooseImage= img[Math.floor(Math.random()*img.length)];

chooseImage_src=`img/${chooseImage}`;

body.style.backgroundImage=`url('${chooseImage_src}')`