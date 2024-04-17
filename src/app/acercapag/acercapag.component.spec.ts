import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercapagComponent } from './acercapag.component';

describe('AcercapagComponent', () => {
  let component: AcercapagComponent;
  let fixture: ComponentFixture<AcercapagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercapagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcercapagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
