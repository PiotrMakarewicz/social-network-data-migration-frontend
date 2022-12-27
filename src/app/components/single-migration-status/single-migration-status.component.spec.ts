import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMigrationStatusComponent } from './single-migration-status.component';

describe('SingleMigrationStatusComponent', () => {
  let component: SingleMigrationStatusComponent;
  let fixture: ComponentFixture<SingleMigrationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMigrationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMigrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
