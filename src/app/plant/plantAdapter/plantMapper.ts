import Plant from '../plant';
const plantFromJsonMapper = (plantJson: any): Plant => {
  return new Plant(
    plantJson?.id,
    plantJson?.nombre_comun,
    plantJson?.nombre_cientifico,
    plantJson?.tipo,
    plantJson?.altura_maxima,
    plantJson?.clima,
    plantJson?.sustrato_siembra
  );
};

const plantListFromJsonMapper = (plantJson: any[]): Plant[] => {
  return plantJson.map(plant => plantFromJsonMapper(plant))
};

export { plantFromJsonMapper, plantListFromJsonMapper };
