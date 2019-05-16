import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipegridComponent } from './recipegrid.component';

describe('RecipegridComponent', () => {
  let component: RecipegridComponent;
  let fixture: ComponentFixture<RecipegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
