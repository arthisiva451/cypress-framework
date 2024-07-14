/// <reference types="cypress" />

class BasePage {
  // Common method to navigate to a URL
  navigateTo(url) {
    cy.visit(url)
  }

  // Common method to click an element
  clickElement(locator) {
    cy.get(locator).click()
  }

  // Common method to fill out a text box field
  fillText(locator, textToEnter) {
    cy.get(locator).type(textToEnter)
  }

  // Common method to retrieve text from an element
  getElementText(locator) {
    return cy.get(locator).getElementText("text")
  }

  // Common method to wait for an element to be visible
  waitForElementVisible(locator) {
    cy.get(locator).should("be.visible")
  }

  // Common method to assert if an element to be visible
  isElementVisible(locator) {
    return cy.get(locator).should("be.visible")
  }

  // Common methods to scroll and swipe
  scrollIntoView(locator) {
    cy.get(locator).scrollIntoView()
  }

  swipeUp() {
    cy.scrollTo("bottom")
  }

  swipeDown() {
    cy.scrollTo("top")
  }

  swipeRight() {
    cy.scrollTo("right")
  }

  swipeLeft() {
    cy.scrollTo("left")
  }
}
export default BasePage
