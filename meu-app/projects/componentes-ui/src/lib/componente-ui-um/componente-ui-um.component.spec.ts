import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUiUmComponent } from './componente-ui-um.component';

describe('ComponenteUiUmComponent', () => {
  let component: ComponenteUiUmComponent;
  let fixture: ComponentFixture<ComponenteUiUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteUiUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUiUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
