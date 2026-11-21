# sirMario97.github.io

Página personal de Mario Muro. Está hecha con Jekyll y GitHub Pages la compila sola al hacer push a `main`.

## Cómo actualizar el contenido

Todo el contenido vive en `_data/`. Al editar esos archivos cambian al mismo tiempo la página, `llms.txt`, `llms-full.txt` y `profile.json`.

| Archivo | Qué contiene |
|---|---|
| `_data/profile.yml` | Nombre, puesto, resumen, widgets del hero (años, trayectoria y alcance), datos rápidos, idiomas, forma de trabajo y enlaces |
| `_data/experience.yml` | Empleos, del más reciente al más antiguo |
| `_data/projects.yml` | Proyectos |
| `_data/stack.yml` | Tecnologías agrupadas por época |
| `_data/education.yml` | Título y reconocimientos |

Cada texto tiene una versión `en` y otra `es`. Si un valor lleva comas, va entre comillas.

Para agregar un empleo se copia un bloque de `experience.yml` y se pone al inicio. El que lleva `current: true` muestra la etiqueta roja de puesto actual, y el campo `stat` es la cifra que se resalta a la derecha.

Los años de experiencia y de liderazgo se calculan solos a partir de `since` en `profile.yml`.

La foto está desactivada. Para mostrarla se quita el signo de numeral de la línea `photo` en `profile.yml`.

## Estructura

- `_layouts/default.html` y `_includes/` tienen el HTML de cada sección.
- `assets/css/main.css` tiene todos los estilos, incluida la hoja de impresión que convierte la página en un CV de dos páginas.
- `assets/js/main.js` maneja el cambio de idioma, el tema y el botón de imprimir. La página funciona sin JavaScript.
- `assets/fonts/` tiene las tres fuentes (Doto, Geist y Geist Mono), todas con licencia OFL.
- `llms.txt`, `llms-full.txt` y `profile.json` son las versiones para agentes de IA.

## Verla en local

Hace falta Ruby con Bundler.

```
bundle install
bundle exec jekyll serve
```

Después se abre http://localhost:4000

## Estilo

El diseño toma el lenguaje visual de Nothing. Usa superficies en blanco y negro, una fuente de matriz de puntos para el nombre y las cifras, etiquetas en mayúsculas con fuente monoespaciada y el rojo reservado para dos cosas, que son las cifras que importan y lo que está vigente hoy. El color de acento se cambia en una sola línea de `main.css`, en la variable `--accent`. No usa la marca ni las fuentes de Nothing.

## Carpeta `_legacy`

Guarda el sitio anterior (plantilla Agency con Bootstrap y jQuery). Jekyll no la publica y Git la ignora. Se puede borrar cuando el sitio nuevo esté en línea.
