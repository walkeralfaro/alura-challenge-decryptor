document.addEventListener('DOMContentLoaded', function() {

  // interface elements
  const textInput = document.querySelector('#text_input');
  const formInput = document.querySelector('#form_input');
  const btnEncrypt = document.querySelector('#btn_encrypt');
  const btnDecrypt = document.querySelector('#btn_decrypt');
  const btnCopyText= document.querySelector('#btn_copy');
  const outputText = document.querySelector('#output_text');

  // events
  textInput.addEventListener('input', validate);
  btnEncrypt.addEventListener('click', encrypting);
  btnDecrypt.addEventListener('click', decrypting);



  function validate(e) {
    const textToValidate = e.target.value;
    const pattern = /^[a-z\s]+$/;
    const patternValidation = pattern.test(textToValidate);

    if( (textToValidate.trim() == '') || !patternValidation ) {
      // no habilitar botones de encriptación ni encriptar nada
      console.log('no se puede encriptar');
    } else {
      // habilitar botones de encriptación y la opción de encriptar
      console.log('si se puede encriptar');
    }

  }

  function encrypting(text) {
    const textArray = [...text];
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
    const encryptedText = textArray.join('')
    return encryptedText;
  }

  function decrypting(text) {
    const decryptedText = text.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
    return decryptedText;
  }






});