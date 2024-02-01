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
  
  // initial conditions
  createInitialMessages();

  function validate() {
    const text = textInput.value;
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
    const firstNotice = document.createElement('P');
    const secondNotice = document.createElement('P');

    firstNotice.textContent = 'Ningún mensaje fue encontrado';
    firstNotice.setAttribute('id', 'first_notice');
    firstNotice.classList.add('firstNotice');

    secondNotice.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    secondNotice.setAttribute('id', 'second_notice');
    secondNotice.classList.add('secondNotice');
    
    initialMessage.appendChild(firstNotice);
    initialMessage.appendChild(secondNotice);
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