import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsdataCardComponent } from './carsdata-card.component';
import { MaterialModule } from '../../modules/material.module';

describe('CarsdataCardComponent', () => {
  let component: CarsdataCardComponent;
  let fixture: ComponentFixture<CarsdataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsdataCardComponent],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(CarsdataCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(component.carCompanyName).toEqual('');
    expect(component.carModel).toEqual('');
    expect(component.carPrice).toEqual('');
    expect(component.carMileage).toBeUndefined(); // or null if it's initially undefined
    expect(component.manufacturingYear).toBeUndefined(); // or null if it's initially undefined
    expect(component.carLocation).toEqual('');
    expect(component.carColor).toEqual('');
  });

  it('should update input properties', () => {
    component.carCompanyName = 'Sample Company';
    component.carModel = 'Sample Model';
    component.carPrice = '10000';
    component.carMileage = 50000;
    component.manufacturingYear = 2020;
    component.carLocation = 'Sample Location';
    component.carColor = 'Blue';

    expect(component.carCompanyName).toEqual('Sample Company');
    expect(component.carModel).toEqual('Sample Model');
    expect(component.carPrice).toEqual('10000');
    expect(component.carMileage).toEqual(50000);
    expect(component.manufacturingYear).toEqual(2020);
    expect(component.carLocation).toEqual('Sample Location');
    expect(component.carColor).toEqual('Blue');
  });
});
