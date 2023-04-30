/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantService } from '../plant.service';
import Plant from '../plant';

import { PlantListComponent } from './plant-list.component';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantListComponent],
      imports: [HttpClientModule],
      providers: [ PlantService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    for(let i = 0; i < 3; i++) {
      const plant = new Plant(
        i,
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        parseInt(faker.random.numeric()),
        faker.lorem.word(),
        faker.lorem.sentence()
      );
      component.plants.push(plant);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of plants with 3 rows', () => {
    expect(debug.queryAll(By.css('table.table>tbody>tr'))).toHaveSize(3)
  })
});
