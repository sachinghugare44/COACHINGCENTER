import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KaalalPage } from './kaalal.page';

describe('KaalalPage', () => {
  let component: KaalalPage;
  let fixture: ComponentFixture<KaalalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KaalalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
