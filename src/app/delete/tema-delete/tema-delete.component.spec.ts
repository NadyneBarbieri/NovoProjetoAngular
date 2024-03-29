import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaDeleteComponent } from './tema-delete.component';

describe('TemaDeleteComponent', () => {
  let component: TemaDeleteComponent;
  let fixture: ComponentFixture<TemaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
