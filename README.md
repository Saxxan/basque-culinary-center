# BASQUE CULINARY CENTER
Desarrollo front-end de la página web Basque Culinary Center

## **Requisitos**
### **Instalación**
Debes clonar el repositorio del proyecto.
### **Contribuir**
Debes crear un pull request al proyecto.

## **Programas utilizados**
El proyecto se ha construido con los siguientes programas:
- Para el desarrollo: 
  - <a href="https://code.visualstudio.com/">Visual Studio Code</a>: editor de código fuente.
  - <a href="https://prepros.io/">Prepos</a>: compilador de archivos.
  
El proyecto está desarrollado con la tecnología PUG.
Pug (anteriormente conocido como Jade) es un motor de plantilla de Node.js. con el que seremos capaces de escribir código HTML de una sintaxis mucho más sencilla, clara y directa, tanto a la hora de escribir como de leer y modificar.

IMPORTANTE. Es necesario un compilador para poder utilizarlo.

## **Nomenclatura**

### **Clases**

La convención de nombre para las clases de los elementos sigue el patrón BEM:

- .bloque{}
- .bloque__elemento{}
- .bloque--modificador{}

'.bloque' representa el primer nivel de una abstracción o componente, es el elemento padre.
'.bloque__elemento' representa un hijo del elemento padre '.bloque'.
'.bloque--modificador' representa un estado diferente de '.bloque'.

### **Etiquetas archivos sass**

Para la localización rápida de archivos sass emplearemos etiquetas en texto comentado, por ejemplo:

/*------------------------------------*\
$FONTS
\*------------------------------------*/

// ont size

### **camelCase en JavaScript**

## **SCSS**

Los archivos scss son los encargados de aportar los estilos necesarios a los elementos html, estos se encuentran organizados en la carpeta sass/.

### **Estructura del repositorio scss/**

*se completará cuado se termine el proyecto

- sass/
  - base/
    - _buttons
    - _card-mobile.scss
    - _checkbox.scss
    - _etiqueta.scss
    ...
  - leyout/
    - _footer.scss
    - _header.scss
  - lib/
    - _functions.scss
    - _mixins.scss
    - _settings.scss
    - _utilities.scss
  - site/
    - _site.scss
  - style.scss

### **Variables**

Las variables que se emplearán en este proyecto se encuentra en el archivo sass/lib/settings.scss. Estas variables globales definen el color, tipografía, espaciados, breakpoints, shadows... en general todo lo que tenga que ver con el diseño UX/UI del proyecto.

#### **Espaciado**

Para el espaciado la unidad base será 6px, de la cual se emplearán sus múltiplos en función del espaciado que necesitemos. 
$space-unit: 6px;

#### **Color**

La paleta de colores a utilizar en este proyecto estará declarada de la siguiente manera.

$c-primary-color

#### **Fuentes**

Spartan: Tipografía principal, que se utilizará para los titulares y el texto corrido.
Garamond: Tipografía secundaria. Solo se hará uso de ella en las fechas de las entradas del blog.

Para controlar el tamaño de la tipografía en resposive se utilizará la propiedad clamp:

font-size: clamp(1.25rem, -0.875rem + 8.333vw, 3rem);

#### **Z-index**
Para los valores de z-index se tienen que utilizar los siguientes:

$z-layers: (
  "z-top":           1,
  "z-default":       0,
  "z-below":        -1
);


### **Recursos multimedia**

Los recursos multimedia a emplear en el documento web, se guardarán en la carpeta src/. Existen dos subcarpetas, una para los iconos src/iconos y otra para las imágenes src/images. Las imágenes deben estar optimizadas y no deben superar el tamaño de 2MB.


## **Templates**

Las maquetas finales se pueden encontrar en la siguiente carpeta templates/.

## **Componentes**

Los componentes se pueden encontrar en la siguiente carpeta components/.
