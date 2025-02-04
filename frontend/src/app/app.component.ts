import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>

    <header class="brand-name m-0 p-0">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3>Adam Kizis</h3>
    <h6>Web Development Portfolio</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a href="https://adamkizis.myportfolio.com/services" class="nav-link btn primary m-1">Pre-media & Print</a>
      <a href="https://adamkizis.com" class="nav-link btn primary m-1">adamkizis.com</a>
      <a href="https://aetherbind.com" class="nav-link btn primary m-1">Agency</a>
      </div>
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
