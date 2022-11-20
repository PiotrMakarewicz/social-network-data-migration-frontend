import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSchemaComponent } from './sql-schema.component';

describe('SqlSchemaComponent', () => {
  let component: SqlSchemaComponent;
  let fixture: ComponentFixture<SqlSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
