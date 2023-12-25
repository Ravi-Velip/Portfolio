import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationShowComponent } from './certification-show.component';

describe('CertificationShowComponent', () => {
  let component: CertificationShowComponent;
  let fixture: ComponentFixture<CertificationShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
