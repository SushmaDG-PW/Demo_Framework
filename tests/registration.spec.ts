import {test} from "@playwright/test"
import Register from "../PageObjectModel/register.page"
import data from "../DDT/register.json"

test("DemoQA Registartion Form", async({page})=>{
    let registerPage=new Register(page)
    for(let user of data){
        await registerPage.launchUrl(user.url)
        await registerPage.entername(user.name,user.lastname,user.email)
        await registerPage.selectgender(user.gender)
        await registerPage.enterMobileNo(user.mob)
        await registerPage.selectdate(user.year,user.month)
        await registerPage.selectSubject(user.subject)
        await registerPage.selectHobbies(user.hobbies)
        await registerPage.uploadPicture(user.picturepath)
        await registerPage.enterAddress(user.address)
        await registerPage.selectStateAndCity(user.state,user.city)
        await registerPage.submitform()
    }
})