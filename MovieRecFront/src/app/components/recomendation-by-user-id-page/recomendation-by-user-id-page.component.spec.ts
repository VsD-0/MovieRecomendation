import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationByUserIdPageComponent } from './recomendation-by-user-id-page.component';

describe('RecomendationByUserIdPageComponent', () => {
  let component: RecomendationByUserIdPageComponent;
  let fixture: ComponentFixture<RecomendationByUserIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendationByUserIdPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomendationByUserIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
