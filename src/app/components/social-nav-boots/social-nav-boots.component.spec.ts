import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNavBootsComponent } from './social-nav-boots.component';

describe('SocialNavBootsComponent', () => {
  let component: SocialNavBootsComponent;
  let fixture: ComponentFixture<SocialNavBootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNavBootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNavBootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
