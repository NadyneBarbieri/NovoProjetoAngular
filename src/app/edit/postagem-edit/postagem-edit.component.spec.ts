import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemEditComponent } from './postagem-edit.component';

describe('PostagemEditComponent', () => {
  let component: PostagemEditComponent;
  let fixture: ComponentFixture<PostagemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostagemEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostagemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
