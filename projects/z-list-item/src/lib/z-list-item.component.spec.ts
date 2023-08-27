import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZListItemComponent } from './z-list-item.component';

describe('ZListItemComponent', () => {
  let component: ZListItemComponent;
  let fixture: ComponentFixture<ZListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
