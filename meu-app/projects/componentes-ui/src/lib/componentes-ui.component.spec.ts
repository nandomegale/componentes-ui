import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesUiComponent } from './componentes-ui.component';

describe('ComponentesUiComponent', () => {
  let component: ComponentesUiComponent;
  let fixture: ComponentFixture<ComponentesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
