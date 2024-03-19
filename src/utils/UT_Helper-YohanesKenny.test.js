// Untuk Unit Testing
import { sum, capitalize } from './function';

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 5 to equal 4', () => {
    expect(sum(-1, 5)).toBe(4);
  });

  // Add more tests for sum function if needed
});

describe('capitalize', () => {
  test('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('does not change already capitalized string', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  // Add more tests for capitalize function if needed
});
