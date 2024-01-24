document.addEventListener('DOMContentLoaded', function() {

  // interface elements
  const textInput = document.querySelector('#text_input');
  const formInput = document.querySelector('#form_input');
  const btnEncrypt = document.querySelector('#btn_encrypt');
  const btnDecrypt = document.querySelector('#btn_decrypt');
  const btnCopyText= document.querySelector('#copy_text');

  // events
  textInput.addEventListener('input', validar);
  btnEncrypt.addEventListener('click', encrypting);
  btnDecrypt.addEventListener('click', decrypting);



  function validar() {
    console.log('validando');
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