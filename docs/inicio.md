---
sidebar_position: 1
title: Inicio
---

## Configuración
Para configurar el entorno de desarrollo de Android y trabajar en el proyecto de la aplicación
[Virtual Observer](https://play.google.com/store/apps/details?id=app.shellcatch.vesselmobile)
se configuró las siguientes herramientas en Windows 10.

### Instalar NodeJS
Se instaló [NodeJS](https://nodejs.org/es/) que ya viene con [npm](https://www.npmjs.com/)
por defecto en la instalación en Windows 10, luego, para comprobar que se instalaron correctamente
se pueden usar los siguientes comandos:

Verificar la versión de NodeJS
```bash
node -v
```

Verificar la versión de npm
```bash
npm -v
```

### Instalar Android Studio
Se descarga e instala [ Android Studio](https://developer.android.com/studio) en conjunto con otros
complementos necesarios. Para instalarlos debemos seguir los siguientes pasos:
- Abrir el SDK Manager
- Ingresar a Appearance & Behavior > System Settings > Android SDK
- Seleccionar la pestaña de SDK Tools
- Se instalan los complementos necesarios:
  + Android SDK
  + SDK Platform-Tools
  + Android Emulator

### Configurar variables de entorno
React Native requiere de la configuración de algunas variables de entorno para crear aplicaciones de
código nativo, para esto, seguimos los siguientes pasos:
- Ingresar al panel de control
- En el buscador escribir variables de entorno
- Seleccionar editar las variables de entorno del sistema
- Ingresar a variables de entorno
- Crear una variable en variables del sistema
  + Asignar nombre: `ANDROID_HOME`
  + Asignar valor: `C:\Users\<user>\AppData\Local\Android\Sdk`
- Ingresar a la variable path de variables del sistema
- Insertar las siguientes variables de entorno:
  + `%ANDROID_HOME%\emulator`
  + `%ANDROID_HOME%\tools`
  + `%ANDROID_HOME%\tools\bin`
  + `%ANDROID_HOME%\platform-tools`

### Instalar React Native
Para ejecutar este paso debemos tener instalado en nuestro sistema NodeJS y npm. Ahora podemos proceder a
instalar la dependencia de manera global para [React Native CLI](https://reactnative.dev/docs/environment-setup),
que es la que utilizamos para gestionar el proyecto.
```bash
npm install -g react-native-cli
```

## Instalación
Luego de instalar las herramientas necesarias y configurar las variables de entorno,
se siguieron los siguientes pasos:

### Clonar el repositorio
Mediante HTTPS
```bash
git clone https://github.com/<company>/<repo>.git
```

Utilizando SSH
```bash
git clone git@github.com:<company>/<repo>.git
```

Con GitHub CLI
```bash
gh repo clone <company>/<repo>
```

### Instalar las dependencias
Ingresar a la carpeta del proyecto
```bash
cd <app-name> 
```

Instalar las dependencias
```bash
npm install
```

### Limpiar y actualizar el gradle
```bash
npm run android-clean
```

### Ejecutar la aplicación
Primero iniciamos [Metro Bundler](https://facebook.github.io/metro/docs/concepts/), que va a ser el
encargado de preparar nuestro JavaScript y enviarlo, ya sea Android o iOS, mientras estamos desarrollando.
```bash
npm start
```
Abrimos una nueva terminal dentro de la carpeta del proyecto y ejecutamos el siguiente comando, que va a 
compilar la parte nativa del proyecto y a preparar toda la aplicación.
```bash
npm run android
```

Si todo está configurado correctamente, deberíamos ver la aplicación ejecutándose en el dispositivo
físico o virtual en breve.