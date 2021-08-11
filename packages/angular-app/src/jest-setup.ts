
import 'jest-preset-angular/setup-jest';

Object.defineProperty(window, 'CSS', {value: null});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => ({
    enumerable: true,
    configurable: true
  })
});
