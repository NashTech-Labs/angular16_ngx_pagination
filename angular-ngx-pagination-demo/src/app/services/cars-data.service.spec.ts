import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CarsDataService } from './cars-data.service';
import { CarDetails } from '../models/cars-details.model';
import { HttpClientModule } from '@angular/common/http';

describe('CarsDataService', () => {
  let service: CarsDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [CarsDataService],
    });

    // Inject the service and test controller for HTTP testing
    service = TestBed.inject(CarsDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch car models data from JSON file', () => {
    const mockCarData: CarDetails[] = [
      {
        carId: 1,
        brand: 'Chevrolet',
        model: 'Express 3500',
        year: 1998,
        color: 'Fuscia',
        mileage: 24,
        price: '$7.68',
        location: 'Shanghu',
      },
      {
        carId: 2,
        brand: 'Chevrolet',
        model: 'Corvette',
        year: 1978,
        color: 'Mauv',
        mileage: 21,
        price: '$9.61',
        location: 'Sarankhola',
      },
    ];

    service.getCarModels().subscribe((data) => {
      expect(data).toEqual(mockCarData);
    });

    const req = httpTestingController.expectOne('assets/cardata.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockCarData);

    httpTestingController.verify();
  });

  afterEach(() => {
    // After each test, make sure there are no outstanding requests
    httpTestingController.verify();
  });
});
