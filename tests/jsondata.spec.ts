import {test} from "@playwright/test"
import data from "../DDT/jsondata.json"
import userdata from "../DDT/userjsondata.json"

test("single set",async()=>{
    // console.log(data.greet);
    // console.log(data.subject);
})

test("multiple json object in array", async()=>{
    data.forEach((d)=>{
        console.log(d.greet);
    })
})

test("test data", async({page})=>{
    //await page.getByLabel("Password",{exact:true}).fill(data.password)
    //await page.getByRole("button",{name:"Submit",exact:true}).click()
})

test.only("for application --> miltiple set", async({page})=>{
    for(let testdata of userdata){
        let url = testdata.url
        let username = testdata.username
        let password = testdata.password

        await page.goto(url)
        await page.getByLabel("Username",{exact:true}).fill(username)
        await page.getByLabel("Password",{exact:true}).fill(password)

        await page.getByRole("button",{name:"Submit",exact:true}).click()
    }
})