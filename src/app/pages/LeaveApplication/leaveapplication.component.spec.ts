import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilemanagerComponent } from './leaveapplication.component';

describe('FilemanagerComponent', () => {
  let component: FilemanagerComponent;
  let fixture: ComponentFixture<FilemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
