import BaseBuilder from './baseBuilder';

class PlantFromJsonBuilder extends BaseBuilder {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;
  constructor() {
    super();
    this.id = 1;
    this.nombre_comun = 'Lengua de vaca';
    this.nombre_cientifico = 'Sansevieria Trifasciata';
    this.tipo = 'Interior';
    this.altura_maxima = 140;
    this.clima = 'Templado, cálido';
    this.sustrato_siembra =
      'Tierra orgánica con buen drenaje, arena, cascarilla de arroz';
  }

  withId(id: number): any {
    this.id = id;
    return this;
  }

  withNombreComun(nombre_comun: string): any {
    this.nombre_comun = nombre_comun;
    return this;
  }

  withNombreCientifico(nombre_cientifico: string): any {
    this.nombre_cientifico = nombre_cientifico;
    return this;
  }

  withTipo(tipo: string): any {
    this.tipo = tipo;
    return this;
  }

  withAlturaMaxima(altura_maxima: number): any {
    this.altura_maxima = altura_maxima;
    return this;
  }

  withClima(clima: string): any {
    this.clima = clima;
    return this;
  }

  withSustratoSiembra(sustrato_siembra: string): any {
    this.sustrato_siembra = sustrato_siembra;
    return this;
  }
}

export default PlantFromJsonBuilder;
