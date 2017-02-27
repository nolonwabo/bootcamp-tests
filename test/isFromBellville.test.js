describe('isFromBellville', function() {
  it("should return 'true' when given 'regNum.startsWith('CY')'", function() {
    assert.equal(isFromBellville('CY 286669'), true);
  });
});
