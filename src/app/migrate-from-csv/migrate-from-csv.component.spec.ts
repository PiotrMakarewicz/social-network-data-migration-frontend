import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateFromCsvComponent } from './migrate-from-csv.component';

describe('MigrateFromCsvComponent', () => {
  let component: MigrateFromCsvComponent;
  let fixture: ComponentFixture<MigrateFromCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrateFromCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrateFromCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
