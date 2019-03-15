import counter, * as counterActions from './counter';

describe('counter', () => {
  describe('actions', () => {
    it('should create actions', () => {
      const expectActions = [
        { type: 'counter/INCREASE' },
        { type: 'counter/DECREASE' }
      ];
      const actions = [
        counterActions.increase(),
        counterACtions.decrease(),
      ];
      expect(actions).toEqual(expectActions);
    });
  });
  describe('reducer', () => {
    let state = counter(undefined, {});
    it('should return the initialState', () => {
      expect(state).toHaveProperty('number', 0);
    });

    it('should increase', () => {
      state = counter(state, counterActions.increase());
      expect(state).toHaveProperty('number', 1);
    });

    it('should decrease', () => {
      state = counter(state, counterActions.decrease());
      expect(state).toHaveProperty('number', 0);
    });
  });
});
