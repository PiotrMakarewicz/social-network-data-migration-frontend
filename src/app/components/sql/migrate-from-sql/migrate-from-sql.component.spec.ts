import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateFromSqlComponent } from './migrate-from-sql.component';

describe('MigrateFromSqlComponent', () => {
  let component: MigrateFromSqlComponent;
  let fixture: ComponentFixture<MigrateFromSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrateFromSqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrateFromSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
