import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoColorpickerComponent } from './demo-colorpicker.component';

describe('DemoColorpickerComponent', () => {
  let component: DemoColorpickerComponent;
  let fixture: ComponentFixture<DemoColorpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoColorpickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoColorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
