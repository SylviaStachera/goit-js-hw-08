import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type=email]');
const message = document.querySelector('textarea[name=message]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

//===============Storage nie jest pusty więc automatycznie uzupełnia
if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
  const savedObject = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseObject = JSON.parse(savedObject);

  email.value = parseObject.email;
  message.value = parseObject.message;
}

//============Śledzenie na zdarzenie input i zapisywanie sorage
form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

//============ Wysłąnie formularza, wiersz
const saveEmailMsg = e => {
  e.preventDefault();

  const objectToSave = { email: email.value, message: message.value };
  console.log(objectToSave);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
};

form.addEventListener('submit', saveEmailMsg);

//=================================
//Error

const load = LOCALSTORAGE_KEY => {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
