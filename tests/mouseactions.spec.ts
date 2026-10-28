import {expect, test} from "@playwright/test"

test("mouseactions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

    await page.locator("btn").click()
    //!bydefault click() will perform left click

    let value1 = 'You selected "Yes"'
    await expect(value1).toContain('You selected "Yes"')

    //!-----------------------------

    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.locator("#btn_a").click({button:"right",clickCount:6})
    await page.getByText('Yes',{exact:true}).click({delay:5000,force:true})

    let value = 'You selected "Yes"'
    await expect(value).toContain('You selected "Yes"')

    //? button --> it will specify which mouse button should be clicked, by default it will
    //click perform left click

    //? clickCount --> it will specify the number of more clicks

    //? delay --> it will specify the time between the press and release of the mouse button

    //? force --> if the element is disabled force will helpto forcefully click on it,
    //by default the value for force is false

})

test("dbclick",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")

    //await page.locator("#btn_a").click({clickCount:2})
    await page.locator("#btn_a").dblclick()
})

test("hover,down,up",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")

    await page.locator('#circle').hover()
    //! hover --> it will hover the cursor on the specified element

    //? down --> it is used to press the mouse button
    //? up --> it is used to release the mouse button

    await page.mouse.down()

    await page.waitForTimeout(5000)

    await page.mouse.up()

    await page.locator('#circle').click({delay:5000})
})

test("move , boundingbox", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")

    //!boundingBox()--> A bounding box is the position and size of a web element on the page,
    //represented using X and Y coordinates, width and height
    let box = await page.locator('w-5.h-5.mt-5.ml.cursor-pointer ').boundingBox()
    console.log(box)

    //move() means moving the mouse pointer from its current position to a specified
    //location or webelement

    await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').hover()
    await page.mouse.move(768.3500366210938,251.52500915527344)

    //let text = await page.locator('//ul[@class="p-4"]').textContent()
    let text = await page.locator('//li[@class="text-sm list-disc m1-5 p-1]').allTextContents
    console.log(text);  
})

test("scrolling", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")

    await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded() //external

    await page.locator('[type="checkbox"]').click() //built in

    //! vertical scrolling
    await page.mouse.wheel(0,1000)
    await page.mouse.wheel(0,-900)

    //! horizontal scrolling

    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')
    await page.mouse.wheel(1000,0)
    await page.mouse.wheel(-600,0)
})

test.only("drag and drop",async({page})=>{

    //? case 1 
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.getByText("Drag Me",{exact:true}).hover()

    // await page.mouse.down()
    // await page.mouse.move(200,500)
    // await page.mouse.up()

    //!case 2
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.getByText("Mobile Charger",{exact:true}).hover()
    // await page.mouse.down()
    // await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
    // await page.mouse.up()

    //!case3
    //?syntax
    //? target.dragTo(source)
    await page.getByText("Mobile Charger",{exact:true}).dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
})