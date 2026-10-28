import {test} from '@playwright/test'
import { log } from 'console'

test("xpath exp", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    //await page.locator('//input[@id="username"]').fill("student")
    //relative path
    //1. tagname with indexing
    await page.locator("//input[1]").fill("student")

    //2. //tagname[@attr="value"]
    await page.locator('//input[@id="username"]').fill("student")
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    await page.locator('//span[@class="v1zwn28" and text()="Cart"]')

    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    await page.locator('//p[text()="See table"]').click()
    await page.locator('//a[@href="/en/olympic-games/tokyo-2020/athletes"]').click()
    let text = await page.locator('/div[@title="Gold"]//span[text()="4"]')
    console.log(text);
    
})