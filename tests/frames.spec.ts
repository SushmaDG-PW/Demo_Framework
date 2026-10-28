import {expect, test} from '@playwright/test'

test("frame intr", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //await page.locator('[name="mytext1"]').fill("hello")

    //!Approach 1 -->
    //await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]').fill("hello")

    let frame1 = await page.frameLocator('//frame[@src="frame_1.html"]')
    await frame1.locator('[name="mytext1"]').fill("hello")

    //!Approach 2 --?
    let frame2 = await page.locator('//frame[@src="frame_2.html"]').contentFrame()
    await frame2.locator('[name="mytext2"]').fill("bye")

    //? do for frame5 and frame4
})

test.only("nested frame", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frame3=await page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.locator('[name="mytext3"]').fill("hello")

    let innerframe = await frame3.frameLocator('//iframe').locator('(//div[@class="AB7LabId5V1"])[2]')
    await innerframe.check()

    await expect(innerframe).toBeChecked()
})