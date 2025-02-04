import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <nav class="d-flex">
      <div class="row g-2" style="width: 100%;">
      <div class="col-sm-6 col-12">
      <h2>Adamkizis.com</h2>
      <h6>Web Development Portfolio</h6>
      </div>
      <div class="col-md-6 col-12">
      <a href="https://adamkizis.myportfolio.com/services" class="btn primary m-1">Pre-media & Print</a>
      <a href="https://adamkizis.com" class="btn primary m-1">adamkizis.com</a>
      <a href="https://aetherbind.com" class="btn primary m-1">Agency</a>
      </div>
      </div>
      </nav>
      </header>
      <section class="content">
      <router-outlet></router-outlet>
      </section>
  </main>
  
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
