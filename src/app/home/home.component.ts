import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly baseUrl = 'https://picsum.photos/';

  housingLocationList: Housinglocation[] = [
    {
      id: 1,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'Test Home 2',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/200/300`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
  ];
}
