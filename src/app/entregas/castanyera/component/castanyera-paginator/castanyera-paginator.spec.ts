import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastanyeraPaginator } from './castanyera-paginator';

describe('CastanyeraPaginator', () => {
  let component: CastanyeraPaginator;
  let fixture: ComponentFixture<CastanyeraPaginator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastanyeraPaginator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastanyeraPaginator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
