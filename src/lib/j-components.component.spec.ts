import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JComponentsComponent } from './j-components.component';

describe('JComponentsComponent', () => {
  let component: JComponentsComponent;
  let fixture: ComponentFixture<JComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
