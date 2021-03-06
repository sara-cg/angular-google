import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseComponent } from './frase.component';

describe('FraseComponent', () => {
  let component: FraseComponent;
  let fixture: ComponentFixture<FraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
