import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemDeleteComponent } from './postagem-delete.component';

describe('PostagemDeleteComponent', () => {
  let component: PostagemDeleteComponent;
  let fixture: ComponentFixture<PostagemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostagemDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostagemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
