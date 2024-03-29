import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPostagensComponent } from './minhas-postagens.component';

describe('MinhasPostagensComponent', () => {
  let component: MinhasPostagensComponent;
  let fixture: ComponentFixture<MinhasPostagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasPostagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinhasPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
