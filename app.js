// console.log('I love coding');

// // console.log(document);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);

//1.Id selector
const main = document.getElementById('main-header');
main.style.borderBottom = 'solid 4px black';

const title = document.querySelector('.title');
title.style.fontWeight = 'bold';
title.style.color = 'green';


//2.Class selector

const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[0].textContent = 'This is first list';
// items[1].textContent = 'This is second list';
// items[2].textContent = 'This is third list';
// items[3].textContent = 'This is fourth list';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';

 items[2].style.backgroundColor = 'green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}


// items[0].style.backgroundColor = 'Violet';
// items[1].style.backgroundColor = 'LightGray';
// items[2].style.backgroundColor = 'Orange'
// items[3].style.backgroundColor = 'Tomato';

//    for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor = 'LightGray'; 
//    }

// items[0].style.color = 'Tomato';
// items[1].style.fontWeight = 'DodgerBlue';
// items[2].style.fontWeight = 'MediumSeaGreen';
// items[3].style.fontWeight = 'LightGray';

// 3 GetElementbyTag selector

const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

  li[3].style.background = 'green';
  

