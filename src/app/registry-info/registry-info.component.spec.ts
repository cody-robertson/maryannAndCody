import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryInfoComponent } from './registry-info.component';

describe('RegistryInfoComponent', () => {
  let component: RegistryInfoComponent;
  let fixture: ComponentFixture<RegistryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
