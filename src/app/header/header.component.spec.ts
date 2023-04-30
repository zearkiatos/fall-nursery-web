/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header with a image', () => {

    expect(debug.query(By.css('header'))).toHaveSize(1);
    expect(debug.query(By.css('header>h1'))).toHaveSize(1);
    debug.queryAll(By.css('header>h1')).forEach((h1, i)=>{
      expect(h1.nativeElement.textContent).toContain('Vivero El Otoño 🍁')
    });
    expect(debug.query(By.css('header>div.image'))).toHaveSize(1);
  });
});
