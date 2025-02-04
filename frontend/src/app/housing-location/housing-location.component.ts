import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<section class="listing border">
    <img class="listing-photo rounded-top-5 border" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">
    {{housingLocation.name}}
    </h2>
    <small class="listing-sub">{{housingLocation.url}}</small>
    <p class="listing-location">{{housingLocation.info}}</p>
    <div class="d-flex">
    <a [routerLink]="['/details', housingLocation.id]">more info</a>
    <a class="primary" href="{{housingLocation.url}}"target="_blank">Visit Site</a>
    </div>
</section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
