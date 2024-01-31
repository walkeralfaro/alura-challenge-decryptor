document.addEventListener('DOMContentLoaded', function() {

  // interface elements
  const textInput = document.querySelector('#text_input');
  const btnEncrypt = document.querySelector('#btn_encrypt');
  const btnDecrypt = document.querySelector('#btn_decrypt');
  const btnCopyText= document.querySelector('#btn_copy');
  const outputText = document.querySelector('#output_text');
  
  // events
  btnEncrypt.addEventListener('click', encrypting);
  btnDecrypt.addEventListener('click', decrypting);
  btnCopyText.addEventListener('click', copyText);
  

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
  
      // show encrypted text
      showText(encryptedText);
  
      // clean input text of textarea
      cleanInputText();
    }

    return;


  }

  function decrypting() {

    const validationResult = validate();
    if(validationResult) {
      const decryptedText = validationResult.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
      // show decrypted text
      showText(decryptedText);
  
      // clean input text of textarea
      cleanInputText();
    }

    return;
  }

  function showText(ciphertext) {
    outputText.textContent = ciphertext;
  }

  function cleanInputText() {
    textInput.value = '';
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(outputText.textContent);
    } catch (error) {
      prompt('hubo un error al copiar al portapapeles');
    }
  }

  function showElement() {
    //TODO: mostrar elementos HTML
  }

  function hideElement() {
    //TODO: ocultar elementos HTML
  }

  





});