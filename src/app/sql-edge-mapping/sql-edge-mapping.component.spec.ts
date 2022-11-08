import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEdgeMappingComponent } from './sql-edge-mapping.component';

describe('SqlEdgeMappingComponent', () => {
  let component: SqlEdgeMappingComponent;
  let fixture: ComponentFixture<SqlEdgeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlEdgeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlEdgeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
