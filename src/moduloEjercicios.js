import basededatos from './basededatos.js';

// constants
const {
  calificaciones,
  criticos,
  directores,
  peliculas,
} = basededatos;
console.log({ peliculas });

/**
* Devuelve el promedio de anios de estreno de todas las peliculas de la base de datos.
*/
export const promedioAnioEstreno = () => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  const sumaAnio = peliculas.reduce((acumulador, valorActual) => acumulador + valorActual.anio, 0);
  const resultado = sumaAnio / peliculas.length;

  return resultado;
};

/**
* Devuelve la lista de peliculas con promedio de critica mayor al numero que llega
* por parametro.
* @param {number} promedio
  */
export const pelicuasConCriticaPromedioMayorA = (promedio) => {
  const resultado = peliculas.filter((pelicula) => {
    let cantidad = 0;
    let sumaPuntuacion = 0;

    for (const calificacion of calificaciones) {
      if (pelicula.id === calificacion.pelicula) {
        sumaPuntuacion += calificacion.puntuacion;
        cantidad++;
      }
    }

    const promedioPuntuacion = sumaPuntuacion / cantidad;
    console.log(promedioPuntuacion);
    const promedioValido = promedioPuntuacion > promedio

    return promedioValido;
  });

  return resultado;
};

/**
* Devuelve la lista de peliculas de un director
* @param {string} nombreDirector
*/
export const peliculasDeUnDirector = (nombreDirector) => {
  const datosDirector = directores.find(director => director.nombre === nombreDirector);
  const resultado = peliculas.filter(pelicula => pelicula.directores.includes(datosDirector.id));

  return resultado;
};

/**
* Devuelve el promdedio de critica segun el id de la pelicula.
* @param {number} peliculaId
*/
export const promedioDeCriticaBypeliculaId = (peliculaId) => {
  let cantidad = 0;
  let sumaPuntuacion = 0;

  for (const calificacion of calificaciones) {
    if (peliculaId === calificacion.pelicula) {
      sumaPuntuacion += calificacion.puntuacion;
      cantidad++;
    }
  }

  const resultado = sumaPuntuacion / cantidad;

  return resultado;
};

/**
 * Obtiene la lista de peliculas con alguna critica con
 * puntuacion excelente (critica >= 9).
 * En caso de no existir el criticas que cumplan, devolver un array vacio [].
 * Ejemplo del formato del resultado: array peliculas
 */
export const obtenerPeliculasConPuntuacionExcelente = () => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  const promedio = 9;
  const resultado = peliculas.filter((pelicula) => {
    let cantidad = 0;
    let sumaPuntuacion = 0;

    for (const calificacion of calificaciones) {
      if (pelicula.id === calificacion.pelicula) {
        sumaPuntuacion += calificacion.puntuacion;
        cantidad++;
      }
    }

    const promedioPuntuacion = sumaPuntuacion / cantidad;
    console.log(promedioPuntuacion);
    const promedioValido = promedioPuntuacion >= promedio

    return promedioValido;
  });

  return resultado;
};

/**
 * Devuelve informacion ampliada sobre una pelicula.
 * Si no existe la pelicula con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto pelicula,
 * agregar la lista de criticas recibidas, junto con los datos del critico y su pais.
 * Tambien agrega informacion de los directores y generos a los que pertenece.
 * Ejemplo de formato del resultado para 'Indiana Jones y los cazadores del arca perdida':
 * {
            id: 3,
            nombre: 'Indiana Jones y los cazadores del arca perdida',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Camboya'
            },
            directores: [
                { id: 5, nombre: 'Steven Spielberg' },
                { id: 6, nombre: 'George Lucas' },
            ],
            generos: [
                { id: 2, nombre: 'Accion' },
                { id: 6, nombre: 'Aventura' },
            ],
            criticas: [
                { critico: 
                    { 
                        id: 3, 
                        nombre: 'Suzana Mendez',
                        edad: 33,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 5 
                },
                { critico: 
                    { 
                        id: 2, 
                        nombre: 'Alina Robles',
                        edad: 21,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 7
                },
            ]
        },
 * @param {string} nombrePelicula
 */
export const expandirInformacionPelicula = (nombrePelicula) => {
  return {};
};
