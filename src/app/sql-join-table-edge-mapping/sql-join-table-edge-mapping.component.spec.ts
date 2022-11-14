import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlJoinTableEdgeMappingComponent } from './sql-join-table-edge-mapping.component';

describe('SqlJoinTableEdgeMappingComponent', () => {
  let component: SqlJoinTableEdgeMappingComponent;
  let fixture: ComponentFixture<SqlJoinTableEdgeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlJoinTableEdgeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlJoinTableEdgeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
