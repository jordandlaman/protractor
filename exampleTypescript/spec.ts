// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
    browser.get('http://127.0.0.1:4200/auth');
  });

  it('should have two buttons on the splash page', () => {
    let signIn = element(by.css('.mat-raised-button.mat-primary'));
    expect(signIn.getText()).toEqual('Sign in');
    let createAccount = element(by.css('.mat-raised-button.mat-secondary'))
    expect(createAccount.getText()).toEqual('Create Account');
  });

  it('have a title with text', () => {
    let splashTitle = element(by.css('.splash-title'));
    expect(splashTitle.getText()).toEqual('Welcome to Apps & Activities');
  });
});
