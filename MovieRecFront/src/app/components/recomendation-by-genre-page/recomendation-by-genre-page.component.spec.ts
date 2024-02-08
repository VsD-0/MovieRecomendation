import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationByGenrePageComponent } from './recomendation-by-genre-page.component';

describe('RecomendationByGenrePageComponent', () => {
  let component: RecomendationByGenrePageComponent;
  let fixture: ComponentFixture<RecomendationByGenrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendationByGenrePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomendationByGenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
