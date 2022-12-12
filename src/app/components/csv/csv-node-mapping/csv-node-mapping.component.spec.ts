import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvNodeMappingComponent } from './csv-node-mapping.component';

describe('CsvNodeMappingComponent', () => {
  let component: CsvNodeMappingComponent;
  let fixture: ComponentFixture<CsvNodeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvNodeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvNodeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
