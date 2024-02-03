# Challenge 01 - Desencriptador 📝

Reto del Bootcamp Alura ONE - G6 2024
- Desarrollado por **[Walker Alfaro Trelles](http://walkeralfaro.com) - Lima/Perú**

## Reto

Las "llaves" de encriptación que utilizaremos son las siguientes:

- `La letra "e" es convertida para "enter"`
- `La letra "i" es convertida para "imes"`
- `La letra "a" es convertida para "ai"`
- `La letra "o" es convertida para "ober"`
- `La letra "u" es convertida para "ufat"`

**Requisitos:**

- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:

- `"gato" => "gaitober"`
- `gaitober" => "gato"`

- La página debe tener campos para
  inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.

**Extras:**

- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.

## Solución 🚀

### Diseño
Con respecto al diseño, he decidido optar por seguir el lineamiento subido a Figma en lugar de diseñar algo propio, con el fin de simular cumplir las necesidades de una hipotética área de UX/UI.

#### Mobile First
Se hizo el diseño completamente ***responsivo***, siguiendo los requirimientos señalados en Figma de distribución espacial de elementos, tamaños, colores, fuentes y proporciones.

Este enfoque planifica el desarrollo desde las dimensiones móviles, en este proyecto se tuvieron tres tamaños de pantalla:

- small screen: 375x933
- tablet screen: 768x1174
- desktop screen: 1440x1024

### Desarrollo

#### Estructura HTML
Iniciar con la esturctura HTML según la totalidad de elementos que posee el wireframe, considerando su utilidad se definen las títulos (h1, h2, h3, etc.), parrafos, inputs, botones, anchors, etc.

Por eso se recomienda hacer el wireframe básico del diseño para reconocer qué elementos se tienen y como se pueden agrupar para planificar los estilos, ya que debe ser responsive, agrupar los elementos en grupos grid o flexbox es clave.

![structure](https://raw.githubusercontent.com/walkeralfaro/alura-challenge-decryptor/main/screenshots/structure.webp)

![desktop](https://raw.githubusercontent.com/walkeralfaro/alura-challenge-decryptor/main/screenshots/desktop.webp)

![mobile](https://raw.githubusercontent.com/walkeralfaro/alura-challenge-decryptor/main/screenshots/mobile.webp)