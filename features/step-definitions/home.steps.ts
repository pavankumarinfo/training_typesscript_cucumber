import { Given, Then } from '@cucumber/cucumber'

Given(/^I a user i have opened the website (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should be able to view header text (.+)$/, async function (headermessage) {
    const headertextelement = await $('.header')
    expect(await headertextelement.getText()).toEqual(headermessage)
});