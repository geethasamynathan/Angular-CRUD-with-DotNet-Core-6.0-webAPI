import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarndListComponent } from './barnd-list.component';

describe('BarndListComponent', () => {
  let component: BarndListComponent;
  let fixture: ComponentFixture<BarndListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarndListComponent]
    });
    fixture = TestBed.createComponent(BarndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
