/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantService],
      imports: [HttpClientModule],
    });
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
