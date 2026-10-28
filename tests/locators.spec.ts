import {test} from '@playwright/test'

test("cssSelectors", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("[id='name']").fill("pooja")
    await page.locator("input#email").fill("pooja@mail.com")
    await page.goto("https://www.saucedemo.com/")
    await page.locator("input.submit-button").click()
})