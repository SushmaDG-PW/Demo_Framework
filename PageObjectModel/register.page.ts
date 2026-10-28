import {Locator, Page} from "@playwright/test"

class Register{
    page:Page
    txtName:Locator
    txtLastName:Locator
    txtEmail:Locator
    RBtnMale:Locator
    RBtnFemale:Locator
    RBtnOthers:Locator
    txtMobileNo:Locator
    CalnDOB:Locator
    DDyear:Locator
    DDmonth:Locator
    date:Locator
    DDSubjects:Locator
    CBoxSports:Locator
    CBoxReading:Locator
    CBoxMusic:Locator
    UBTnChooseFile:Locator
    txtAddres:Locator
    DDstate:Locator
    DDcity:Locator
    BtnSubmit:Locator

constructor(page:Page){
    this.page=page
    this.txtName=page.locator('#firstName')
    this.txtLastName=page.getByPlaceholder("Last Name",{exact:true})
    this.txtEmail=page.getByPlaceholder("name@example.com",{exact:true})
    this.RBtnMale=page.locator('#gender-radio-1')
    this.RBtnFemale=page.locator('#gender-radio-2')
    this.RBtnOthers=page.locator('#gender-radio-3')
    this.txtMobileNo=page.getByPlaceholder("Mobile Number",{exact:true})
    this.CalnDOB=page.locator("#dateOfBirthInput")
    this.DDyear=page.locator('.react-datepicker__year-select')
    this.DDmonth=page.locator('.react-datepicker__month-select')
    this.date=page.getByText("5",{exact:true})
    this.DDSubjects=page.locator('#subjectsInput')
    this.CBoxSports=page.locator('#hobbies-checkbox-1')
    this.CBoxReading=page.locator('#hobbies-checkbox-2')
    this.CBoxMusic=page.locator('#hobbies-checkbox-3')
    this.UBTnChooseFile=page.locator('#uploadPicture')
    this.txtAddress=page.locator('#currentAddress')
    this.DDstate=page.locator('//div[@class="css-13cymwt-control"]')
    this.DDcity=page.locator("#city")
    this.BtnSubmit=page.getByRole("button",{name:"Submit",exact:true})
}

async launchUrl(url){
    await this.page.goto(url)
}

async entername(name,lastName,email){
    await this.txtName.fill(name)
    await this.txtLastName.fill(lastName)
    await this.txtEmail.fill(email)
}

async selectgender(gender){
    if(gender === "Male"){
        await this.RBtnMale.click()
    }else if(gender === "Female"){
        await this.RBtnFemale.click()
    }else if(gender === "Others"){
        await this.RBtnOthers.click()
    }
}

async enterMobileNo(mob){
    await this.txtMobileNo.fill(mob)
}

async selectdate(year, month){
    await this.CalnDOB.click()
    await this.DDyear.selectOption({label:year})
    await this.DDmonth.selectOption({value:month})
    await this.date.first().click()
    await this.page.keyboard.press("Tab")
}

async selectSubject(subject){
    await this.DDSubjects.fill(subject)
    await this.page.keyboard.press("ArrowDown")
    await this.page.keyboard.press("ArrowDown")
    await this.page.keyboard.press("Enter")
}

async selectHobbies(hobbies){
    for(const hobby of hobbies){
        if(hobby === "Sports"){
            await this.CBoxSports.click();
        }else if(hobby === "Reading"){
            await this.CBoxReading.click();
        }else if(hobby === "Music"){
            await this.CBoxMusic.click();
        }
    }
}

async uploadPicture(picturePath){
    if(picturePath){
        await this.UBTnChooseFile.setInputFiles(picturePath)
    }
}

async enterAddress(address){
    await this.txtAddress.fill(address)
}

async selectStateAndCity(state,city){
    await this.DDstate.click()
    await this.page.getByText(state,{exact:true}).last().click()

    await this.DDcity.click()
    await this.page.getByText(city,{exact:true}).first().click()
}

async submitform(){
    await this.BtnSubmit.click()
}

}
export default Register
