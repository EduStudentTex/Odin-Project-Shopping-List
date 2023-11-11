var btn = document.querySelector('.btn1');
btn.addEventListener('click', Clicou);

var input = document.querySelector('input');

const list = document.querySelector('.list');

var deleteBtn = document.querySelector('.delete');

function Clicou () {
    console.log('clicou');

    let item = document.createElement('li');
    item.textContent = input.value;

    let delBtn = document.createElement('button');
    delBtn.className = 'delete';
    delBtn.textContent = 'delete';
    item.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        list.removeChild(item);
    })

    list.appendChild(item);
    input.value = "";
}

