import {test} from '@playwright/test'
import { log } from 'node:console'





// test("test2", async({page})=>{
//     log("test3")
//     await page.goto("https://www.amazon.com/")
// })

test.describe("Logintest", ()=>{

    test("validcredentials", async({page})=>{
        console.log("valid login test");
        
    })

    test("invalid credentials", async({page})=>{
        console.log("Invalid login test");
        
    })
})

