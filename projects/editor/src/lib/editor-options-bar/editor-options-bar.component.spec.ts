import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorOptionsBarComponent } from './editor-options-bar.component';

describe('EditorOptionsBarComponent', () => {
  let component: EditorOptionsBarComponent;
  let fixture: ComponentFixture<EditorOptionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorOptionsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
