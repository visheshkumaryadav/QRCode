import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeLoginComponent } from './qrcode-login.component';

describe('QrcodeLoginComponent', () => {
  let component: QrcodeLoginComponent;
  let fixture: ComponentFixture<QrcodeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrcodeLoginComponent]
    });
    fixture = TestBed.createComponent(QrcodeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
