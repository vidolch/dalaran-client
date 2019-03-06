import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincallbackComponent } from './login-callback.component';

describe('LogincallbackComponent', () => {
  let component: LogincallbackComponent;
  let fixture: ComponentFixture<LogincallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
