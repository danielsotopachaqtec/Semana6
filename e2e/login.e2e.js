describe('Login Application', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should allow login in App', async () => {
    const email = 'Dasg.1993@gmail.com';
    // enter email address
    await element(by.id('emailTextField')).typeText(email);
    // enter password
    // enter phone number
    // tap and login in
    await expect(element(by.label(email))).toBeVisible();
  });
});
