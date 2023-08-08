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
  
  it("sanity check, for the noggin", () => {
    expect(100).to.not.equal(1000);
    expect(100).to.not.be.a("string")
    expect(100).to.be.a("number")
  })







})