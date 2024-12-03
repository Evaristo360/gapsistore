# TEST GAPSI FROND ENT
## Importante - Crear archivo .env con la información en el directorio principal del proyecto:
REACT_APP_API_URL=https://axesso-walmart-data-service.p.rapidapi.com/wlm/
REACT_APP_API_KEY=fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7

## Pasos para ejecutar en modo Development

Paso 1 Instalar librerias:

### `npm install`

Paso 2 Ejecutar proyecto:

### `npm start`

Se ejecuta el proyecto en modo Development.\
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.



## Pasos para ejecutar en Prod con PM2

Paso 1 Instalar librerias:

### `npm install`

Paso 2 Construir proyecto:
### `npm run build`

Construye el proyecto en la carpeta `build`.\

Paso 3 Crear proceso en pm2:

### `pm2 serve build <PORT> --spa --name <NOMBRE>`

Paso 4 Guardar cambios de los procesos pm2:
### `pm2 save --force`