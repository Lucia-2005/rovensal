import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastanyeraCards } from './castanyera-cards';

describe('CastanyeraCards', () => {
  let component: CastanyeraCards;
  let fixture: ComponentFixture<CastanyeraCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastanyeraCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastanyeraCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
