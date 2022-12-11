const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const inputModalElement = document.querySelector('dialog#inputModal');
const modalSubmitButton = document.querySelector('button.modalSubmit');
const studentNoSpanElement = document.querySelector('span.studentNo');
const emailSpanElement = document.querySelector('span.email');

const setUserName = (umane) => {
    nameH1Element.textContent = umane;
    connectNameElement.textContent = umane;
};

const setStudentNo = (stdNum) => {
    studentNoSpanElement.textContent = stdNum;
};

const setUserEmail = (email) => {
    emailSpanElement.textContent = email;
};

const chkStudentNo = (stdNum) => {
    if (stdNum.length != 9 || stdNum === ``) {
        return false;
    } else {
        return true;
    }
};
//이메일 형식 체크
const chkUserEmail = (email) => {
    const testEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!testEmail.test(email) || email === ``) 
        return false;
    
else 
        return true;
    }
;

const setLocalInfomation = () => {
    const localName = localStorage.getItem('userName');
    const localStudentNo = localStorage.getItem('studentNo');
    const localUserEmail = localStorage.getItem('userEmail');

    if (localName) 
        setUserName(localName);
    if (localStudentNo) 
        setStudentNo(localStudentNo);
    if (localUserEmail) 
        setUserEmail(localUserEmail);
    };

setLocalInfomation();

nameH1Element.onclick = () => {
    inputModalElement.showModal();
};

inputModalElement.onclick = (e) => {

    if (e.target.nodeName === 'DIALOG') 
        inputModalElement.close();
    };

modalSubmitButton.onclick = (e) => {

    const modalFormElement = document.querySelector('form.modalForm');
    const formData = new FormData(modalFormElement);
    for (const [key, value] of formData) {
        localStorage.setItem(key, value);
        if (key === 'userEmail') {
            if (chkUserEmail(value)) 
                setUserEmail(value);
            else 
                alert(`이메일을 다시 입력해 주세요.`);
            }
        if (key === 'userName') {
            setUserName(value);
        }
        if (key === 'studentNo') {
            if (chkStudentNo(value)) 
                setStudentNo(value);
            else 
                alert(`학번을 다시 입력해 주세요..`);
            }
        
    }
    modalFormElement.reset();
    inputModalElement.close();
};
