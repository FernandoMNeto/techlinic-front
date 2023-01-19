import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorysComponent } from './relatorys.component';

describe('RelatorysComponent', () => {
  let component: RelatorysComponent;
  let fixture: ComponentFixture<RelatorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
