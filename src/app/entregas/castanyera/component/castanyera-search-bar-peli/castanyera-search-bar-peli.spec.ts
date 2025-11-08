import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastanyeraSearchBarPeli } from './castanyera-search-bar-peli';

describe('CastanyeraSearchBarPeli', () => {
  let component: CastanyeraSearchBarPeli;
  let fixture: ComponentFixture<CastanyeraSearchBarPeli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastanyeraSearchBarPeli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastanyeraSearchBarPeli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
