class Plant {
  id: number;
  commonName: string;
  scienticName: string;
  type: string;
  maximumHeigh: number;
  weather: string;
  sowingSubstrate: string;

  constructor(
    id: number,
    commonName: string,
    scienticName: string,
    type: string,
    maximumHeigh: number,
    weather: string,
    sowingSubstrate: string
  ) {
    this.id = id;
    this.commonName = commonName;
    this.scienticName = scienticName;
    this.type = type;
    this.maximumHeigh = maximumHeigh;
    this.weather = weather;
    this.sowingSubstrate = sowingSubstrate;
  }
}

export default Plant;
