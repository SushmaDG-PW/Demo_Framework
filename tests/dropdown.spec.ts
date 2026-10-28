import {test} from "@playwright/test"

test("standard dropdown",async({page})=>{
    //!------standart dropdown----

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")

    await page.locator("#select3").selectOption({value:"India"}) //selecting the option through value


    await page.locator("#select5").selectOption({label:"Jammu And Kashmir"}) //selecting the optin by using the label / visible text

    await page.locator('(//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"])[3]').selectOption({index:5}) //selecting the option based on the index
    //? index starts from 1
})

test("multiselect dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Mens Casual Slim Fit"}])
    //?selecting multiple options through value

    //!optional -> using keyboard actions
    await page.getByTitle("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",{exact:true}).click()
    await page.keyboard.press("Shift+ArrowDown")
    await page.keyboard.press("Shift+ArrowDown")
    await page.keyboard.press("Shift+ArrowDown")

    await page.getByRole("button",{name:"Add"}).click()
})

test("custom dropdowns",async({page})=>{
    await page.goto("https://www.amazon.in/s?k=shoes&crid=39QFMSSQK00OF&sprefix=shoe%2Caps%2C312&ref=nb_sb_noss_2")

    await page.locator("#s-result-sort-select").click({force:true})

    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()

    let options=await page.locator('//a[@class="a-dropdown-link"]').all()

    for(let option of options){
        let text=await option.textContent() //price: high to low
        if(text!.includes('Best ')){
            await option.click()
        }

    }
    //try with xpath

})

test.only("autosuggest dropdown", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")

    await page.locator('//div[@role="row"]').first().waitFor()

    //case 1
    //let allautosugg = await pae.locator('//div[@role="row"]').all()

    //for(let option of allautosugg)
    //    let text=await Option.textContent()
    //  if(text?.includes(" rack")){
    // await option.click()
    //break;
//  }    
//}

//case2
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")
})