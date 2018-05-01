import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonmockComponent } from './jsonmock.component';

describe('JsonmockComponent', () => {
  let component: JsonmockComponent;
  let fixture: ComponentFixture<JsonmockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonmockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonmockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
