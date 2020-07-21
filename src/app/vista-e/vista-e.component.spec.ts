import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEComponent } from './vista-e.component';

describe('VistaEComponent', () => {
  let component: VistaEComponent;
  let fixture: ComponentFixture<VistaEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
