const nameH1Elemnent = document.querySelector('h1.inline');

const connectNameElement = document.querySelector('span.red');



const inputModalElement = document.querySelector('#inputModal');




const setUserName = (name) => {

  nameH1Elemnent.textContent = name;

  connectNameElement.textContent = name;

};



const localName = localStorage.getItem('name');

if (localName) setUserName(localName);



console.log(inputModalElement);

nameH1Elemnent.onclick = () => {

  inputModalElement.showModal();

};
const modalSubmitBtn = document.querySelector('button.modalSubmit');


const studentNoElemnent = document.querySelector('.studentNo');
const setstudentNo = (No) => {
  studentNoElemnent.textContent = No;
};
const localNo = localStorage.getItem('No');
if (localNo) setstudentNo(localNo);



modalSubmitBtn.onclick = () => {

  const modalFormElement = document.querySelector('.modalForm');

  const formData = new FormData(modalFormElement);



  for (const [key, value] of formData) {

    localStorage.setItem(key, value);

    if (key==='userName') setUserName(value);

  }
  for (const [key, value] of formData) {

    localStorage.setItem(key, value);

    if (key==='studentNo') setstudentNo(value);

  }



  inputModalElement.close();

};



inputModalElement.onclick = (event) => {

  if (event.target.nodeName === 'DIALOG') inputModalElement.close();

};