describe('yearsAgo', function() {
  it("should return 'new Date' when given 'date.getFullYear( )'", function() {
    assert.equal(yearsAgo('2000'), 17);
  });
});
