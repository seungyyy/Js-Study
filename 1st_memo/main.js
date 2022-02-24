const memoWrapper = document.querySelector('.wrapper');
const deleteBtn = document.createElement('Button');
const sumbitBtn = document.querySelector('.submit-btn');
const ul = memoWrapper.querySelector('.edit-txt');
const user = memoWrapper.querySelector('#user-name');
const textArea = memoWrapper.querySelector('#memo-txt');

function submitMemo() { 
  localStorage.setItem('currentUser', user.value);
  localStorage.setItem(`memo${localStorage.length}`, textArea.value);
  let userName = localStorage.getItem('currentUser');
  
  for (let i = 1; i < localStorage.length; i++) {
    console.log(i);
    let memoList = localStorage.getItem(`memo${i}`);
    console.log(memoList);
    
    ul.innerHTML += `
      <li class="li">
        ${userName}의 메모 ${memoList}
      </li>
    `;
    while (ul.childElementCount > localStorage.length-1) {
      ul.removeChild(ul.firstChild);
    }
    //console.log(deleteli);
  }

  textArea.value = '';
  clearMemo();
}

function clearMemo() { 
  if (ul.length !== 0) { 
    ul.insertAdjacentElement('beforeend', deleteBtn);
    deleteBtn.textContent = '삭제하기';
    deleteBtn.type = 'button';
    deleteBtn.classList.add('delete-btn');
  }
}

function keyupDisable() { 
  if (user.value.length !== 0 && textArea.value.length !== 0) {
    sumbitBtn.disabled = false;
  } else if (user.value.length === 0 || textArea.value.length === 0) {
    sumbitBtn.disabled = true;
  }
}

function noText() { 
  if (user.value.length === 0 && textArea.value.length === 0) {
    sumbitBtn.disabled = true;
  } else { 
    sumbitBtn.disabled = false;
  }
}

function removeList() { 
  localStorage.clear();
  const liList = document.querySelectorAll('.li');
  [].forEach.call(liList, function (liList) {
    liList.remove();
  });
  deleteBtn.remove();
  user.value = '';
}

noText();
memoWrapper.addEventListener('keyup', keyupDisable);
sumbitBtn.addEventListener('click', submitMemo);
deleteBtn.addEventListener('click', removeList);