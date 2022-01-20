describe("Is application up", () => {
  context("Is application up", () => {
    it("should display the title", () => {
      cy.visit("http://localhost:3000/");

      cy.get('[data-testid="indexTitle"]').should("exist");
    });
  });
});

export {};
