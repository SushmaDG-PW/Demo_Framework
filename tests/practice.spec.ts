import { test } from '@playwright/test';
// test("makeMyTrip", async({page}) => {
//     await page.goto("https://www.makemytrip.com")

//     await page.click('//span[text()="Departure"]')
//     //only applicablefor css n xpath

//     await page.locator('//span[@aria-label="Next Month"]').click()
//     await page.locator('//span[@aria-label="Next Month"]').click()
//     await page.locator('//span[@aria-label="Next Month"]').click()
    
//     await page.locator('//div[@class="DayPicker-Day" and @aria-label="Sun Jan 24 2027"]').click();
// })


test.only('ICC cricket', async({page}) => {
    await page.goto("https://icc-cricket.com/rankings")

    let name = "Steve";

    let ratings = await page.locator(`//span[text()="${name}}"]/ancestor::td[@class=w-[calc(100%-110px)] align-middle"]/preceding-sibling::td//span[@class="text-xsfont-extrabold uppercase text-primary pr-2"]`)

    console.log(ratings);
})