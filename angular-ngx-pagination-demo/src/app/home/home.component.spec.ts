import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CarsDataService } from '../services/cars-data.service';
import { of } from 'rxjs';
import { CarDetails } from '../models/cars-details.model';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarsdataCardComponent } from './carsdata-card/carsdata-card.component';
import { MaterialModule } from '../modules/material.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carsDataService: jasmine.SpyObj<CarsDataService>;

  beforeEach(() => {
    const carsDataServiceSpy = jasmine.createSpyObj('CarsDataService', [
      'getCarModels',
    ]);

    TestBed.configureTestingModule({
      declarations: [HomeComponent, CarsdataCardComponent],
      providers: [{ provide: CarsDataService, useValue: carsDataServiceSpy }],
      imports: [
        HttpClientModule, // Add HttpClientModule to the imports
        NgxPaginationModule,
        MaterialModule,
      ],
    });

    carsDataService = TestBed.inject(
      CarsDataService,
    ) as jasmine.SpyObj<CarsDataService>;
    carsDataService.getCarModels.and.returnValue(of([]));

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCarModels on initialization', () => {
    fixture.detectChanges();
    expect(carsDataService.getCarModels).toHaveBeenCalled();
  });

  it('should update carModelDetails on successful getCarModels', () => {
    const carModels: CarDetails[] = [
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
    carsDataService.getCarModels.and.returnValue(of(carModels));

    fixture.detectChanges();
    expect(component.carModelDetails).toEqual(carModels);
  });

  it('should update page and call getCarModels on onTableDataChange', () => {
    const newPage = 2;

    component.onTableDataChange(newPage);

    expect(component.page).toEqual(newPage);
    expect(carsDataService.getCarModels).toHaveBeenCalled();
  });
});
