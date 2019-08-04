import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHeadingComponent } from './block-heading.component';

describe('BlockHeadingComponent', () => {
  let component: BlockHeadingComponent;
  let fixture: ComponentFixture<BlockHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
