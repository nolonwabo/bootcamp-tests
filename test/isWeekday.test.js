describe('isWeekday', function() {
  it("should return 'true' when given 'day.startsWith('S')'", function() {
    assert.equal(isWeekday('Wensday'), true);
  });
});
