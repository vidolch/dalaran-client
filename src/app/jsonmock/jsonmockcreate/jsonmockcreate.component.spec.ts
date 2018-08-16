import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonmockcreateComponent } from './jsonmockcreate.component';

describe('JsonmockcreateComponent', () => {
  let component: JsonmockcreateComponent;
  let fixture: ComponentFixture<JsonmockcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonmockcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonmockcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
