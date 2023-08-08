describe("Form App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  })
  //Getters \/
  const firstNameInput = () => cy.get("input[name=firstName]")
  const lastNameInput = () => cy.get("input[name=lastName]")
  const emailInput = () => cy.get("input[name=email]")
  const passwordInput = () => cy.get("input[name=password]")
  const tosInput = () => cy.get("input[name=TermsOfService]")
  const submitButton = () => cy.get("input[name=submitButton]")
  const errorMessageFName = () => cy.get(`#firstNameError`)
  const errorMessageLName = () => cy.get(`#lastNameError`)
  const errorMessageEmail = () => cy.get(`#emailError`)
  const errorMessagePassword = () => cy.get(`#passwordError`)
  const errorMessageTOS = () => cy.get(`#tosError`)
  const proofOfWork = () => cy.get(`.App > :nth-child(2)`)

  it("sanity check, for the noggin", () => {
    expect(100).to.not.equal(1000);
    expect(100).to.not.be.a("string")
    expect(100).to.be.a("number")
  })

  describe("inputs are interactable", () => {
    it("Can enter stuff into the fields", () => {
      firstNameInput().should("have.value", "").type("Miranda").should("have.value", "Miranda")
      firstNameInput().should("have.length.of.at.most", 3)
      lastNameInput().should("have.value", "").type("Sitahra").should("have.value", "Sitahra")
      lastNameInput().should("have.length.of.at.most", 3)
      emailInput().should("have.value", "").type("MirandaRulesU@hotmail.com").should("have.value", "MirandaRulesU@hotmail.com")
      passwordInput().should("have.value", "").type("dga9g024tnaskogn1@#T_(FA").should("have.value", "dga9g024tnaskogn1@#T_(FA")
      tosInput().click().should("have.value", "on").click().should("have.value", false) //We know this doesn't work, im incompetent
      // submitButton().click()
    })
    it("validation works", () => {
      firstNameInput().should("have.value","").type("as")
      errorMessageFName().should("contain", "Name must at least be 3 characters")
      lastNameInput().should("have.value","").type("kl")
      errorMessageLName().should("contain", "Name must at least be 3 characters")
      emailInput().should("have.value","").type("asfg0has3")
      errorMessageEmail().should("contain", "You must supply a valid email")
      passwordInput().should("have.value","").type("1234f")
      errorMessagePassword().should("contain", "password must be at least 6 characters long")
      tosInput().click()
      errorMessageTOS().should("contain", "You are required to accept our ToS") //Will not work
    })
    it("form submitting works" , () => {
      firstNameInput().should("have.value", "").type("Lucalis").should("have.value","Lucalis")
      lastNameInput().should("have.value", "").type("Tisonna").should("have.value","Tisonna")
      emailInput().should("have.value", "").type("StartsWithLEndsWithUcalis@hotmail.com").should("have.value", "StartsWithLEndsWithUcalis@hotmail.com")
      passwordInput().should("have.value", "").type("dga9g024tnaskogn1@#T_(FA").should("have.value", "dga9g024tnaskogn1@#T_(FA")
      tosInput().click().should("have.value", "on").click
      submitButton().click()
      proofOfWork().should("exist")
    })
  })






})