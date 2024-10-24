describe("Test the generate report button", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-school/e2e")
  })
  it("Check the generate report button", () => {
    cy.get("[data-cy=title-text]")
      .should("not.exist")
    cy.get("[data-cy=generate-report-btn]").click()
    cy.get("[data-cy=title-text]")
      .should("be.visible")
  })
})