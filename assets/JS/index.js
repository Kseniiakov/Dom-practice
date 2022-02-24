"use strict";

const arrContent = [
    {img: './imgs/img1.jpg', h1: 'Lorem Ipsum', p: 'это текст-"рыба", часто используемый в печати.'},
    {img: './imgs/img2.jpg', h1: 'Lorem Ipsum', p: 'Lorem Ipsum является стандартной "рыбой"'},
    {img: './imgs/img3.jpg', h1: 'Lorem Ipsum', p: 'для текстов на латинице с начала XVI века'},
];

const main = document.querySelector('main');

arrContent.forEach((value) => {
    const articleFirst = document.createElement('article');
    const img = document.createElement('img');
    img.src = value.img;
    articleFirst.append(img);
    main.append(articleFirst);
});