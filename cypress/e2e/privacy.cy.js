it("Testa a página da politica de privacidade de forma independente", () => {
  cy.visit("./src/privacy.html");

  cy.contains("Talking About Testing").should("be.visible");
});
