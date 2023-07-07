class LoginPage {

    txtuserName = "//input[@placeholder='Username']"
    txtuserPassword = "//input[@placeholder='Password']"
    btnsubmit = "//button[normalize-space()='Login']"
    verifyloginStatus = "Dashboard"

    setUserName(username) {
        cy.xpath(this.txtuserName).type(username)
    }

    setPassword(userPassword) {
        cy.xpath(this.txtuserPassword).type(userPassword)
    }

    clickSubmit() {
        cy.xpath(this.btnsubmit).click();
    }

    verifyLogin() {
        cy.contains(this.verifyloginStatus).should('be.visible')
    }

}

export default LoginPage;