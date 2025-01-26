document.addEventListener('DOMContentLoaded', function () {
    var product_data = [
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/9cf/360_360_140cd750bba9870f18aada2478b24840a/9cf99140ac7284fff0856e1ca6ce3bad.jpeg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/b28/360_360_140cd750bba9870f18aada2478b24840a/b2824b704f046e98c0a5726c07f2d99f.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/a5f/360_360_140cd750bba9870f18aada2478b24840a/a5fe51236593b67bf251e13a887e5a7d.jpeg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/iblock/de1/de1aadd2212ba58acb95a56ecef7974b.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/iblock/c42/c42fe4ab263c63dfc721a6a51ecf4b19.JPG`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/1d6/360_360_140cd750bba9870f18aada2478b24840a/1d610c191c42d096f60da71eefbc338e.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/7d3/360_360_140cd750bba9870f18aada2478b24840a/7d3393f220fd77d0442b9b12f6039b45.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/dec/360_360_140cd750bba9870f18aada2478b24840a/dec4f1b61b03e47e0f603f57f4c53bea.jpeg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/c83/360_360_140cd750bba9870f18aada2478b24840a/c8396bbf4ddd65ea0022b5d84c001e5e.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/ebe/360_360_140cd750bba9870f18aada2478b24840a/ebef44a30f4db253e350f0113c6387b2.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/2b2/360_360_140cd750bba9870f18aada2478b24840a/2b2b484b1b3c51c0eea9676117470c1b.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/fc5/360_360_140cd750bba9870f18aada2478b24840a/fc51ad98376e4baf48d6b76080c7e21b.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/iblock/f16/f16510da781a79c5c70258d3a24d18c6.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/737/360_360_140cd750bba9870f18aada2478b24840a/73799f2cab199714d7ec89f8f6829352.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/f77/360_360_140cd750bba9870f18aada2478b24840a/f774930d443bc395970c058d4efea6a2.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/767/360_360_140cd750bba9870f18aada2478b24840a/767842495e0513c8cd76368095e40ca6.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/d12/360_360_140cd750bba9870f18aada2478b24840a/d123cfa215508fe4bbffc2d352d99780.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/ee2/360_360_140cd750bba9870f18aada2478b24840a/ee26852a87126176d3e3c37cda64e6e6.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
        {
            img: `https://www.luxkoff.ru/upload/resize_cache/iblock/db6/360_360_140cd750bba9870f18aada2478b24840a/db687da470400c5823f852dc22f52ca5.jpg`,
            name: 'Лестницы с деревянными ступенями'
        },
    ];

    var product_box = document.getElementById('product_box');

    product_data.forEach((e) => {
        var product = document.createElement('div');
        product.setAttribute('class', 'product');

        var img = document.createElement('img');
        img.setAttribute('src', e.img);

        var h4 = document.createElement('h4');
        h4.innerText = e.name;

        product.appendChild(img);
        product.appendChild(h4);

        product_box.appendChild(product);

        product.addEventListener('click',()=>{
            localStorage.setItem('product',JSON.stringify(e));
            this.location.href = "./Detal.html"
          })
    });
});

document.getElementById('menu_btn').onclick = () => {
        document.querySelector('.Menu').classList.toggle('openmenu');
        document.getElementById('menu_btn').classList.toggle('open')
}
const navlinks = document.querySelectorAll('.Menu>a');
console.log(navlinks);

navlinks.forEach((link)=>{
    link.onclick=()=>{
        document.querySelector('.Menu').classList.toggle('openmenu');
        document.getElementById('menu_btn').classList.remove('open')
    }
})