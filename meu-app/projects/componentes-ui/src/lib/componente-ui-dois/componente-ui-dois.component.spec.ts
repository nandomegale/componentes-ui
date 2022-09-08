import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUiDoisComponent } from './componente-ui-dois.component';

describe('ComponenteUiDoisComponent', () => {
  let component: ComponenteUiDoisComponent;
  let fixture: ComponentFixture<ComponenteUiDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteUiDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUiDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
