const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const dataStorage = localStorage.getItem(localStorageKey);
if (dataStorage) {
  const dataStorageParse = JSON.parse(dataStorage);
  inputEmail.value = dataStorageParse.email ?? '';
  textarea.value = dataStorageParse.message ?? '';
  formData.email = dataStorageParse.email ?? '';
  formData.message = dataStorageParse.message ?? '';
}

form.addEventListener('input', event => {
  formData.email = inputEmail.value;
  formData.message = textarea.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
