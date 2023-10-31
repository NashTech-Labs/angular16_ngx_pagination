import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../models/cars-details.model'; // Importing the CarDetails model
import { CarsDataService } from '../services/cars-data.service'; // Importing the CarsDataService service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // HTML template associated with this component
  styleUrls: ['./home.component.scss'], // Styles for this component
})
export class HomeComponent implements OnInit {
  constructor(private carsDataService: CarsDataService) {} // Constructor for the HomeComponent that injects the CarsDataService

  // Initialize component properties
  page: number = 1; // Current page number for pagination
  count: number = 0; // Total count of data
  tableSize: number = 10; // Number of items to display per page
  carModelDetails: CarDetails[] = []; // Array to store car model details

  ngOnInit(): void {
    // Lifecycle hook: This code runs when the component is initialized
    this.getCarModels(); // Call the function to retrieve car model details
  }

  // Private function to fetch car model details from the service
  private getCarModels() {
    this.carsDataService.getCarModels().subscribe((carDetails) => {
      // Subscribe to an observable to get car model details and update the component property
      this.carModelDetails = carDetails; // Assign the retrieved data to the carModelDetails property
    });
  }

  // Function to handle table data change, typically related to pagination
  onTableDataChange(event: any) {
    this.page = event; // Update the current page when the table data changes
    this.getCarModels(); // Fetch car model details for the updated page
  }
}
