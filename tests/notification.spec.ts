import {test} from '@playwright/test'

test("notification",async({browser})=>{
    let context=await browser.newContext(
        {
            permissions:["notifications"]
        }
    )
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:"Notification",exact:true}).click()

    let result=await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log(result);
})