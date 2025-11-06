import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastanyeraAutocompletar } from './castanyera-autocompletar';

describe('CastanyeraAutocompletar', () => {
  let component: CastanyeraAutocompletar;
  let fixture: ComponentFixture<CastanyeraAutocompletar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastanyeraAutocompletar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastanyeraAutocompletar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
