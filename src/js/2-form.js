const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

inputEmail.value = localStorage.getItem(localStorageKey.formData.email) ?? '';
textarea.value = localStorage.getItem(localStorageKey.formData.message) ?? '';

form.addEventListener('input', event => {
  formData.email = event.target.elements.email.value;
  formData.message = event.target.elements.message.value;
  localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
