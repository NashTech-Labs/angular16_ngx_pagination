// Import necessary modules and dependencies
import { Component, Input, OnInit } from '@angular/core';

// Define the component using the @Component decorator
@Component({
  selector: 'app-carsdata-card', // Component selector (HTML tag)
  templateUrl: './carsdata-card.component.html', // HTML template file
  styleUrls: ['./carsdata-card.component.scss'], // CSS style file
})
export class CarsdataCardComponent implements OnInit {
  constructor() {
    // This is the component's constructor function.
    // It's called when an instance of this component is created.
  }

  // Define input properties for the component
  // These properties are used to pass data into the component from parent components.
  @Input() carCompanyName: string = ''; // Input property for car company name
  @Input() carModel: string = ''; // Input property for car model
  @Input() carPrice: string = ''; // Input property for car price
  @Input() carMileage!: number; // Input property for car mileage (with '!' for non-null assertion)
  @Input() manufacturingYear!: number; // Input property for car manufacturing year (with '!' for non-null assertion)
  @Input() carLocation: string = ''; // Input property for car location
  @Input() carColor: string = ''; // Input property for car color

  ngOnInit() {
    // This is the ngOnInit function for component initialization.
    // It's called when the component is initialized.
  }
}
