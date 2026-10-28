import {test} from '@playwright/test'

//check() --> used to check the checkbox or radiobutton
//uncheck() --> used to uncheck the checkbox or radiobutton

test('checkbox and radiobutton actions', async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")

    await page.locator("#domain_a").check()
    await page.locator("#domain_b").check()

    await page.locator("#domain_a").uncheck()
})