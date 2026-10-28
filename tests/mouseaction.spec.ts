import {expect, test} from '@playwright/test'

test("mouse actions", async({page})=>{
    await page.goto("https://demoapss.qspiders.com/ui/button?sublist=0")

    await page.locator("#btn").click()
    //!bydefault click() will perform left click

    let value1 = 'You selected "Yes"'

    //!-----------------------------------

    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.locator("#btn_a").click({button:"right",clickCount:6})
    await page.getByText('Yes',{exact:true}).click({delay:5000,force:true})

    let value = 'You selected "Yes"'
    await expect(value).toContain('You selected "Yes"')

    //? button --> it will specify which mouse button should be clicked, by default it will click
    //perform left click

    //? clickcount --> it will specify the number of mouse clicks

    //? delay --> it will specify the time between the press and release of the mouse button

    //? force --> if the element is disabled force will help to forcefully click on it, by default the value for force is false
})

test("dblclick",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")

    //await page.locator("#btn_a").click({clickCount:2})
    await page.locator("#btn_a").dblclick()
})

test.only("hover, down, up", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")

    await page.locator('#circle').hover()
    //!hover --> it will hover the cursor on the specified element

    //? down --> it is used to press the mouse button
    //? up --> it is used to release the mouse button

    await page.mouse.down()

    await page.waitForTimeout(5000)

    await page.mouse.up()

    await page.locator('#circle').click({delay:5000})
})
