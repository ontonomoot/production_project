import { classNames } from "./classNames";



describe('classNames', () => {
  test('test function', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('test with additional options', () => {
    const expected = 'someClass cls1 cls2 smth'
    expect(classNames('someClass', {}, ["cls1", "cls2", "smth"]))
      .toBe(expected);
  });
  test('test with additional & mods options', () => {
    const expected = 'someClass cls1 cls2 hovered scrolled'
    expect(classNames('someClass', { hovered: true, scrolled: true }, ["cls1", "cls2"]))
      .toBe(expected);
  });
  test('test with false mods', () => {
    const expected = 'someClass cls1 cls2 hovered'
    expect(classNames('someClass', { hovered: true, scrolled: false }, ["cls1", "cls2"]))
      .toBe(expected);
  });
  test('test with undefined mods', () => {
    const expected = 'someClass cls1 cls2 hovered'
    expect(classNames('someClass', { hovered: true, scrolled: undefined }, ["cls1", "cls2"]))
      .toBe(expected);
  });
})