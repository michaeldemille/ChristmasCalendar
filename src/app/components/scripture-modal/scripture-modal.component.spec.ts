import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureModalComponent } from './scripture-modal.component';

describe('ScriptureModalComponent', () => {
  let component: ScriptureModalComponent;
  let fixture: ComponentFixture<ScriptureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
