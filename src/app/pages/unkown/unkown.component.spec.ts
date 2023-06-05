import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnkownComponent } from './unkown.component';

describe('UnkownComponent', () => {
  let component: UnkownComponent;
  let fixture: ComponentFixture<UnkownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnkownComponent]
    });
    fixture = TestBed.createComponent(UnkownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
