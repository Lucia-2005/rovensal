import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastanyeraSearchBarName } from './castanyera-search-bar-name';

describe('CastanyeraSearchBar', () => {
  let component: CastanyeraSearchBarName;
  let fixture: ComponentFixture<CastanyeraSearchBarName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastanyeraSearchBarName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastanyeraSearchBarName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
