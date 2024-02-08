import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10PageComponent } from './top10-page.component';

describe('Top10PageComponent', () => {
  let component: Top10PageComponent;
  let fixture: ComponentFixture<Top10PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top10PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
