import {test} from '@playwright/test'

test("fixtures", async({context})=>{
    let page = await context.newPage()
    await page.goto("https://www.amazon.com/")
})

test("pagefixtures", async({page})=>{
    await page.goto("https://www.amazon.com/")
})