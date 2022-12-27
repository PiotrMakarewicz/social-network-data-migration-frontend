import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCsvMigrationComponent } from './run-csv-migration.component';

describe('RunCsvMigrationComponent', () => {
  let component: RunCsvMigrationComponent;
  let fixture: ComponentFixture<RunCsvMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunCsvMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunCsvMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
