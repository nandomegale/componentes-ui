import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaLibComponenteUmComponent } from './minha-lib-componente-um.component';

describe('MinhaLibComponenteUmComponent', () => {
  let component: MinhaLibComponenteUmComponent;
  let fixture: ComponentFixture<MinhaLibComponenteUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaLibComponenteUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaLibComponenteUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
