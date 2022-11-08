import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlNodeMappingComponent } from './sql-node-mapping.component';

describe('SqlNodeMappingComponent', () => {
  let component: SqlNodeMappingComponent;
  let fixture: ComponentFixture<SqlNodeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlNodeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlNodeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
