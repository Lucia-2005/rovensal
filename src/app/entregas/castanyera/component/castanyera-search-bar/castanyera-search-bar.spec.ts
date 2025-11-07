import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastanyeraSearchBar } from './castanyera-search-bar';

describe('CastanyeraSearchBar', () => {
  let component: CastanyeraSearchBar;
  let fixture: ComponentFixture<CastanyeraSearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastanyeraSearchBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastanyeraSearchBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
