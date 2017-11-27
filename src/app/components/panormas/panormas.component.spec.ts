import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanormasComponent } from './panormas.component';

describe('PanormasComponent', () => {
  let component: PanormasComponent;
  let fixture: ComponentFixture<PanormasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanormasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
