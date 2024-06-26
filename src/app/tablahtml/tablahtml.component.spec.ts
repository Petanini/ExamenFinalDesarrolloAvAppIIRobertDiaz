import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablahtmlComponent } from './tablahtml.component';

describe('TablahtmlComponent', () => {
  let component: TablahtmlComponent;
  let fixture: ComponentFixture<TablahtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablahtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablahtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
