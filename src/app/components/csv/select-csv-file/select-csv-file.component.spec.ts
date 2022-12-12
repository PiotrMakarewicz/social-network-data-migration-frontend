import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCsvFileComponent } from './select-csv-file.component';

describe('SelectCsvFileComponent', () => {
  let component: SelectCsvFileComponent;
  let fixture: ComponentFixture<SelectCsvFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCsvFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCsvFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
