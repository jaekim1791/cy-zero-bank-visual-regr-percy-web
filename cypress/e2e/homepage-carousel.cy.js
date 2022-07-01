describe("HOME PAGE IMAGE CAROUSEL SNAPSHOT", () => {
  it("load home page", () => {
    cy.baseUrl();
  });

  it("snapshot each image on carousel", () => {
    let genArr = Array.from({ length: 3 }, (v, k) => k + 1);

    cy.wrap(genArr).each((index) => {
      cy.get(".item.active > img")
        .should("be.visible")
        .should("have.attr", `src`)
        .should("include", `/resources/img/main_carousel_${index}.jpg`);
      cy.percySnapshot(`Landing page carousel image ${index}`);
      cy.get(".carousel-control.custom.right").click();
    });
  });
});
