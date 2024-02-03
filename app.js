document.addEventListener('DOMContentLoaded', function() {

  // interface elements
  const textInput = document.querySelector('#text_input');
  const btnEncrypt = document.querySelector('#btn_encrypt');
  const btnDecrypt = document.querySelector('#btn_decrypt');
  const initialMessage = document.querySelector('#initial_message');
  const outputMessage = document.querySelector('#output_message');
  
  // events
  btnEncrypt.addEventListener('click', encrypting);
  btnDecrypt.addEventListener('click', decrypting);
  textInput.addEventListener('input', textareaAutoincrement);

  // initial conditions
  createInitialMessages();
  
  // functions
  function textareaAutoincrement() {
    textInput.style.height = "auto";
    textInput.style.height = this.scrollHeight + "px";
  }

  function initialSizeTextarea() {
    textInput.style.height = "initial";
  }

  function validate() {
    const text = textInput.value.toLowerCase();
    const pattern = /^[a-z\s]+$/;
    const patternValidation = pattern.test(text);
    
    if( (text.trim() == '') || !patternValidation ) {
      return false;
    } else {
      return text;
    }
  }

  function encrypting() {
    const validationResult = validate();
    if(validationResult) {
      const textArray = [...validationResult];
      textArray.forEach((letter, index, array) => {
          switch (true) {
  
            case letter === 'a':
              array[index] = 'ai'
              break;
            case letter === 'e':
              array[index] = 'enter'
              break;
            case letter === 'i':
              array[index] = 'imes'
              break;
            case letter === 'o':
              array[index] = 'ober'
              break;
            case letter === 'u':
              array[index] = 'ufat'
              break;
            default:
              array[index] = letter;
          }
      });
      const encryptedText = textArray.join('');
      onceEncrypted(encryptedText);
    }

    return;
  }

  function decrypting() {
    const validationResult = validate();
    if(validationResult) {
      const decryptedText = validationResult.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
      // show decrypted text
      onceEncrypted(decryptedText);
    }

    return;
  }

  function onceEncrypted(ciphertext) {

    removeInitialMessages(initialMessage);
    removeInitialMessages(outputMessage);
    createOutputElements(ciphertext);
    textInput.value = '';
    initialSizeTextarea();
    deleteInitialMessage();
    showOutputMessage();
  }

  function deleteInitialMessage() {
    initialMessage.style.display = 'none';
  }

  function showOutputMessage() {
    outputMessage.style.display = 'flex';
  }

  async function copyText(outputText) {
    try {
      await navigator.clipboard.writeText(outputText.textContent);
    } catch (error) {
      prompt('hubo un error al copiar al portapapeles: ', error);
    }
  }

  function removeInitialMessages(messageElements) {
    while(messageElements.firstChild) {
      messageElements.removeChild(messageElements.firstChild);
    }
  }
  
  function createInitialMessages(){
    const firstMessage = document.createElement('P');
    const secondMessage = document.createElement('P');

    firstMessage.textContent = 'Ningún mensaje fue encontrado';
    firstMessage.setAttribute('id', 'first_notice');
    firstMessage.classList.add('firstMessage');

    secondMessage.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    secondMessage.setAttribute('id', 'second_notice');
    secondMessage.classList.add('secondMessage');
    
    initialMessage.appendChild(firstMessage);
    initialMessage.appendChild(secondMessage);
  }

  function createOutputElements(outputElements) {

    const outputText = document.createElement('P');
    const btnCopyText= document.createElement('BUTTON');

    btnCopyText.setAttribute('id', 'btn_copy');
    btnCopyText.setAttribute('class', 'btn btnCopyText');
    btnCopyText.textContent = 'Copiar';

    outputText.setAttribute('id', 'output_text');
    outputText.classList.add('outputText');
    outputText.textContent = outputElements;

    outputMessage.appendChild(outputText);
    outputMessage.appendChild(btnCopyText);

    btnCopyText.addEventListener('click', copyText(outputText));

  }

});