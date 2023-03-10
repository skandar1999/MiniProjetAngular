import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtablissementComponent } from './update-etablissement.component';

describe('UpdateEtablissementComponent', () => {
  let component: UpdateEtablissementComponent;
  let fixture: ComponentFixture<UpdateEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
