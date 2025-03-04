import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
<section>
<form class="d-flex" (submit)="onSubmit($event, filter.value)">
        <input type="text" placeholder="Filter by programming language" #filter>
        <button class="primary m-4" type="submit">Search</button>
    </form>
</section>
<section class="results">
  <div class="row">
  <div class="col-md-4 p-1" *ngFor="let housingLocation of filteredLocationList">
  <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
  </div>
</div>
</section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList:HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  onSubmit(event: Event, text: string) {
    event.preventDefault();
    this.filterResults(text);
  }

  filterResults(text:string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.stack.toLowerCase().includes(text.toLowerCase())
    );
    
  }
}
