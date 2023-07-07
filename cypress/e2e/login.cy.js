import LoginPage from "../pageObjects/loginPage";
const login = new LoginPage()

describe('This is the demo POM', () => {

    it('Login using pom', () => {
        cy.fixture("loginDetails").then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(2000)
            login.setUserName(data.userName)
            login.setPassword(data.userPassword)
            login.clickSubmit()
            login.verifyLogin()
        })
    })
})




