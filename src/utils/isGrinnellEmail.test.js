import isGrinnellEmail from './isGrinnellEmail';

test('Non-Email returns false', () => {
  expect(isGrinnellEmail('thisisastring')).toBe(false);
});

test('Long Email invalid returns false', () => {
  expect(isGrinnellEmail('billybobjoe@grinnell.edu')).toBe(false);
});

test('Short Email invalid returns false', () => {
  expect(isGrinnellEmail('bo@grinnell.edu')).toBe(false);
});

test('Non-Grinnell email invalid returns false', () => {
  expect(isGrinnellEmail('billyjo@gmail.com')).toBe(false);
});

test('Valid Grinnell email returns true', () => {
  expect(isGrinnellEmail('lifrank@grinnell.edu')).toBe(true);
});