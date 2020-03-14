describe('App Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should have "Refresh Config" button', async () => {
    await expect(element(by.id('refreshButton'))).toBeVisible()
    await element(by.id('refreshButton')).tap()
  })

  it('Should navigate between experiments', async () => {
    await expect(element(by.id('test1-link'))).toBeVisible()
    await expect(element(by.id('test2-link'))).toBeVisible()
    await expect(element(by.id('test3-link'))).toBeVisible()
    await element(by.id('test1-link')).tap()
    await expect(element(by.id('test1-screen'))).toBeVisible()
    await element(by.id('header-back')).tap()
    await element(by.id('test2-link')).tap()
    await expect(element(by.id('test2-screen'))).toBeVisible()
    await element(by.id('header-back')).tap()
    await element(by.id('test3-link')).tap()
    await expect(element(by.id('test3-screen'))).toBeVisible()
    await element(by.id('header-back')).tap()
  })
})
