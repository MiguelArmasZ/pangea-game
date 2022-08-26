# PangeaGame

Una aplicación para aprender geografía jugando.

## Stack

- El framework de React, Next.JS
- Para los estilos usa CSS Modules
- TypeScript
- Para el manejo del estado global se uso el Context API

### Otras dependencias

- Canvas confetti (para el efecto de confetti en la sección de resultados)
- El estilo standard para la configuración de eslint

## Correr localmente

1.  Clonar el repositorio
2.  Instalar las dependencias con tu gestor de paquetes
3.  Ejecutar el comando `npm run dev` para levantar el servidor de desarrollo.
4.  Para crear el build de producción ejecutar `npm run build`
5.  Para levantar el servidor de producción ejecutar `npm start`

## Despliegue

Para desplegar este proyecto se usó el servicio de netlify.

Puedes acceder al proyecto ya en producción aquí 👉
[PangeaGame](https://pangeagame.net/)

## Enfoque de desarrollo

Cada sección del juego es una ruta protegida, para que el usuario no pueda acceder si previamente no hay una configuración del juego establecida.

Se utilizó el _Context API_ para el manejo del estado glbal.
