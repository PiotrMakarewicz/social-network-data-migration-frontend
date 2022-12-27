import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvEdgeMappingComponent } from './csv-edge-mapping.component';

describe('CsvEdgeMappingComponent', () => {
  let component: CsvEdgeMappingComponent;
  let fixture: ComponentFixture<CsvEdgeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvEdgeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvEdgeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
