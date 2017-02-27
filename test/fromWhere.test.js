describe('fromWhere', function() {
  it("should return 'Bellville' when given 'regNum(CY)'", function() {
    assert.equal(fromWhere('Bellville'), 'Some other place!');
  });
});
  it("should return 'Cape Town' when given 'regNum(CA)'", function() {
    assert.equal(fromWhere('Cape Town'), 'Some other place!');
  });
it("should return 'Some ' when given 'regNum(CJ)'", function() {
  assert.equal(fromWhere('Paarl'), 'Some other place!');
  });
