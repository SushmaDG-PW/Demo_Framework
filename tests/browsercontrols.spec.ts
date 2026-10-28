import {chromium, test} from '@playwright/test'
import { log } from 'console'
test("browserControls", async({page})=>{
    await page.goto("https://www.amazon.com/")
    //fetch the viewport size
    let size = await page.viewportSize()
    console.log(size)

    //set the view port size
    await page.setViewportSize({width:1000, height:500})
    let size1 = page.viewportSize()
    console.log(size1);

    //navigate to page
    await page.goto("https://www.flipkart.com")
    //fetch the title
    let title = await page.title()
    console.log(title);
    //fetch the url
    let url = await page.url()
    console.log(url);    
})










// 
//test("instance",async()=>{
//     let browser = await chromium.launch()
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.google.com/")
// })
test("instance", async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.screenshot({path:"screenshot/ss.png"})

    //test.setTimeOut(60000)
    //to take multiple ss
    let time = new Date().getTime()
    await page.screenshot({path: "screenshot/page${time}.png"})
})