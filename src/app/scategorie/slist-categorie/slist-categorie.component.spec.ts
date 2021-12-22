import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlistCategorieComponent } from './slist-categorie.component';

describe('SlistCategorieComponent', () => {
  let component: SlistCategorieComponent;
  let fixture: ComponentFixture<SlistCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlistCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlistCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
