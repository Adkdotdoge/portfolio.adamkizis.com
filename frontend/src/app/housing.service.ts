import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private locations: HousingLocation[] = [
  
      {
        "id": 0,
        "name": "lanesboroprint.com",
        "city": "Lanesborough",
        "state": "MA",
        "photo": "../assets/lanesboroprint.png",
        "availableUnits": 4,
        "wifi": true,
        "laundry": true,
        "url": "https://lanesboroprint.com",
        "info": "Printshop web application to calculate costs, submit orders and upload documents for printing in my home lab/small business.",
        "stack": "PHP and MySQL on a LAMP stack."
      },
      {
        "id": 1,
        "name": "ANGULAR DEMO",
        "city": "N/A",
        "state": "N/A",
        "photo": "https://adamkizis.com/assets/img/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://angular-homes-project-107b850a057194833ce2de9384ccbd88b83dbc0c.vercel.app",
        "info": "Homes Applications from Google's Angular Tutorial.",
        "stack": "Angular, TypeScript, Firebase."
      },
      {
        "id": 2,
        "name": "DJYoungChamp.com",
        "city": "Berkshires",
        "state": "MA",
        "photo": "../assets/djyoungchamp.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://djyoungchamp.com",
        "info": "Talented DJ in the Berkshires needed a website to easily share pricing, schedules, and a way to reach him for bookings.",
        "stack": "Static Build with JSON-powered event management."
      },
      {
        "id": 3,
        "name": "charliesbistrobus.com",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/charlies.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://charliesbistrobus.com",
        "info": "Food Truck Business website with ordering and location features.",
        "stack": "Laravel, PHP, MySQL, Google Places API, Google Maps API."
      },
      {
        "id": 4,
        "name": "LeftBankTheFilm.com",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/leftbank.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://leftbankthefilm.com",
        "info": "New website for the hybrid-documentary by Lisa Reznik.",
        "stack": "Custom HTML, CSS, JavaScript."
      },
      {
        "id": 5,
        "name": "DOGEPOS",
        "city": "N/A",
        "state": "N/A",
        "photo": "https://adamkizis.com/assets/img/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://www.dogegarden.adamkizis.com",
        "info": "Admin portal/POS using Dogecoin Core CLI and a database to generate and track orders in Dogecoin.",
        "stack": "Node.js, Dogecoin Core API, MySQL."
      },
      {
        "id": 6,
        "name": "MuchFin.COM",
        "city": "N/A",
        "state": "N/A",
        "photo": "https://adamkizis.com/assets/img/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://muchfin.com",
        "info": "The Only Chores App powered by Dogecoin. Allows task and reward management using Dogecoin API.",
        "stack": "PHP, MySQL, Dogecoin API, Secure Authentication."
      },
      {
        "id": 7,
        "name": "MakerSupplyMA.com",
        "city": "N/A",
        "state": "N/A",
        "photo": "https://adamkizis.com/assets/img/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://makersupplyma.com",
        "info": "Small Business Retail site supporting homesteading.",
        "stack": "WooCommerce, WordPress."
      },
      {
        "id": 8,
        "name": "ERWINNY.ORG",
        "city": "Erwin",
        "state": "NY",
        "photo": "../assets/erwinny.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://www.erwinny.org",
        "info": "Official website for the Town of Erwin. An early project using custom PHP framework, JavaScript, and jQuery.",
        "stack": "Custom-built with PHP"
      },
      {
        "id": 9,
        "name": "aetherbind.com",
        "city": "N/A",
        "state": "N/A",
        "photo": "https://adamkizis.com/assets/img/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://aetherbind.com",
        "info": "Aetherbind's company website showcasing services and projects.",
        "stack": "Laravel, PHP, TailwindCSS."
      },
      {
        "id": 10,
        "name": "MakerSupply.com - Alchemy Kits",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/makersupply-kits.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://makersupplyma.com/alchemykits/",
        "info": "New Product Spotlight page for Maker Supply kits",
        "stack": "Bootstrap 5.3, animated SVGs and custom photos, PHP"
      },
      {
        "id": 11,
        "name": "J-E-L Construction inc",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/jelconstruction.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://jelconstructioninc.com",
        "info": "Website for local construction company",
        "stack": "Bootstrap 5.3 CSS, javascript, PHP"
      },      {
        "id": 12,
        "name": "Fraternite Impact Producers",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/fraterniteimpactproducers.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://fraterniteimpactproducers.com",
        "info": "Fraternité Impact Producers strives to create entertainment that drives positive social impact. As producers, directors, researchers, and social innovators, we leverage data-driven creativity to seamlessly blend marketability with purpose in film and video projects of all sizes.",
        "stack": "Bootstrap 5.3 CSS, javascript"
      },      {
        "id": 13,
        "name": "TayarGuide",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://travelsocial.aetherbind.com",
        "info": "TAYAR Guide, developed in Western Massachusetts, will connect 14.7 million Jewish travelers worldwide.  Our mission is to connect Jewish travelers through authentic, community-driven experiences while ensuring every journey is safe, meaningful, and culturally enriching.",
        "stack": "Bootstrap 5.3 CSS, javascript, php laravel, tailwind, alpine, livewire, mysql"
      },      {
        "id": 14,
        "name": "OFFMAIN.io",
        "city": "N/A",
        "state": "N/A",
        "photo": "../assets/Why-You-Should-Switch-to-Code-Based-Design-1024x512.png",
        "availableUnits": 0,
        "wifi": false,
        "laundry": false,
        "url": "https://offmain.io",
        "info": "Offmain is a small business directory, curated by the smb owner - allowing them a free resource to share all of their links and information in once place and gain visability",
        "stack": "php laravel, tailwind, alpine, livewire, mysql"
      }
    

  ];

  constructor() { }

  // ✅ Return the static data directly
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    return Promise.resolve(this.locations);
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    return Promise.resolve(this.locations.find(location => location.id === id));
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted: ${firstName} ${lastName}, Email: ${email}`);
  }
}
