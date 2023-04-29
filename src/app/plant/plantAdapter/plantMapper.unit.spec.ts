import Plant from '../plant';
import PlantFromJsonBuilder from 'src/shared/builder/plantFromJsonBuilder';
import PlantBuilder from 'src/shared/builder/plantBuilder';
import { plantFromJsonMapper, plantListFromJsonMapper } from './plantMapper';

describe('Should mapped a plant class', () => {
  it('Should mapper a plant from Json', () => {
    const plantFromJsonMock: any = new PlantFromJsonBuilder().build();
    const plantExpected: Plant = new PlantBuilder().build<Plant>();

    console.log('plantExpected', plantExpected);

    const plant: Plant = plantFromJsonMapper(plantFromJsonMock);

    expect(plant instanceof Plant).toBeTruthy();
    expect(plant.id).toBe(plantExpected.id);
    expect(plant.commonName).toBe(plantExpected.commonName);
    expect(plant.maximumHeight).toBe(plantExpected.maximumHeight);
    expect(plant.scienticName).toBe(plantExpected.scienticName);
    expect(plant.sowingSubstrate).toBe(plantExpected.sowingSubstrate);
    expect(plant.type).toBe(plantExpected.type);
    expect(plant.weather).toBe(plantExpected.weather);
  });

  it('Should mapper a plants list from Json', () => {
    const plantFromJsonMock: any[] = [
      new PlantFromJsonBuilder().build(),
      new PlantFromJsonBuilder()
        .withId(2)
        .withNombreComun('Chachafruto')
        .withNombreCientifico('Schefflera actinophylla')
        .withTipo('Exterior')
        .withAlturaMaxima(1000)
        .withClima('Todos')
        .withSustratoSiembra('Sustrato para huerto')
        .build(),
    ];
    const plantExpected: Plant[] = [
      new PlantBuilder().build<Plant>(),
      new PlantBuilder()
        .withId(2)
        .withCommonName('Chachafruto')
        .withScienticName('Schefflera actinophylla')
        .withType('Exterior')
        .withMaximumHeight(1000)
        .withWeather('Todos')
        .withSowingSubstrate('Sustrato para huerto')
        .build(),
    ];


    const plant: Plant[] = plantListFromJsonMapper(plantFromJsonMock);

    expect(plant[0] instanceof Plant).toBeTruthy();
    expect(plant[0].id).toBe(plantExpected[0].id);
    expect(plant[0].commonName).toBe(plantExpected[0].commonName);
    expect(plant[0].maximumHeight).toBe(plantExpected[0].maximumHeight);
    expect(plant[0].scienticName).toBe(plantExpected[0].scienticName);
    expect(plant[0].sowingSubstrate).toBe(plantExpected[0].sowingSubstrate);
    expect(plant[0].type).toBe(plantExpected[0].type);
    expect(plant[0].weather).toBe(plantExpected[0].weather);
    expect(plant[1] instanceof Plant).toBeTruthy();
    expect(plant[1].id).toBe(plantExpected[1].id);
    expect(plant[1].commonName).toBe(plantExpected[1].commonName);
    expect(plant[1].maximumHeight).toBe(plantExpected[1].maximumHeight);
    expect(plant[1].scienticName).toBe(plantExpected[1].scienticName);
    expect(plant[1].sowingSubstrate).toBe(plantExpected[1].sowingSubstrate);
    expect(plant[1].type).toBe(plantExpected[1].type);
    expect(plant[1].weather).toBe(plantExpected[1].weather);
  });
});
