<div align="center">
<img src="https://comunicacioninstitucional.uabc.mx/sites/default/files/inline-images/escudo-actualizado-2022.png" alt="UABC" width="200"/>

 <h1>Sistema de Gestión de Información Psicopedagógica</h1>
</div>

Servicio Social Profesional

Esta pagina web fue creada con SvelteKit. Creedenciales para probar aplicación:

- Usuario: test
- Contraseña: 12345678

[GitHub Repo](https://github.com/servicio-profesional-uabc/sigep-ads)

## Correr utilizando Docker (recomendado)

La mejor forma de correr la aplicación es utilizando docker, ya que todo se mantiene dentro de un contenedor y no se cambia la información del sistema operativo host. [Documentación de Docker.com](https://docs.docker.com/get-started/)

### Inicializar aplicación

```bash
cd docker
docker compose up -d
```

La pagina web se encontrara en [localhost:3000](http://localhost:3000)

### Detener

```bash
docker compose down
```

### Eliminar archivos

```bash
docker compose down -v --rmi all --remove-orphans
```

## Correr localmente

Para poder poder correrla de manera nativa, se necesita tener instalado Node.js y pnpm. (Probada en Linux y WSL2!!!)

### Instalar dependencias

En caso de no tener instalado Node.js, se puede instalar desde [aqui](https://nodejs.org/en/download/)

Instalar pnpm

```bash
npm install -g pnpm
```

Instalar las dependencias del proyecto

```bash
pnpm install
```

Inicializar base de datos

```bash
cd docker
docker compose up pocketbase
```

En una nueva terminal, iniciar aplicación

```bash
pnpm preview
```

## Contenedor de desarrollo

Este repositorio incluye un contenedor de desarrollo de Visual Studio Code Dev Containers/GitHub Codespaces.

- Para [Contenedores de desarrollo](https://aka.ms/vscode-remote/download/containers), utilice el comando **Contenedores de desarrollo: clonar repositorio en volumen de contenedor...** que crea un volumen Docker para mejorar la E/S del disco en macOS y Windows.

  - Si ya tiene VS Code y Docker instalados, también puede hacer clic [aquí](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/vscode) para comenzar. Esto hará que VS Code instale automáticamente la extensión Dev Containers si es necesario, clone el código fuente en un volumen de contenedor y active un contenedor de desarrollo para su uso.

- Para Codespaces, instale la extensión [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) en VS Code y use el comando **Codespaces: Crear nuevo Codespace**.

Revisar [CONTRIBUTING.md](CONTRIBUTING.md) para más información.

## Licencia

Copyright (c) 2023 servicio-profesional-uabc. Todos los derechos reservados.

Licensiado bajo la licencia [MIT](LICENSE).
