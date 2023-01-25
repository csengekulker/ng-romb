import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RombComponent } from './romb.component';

describe('RombComponent', () => {
  let component: RombComponent;
  let fixture: ComponentFixture<RombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RombComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
