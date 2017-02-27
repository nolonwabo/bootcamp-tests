describe('isFromCapeTown', function() {
  it("should return 'true' when given 'capeTown.startsWith('CY')'", function() {
    assert.equal(isFromCapeTown('CA 286669'), true);
  });
});
