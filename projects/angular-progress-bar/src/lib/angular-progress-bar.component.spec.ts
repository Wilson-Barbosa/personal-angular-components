import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProgressBarComponent } from './angular-progress-bar.component';

describe('AngularProgressBarComponent', () => {
  let component: AngularProgressBarComponent;
  let fixture: ComponentFixture<AngularProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
