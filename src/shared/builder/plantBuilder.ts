import BaseBuilder from './baseBuilder';

class PlantBuilder extends BaseBuilder {
  id: number;
  commonName: string;
  scienticName: string;
  type: string;
  maximumHeight: number;
  weather: string;
  sowingSubstrate: string;
  constructor() {
    super();
    this.id = 1;
    this.commonName = 'Lengua de vaca';
    this.scienticName = 'Sansevieria Trifasciata';
    this.type = 'Interior';
    this.maximumHeight = 140;
    this.weather = 'Templado, cálido';
    this.sowingSubstrate =
      'Tierra orgánica con buen drenaje, arena, cascarilla de arroz';
  }

  withId(id: number): any {
    this.id = id;
    return this;
  }

  withCommonName(commonName: string): any {
    this.commonName = commonName;
    return this;
  }

  withScienticName(scienticName: string): any {
    this.scienticName = scienticName;
    return this;
  }

  withType(type: string): any {
    this.type = type;
    return this;
  }

  withMaximumHeight(maximumHeight: number): any {
    this.maximumHeight = maximumHeight;
    return this;
  }

  withWeather(weather: string): any {
    this.weather = weather;
    return this;
  }

  withSowingSubstrate(sowingSubstrate: string): any {
    this.sowingSubstrate = sowingSubstrate;
    return this;
  }
}

export default PlantBuilder;
