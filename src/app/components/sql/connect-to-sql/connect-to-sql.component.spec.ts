import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToSqlComponent } from './connect-to-sql.component';

describe('ConnectToSqlComponent', () => {
  let component: ConnectToSqlComponent;
  let fixture: ComponentFixture<ConnectToSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectToSqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectToSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
