import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonmocklistComponent } from './jsonmocklist.component';

describe('JsonmocklistComponent', () => {
  let component: JsonmocklistComponent;
  let fixture: ComponentFixture<JsonmocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonmocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonmocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
