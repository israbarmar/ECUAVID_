import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseSComponent } from './clase-s.component';

describe('ClaseSComponent', () => {
  let component: ClaseSComponent;
  let fixture: ComponentFixture<ClaseSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
