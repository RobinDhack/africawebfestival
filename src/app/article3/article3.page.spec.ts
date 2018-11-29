import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article3Page } from './article3.page';

describe('Article3Page', () => {
  let component: Article3Page;
  let fixture: ComponentFixture<Article3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
