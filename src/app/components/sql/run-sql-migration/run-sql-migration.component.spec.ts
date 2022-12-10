import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSqlMigrationComponent } from './run-sql-migration.component';

describe('RunSqlMigrationComponent', () => {
  let component: RunSqlMigrationComponent;
  let fixture: ComponentFixture<RunSqlMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunSqlMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunSqlMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
