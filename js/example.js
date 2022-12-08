const nameH1Element = document.querySelector('h1.inline');

nameH1Element.onclick = () =>{
    const inputName = prompt('이름을 입력');
    nameH1Element.textContent = inputName;
};