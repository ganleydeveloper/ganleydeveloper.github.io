import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactFormComponent } from './transact-form-component';

describe('TransactFormComponent', () => {
  let component: TransactFormComponent;
  let fixture: ComponentFixture<TransactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
