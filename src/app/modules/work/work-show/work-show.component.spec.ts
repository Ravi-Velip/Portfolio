import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShowComponent } from './work-show.component';

describe('WorkShowComponent', () => {
  let component: WorkShowComponent;
  let fixture: ComponentFixture<WorkShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
