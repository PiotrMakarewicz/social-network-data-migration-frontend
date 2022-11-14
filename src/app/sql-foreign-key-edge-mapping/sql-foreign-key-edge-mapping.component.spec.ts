import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlForeignKeyEdgeMappingComponent } from './sql-foreign-key-edge-mapping.component';

describe('SqlForeignKeyEdgeMappingComponent', () => {
  let component: SqlForeignKeyEdgeMappingComponent;
  let fixture: ComponentFixture<SqlForeignKeyEdgeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlForeignKeyEdgeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlForeignKeyEdgeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
