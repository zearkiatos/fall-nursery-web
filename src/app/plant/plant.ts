class Plant {
  id: number;
  commonName: string;
  scienticName: string;
  type: string;
  maximumHeight: number;
  weather: string;
  sowingSubstrate: string;

  constructor(
    id: number,
    commonName: string,
    scienticName: string,
    type: string,
    maximumHeight: number,
    weather: string,
    sowingSubstrate: string
  ) {
    this.id = id;
    this.commonName = commonName;
    this.scienticName = scienticName;
    this.type = type;
    this.maximumHeight = maximumHeight;
    this.weather = weather;
    this.sowingSubstrate = sowingSubstrate;
  }
}

export default Plant;
