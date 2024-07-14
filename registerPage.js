import registerPageObj from "../page-object/RegisterPageObject.js"
import BasePage from "./basePage.js"

class RegisterPage extends BasePage {
  openURL() {
    this.navigateTo(Cypress.env("URL"))
  }

  enterFirstName(FName) {
    this.waitForElementVisible(registerPageObj.weblocators.firstName)
    registerPageObj.getFirstName().type(FName)
  }

  enterLastName(LName) {
    this.waitForElementVisible(registerPageObj.weblocators.lastName)
    registerPageObj.getLastName().type(LName)
  }

  enterEmail(email) {
    registerPageObj.getEmail().type(email)
  }

  enterTelephone(phoneNo) {
    registerPageObj.getTelephone().type(phoneNo)
  }

  enterPassword(password) {
    registerPageObj.getPassword().type(password)
    this.swipeLeft()
  }

  selectCheckbox() {
    registerPageObj.getPolicyCheckbox().check()
  }

  clickOnContinue() {
    registerPageObj.getContinue().click()
  }

  fillRegistrationForm(FName, LName, email, phoneNo, password) {
    this.enterFirstName(FName)
    this.enterLastName(LName)
    this.enterEmail(email)
    this.enterTelephone(phoneNo)
    this.enterPassword(password)
    this.selectCheckbox()
    this.clickOnContinue()
  }

  isPageVisible() {
    registerPageObj.isPageVisible()
  }
}
const registerPage = new RegisterPage()
export default registerPage
