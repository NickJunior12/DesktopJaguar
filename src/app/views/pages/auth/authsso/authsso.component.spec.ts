import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthssoComponent } from './authsso.component';

describe('AuthssoComponent', () => {
  let component: AuthssoComponent;
  let fixture: ComponentFixture<AuthssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthssoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
