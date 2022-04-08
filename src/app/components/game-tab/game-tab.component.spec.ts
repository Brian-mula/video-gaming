import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTabComponent } from './game-tab.component';

describe('GameTabComponent', () => {
  let component: GameTabComponent;
  let fixture: ComponentFixture<GameTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
