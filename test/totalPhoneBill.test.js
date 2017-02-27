describe('totalPhoneBill', function() {
  it("should return 'total' when given 'calls.startsWith('call')''", function() {
    assert.equal(totalPhoneBill('call'), 'R2.75');
  });
});
  it("should return 'total' when given 'calls.startsWith(('sms')'", function() {
    assert.equal(totalPhoneBill('sms'), 'R0.65');
  });
