import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import Plant from '../plant';
import { plantListFromJsonMapper } from '../plantAdapter/plantMapper';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  constructor(private plantService: PlantService) {}

  getPlants():void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plantListFromJsonMapper(plants);
    });
  }

  ngOnInit() {
    this.getPlants();
  }
}
