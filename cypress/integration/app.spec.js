describe("Primer test", () => {
  beforeEach(() => {
    cy.server();
    cy.route(
      "https://comolohago.cl/wp-json/wp/v2/categories?include=343,24,182,1695,440",
      "fixture:categories.json"
    );
  });

  it("Visita el sitio", () => {
    cy.visit("/");

    cy.get(".categories-grid").should("exist");
    cy.get(".grid").should("exist");
    cy.contains("Todos").should("exist");

    cy.get("button").should((b) => {
      expect(b).to.have.length(6);
    });

    cy.get(".item-container").should((items) => {
      expect(items).to.have.length(13);
    });

    cy.contains("Super Comida").click();

    cy.get(".item-container").should((items) => {
      expect(items).to.have.length(2);
    });
  });
});
