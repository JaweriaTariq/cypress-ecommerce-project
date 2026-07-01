class ProductsPage {

    inventoryItem(itemName) {
        return cy.contains('[data-test="inventory-item-name"]', itemName);
    }

    verifyItem(itemName) {
        this.inventoryItem(itemName).should('be.visible');
    }

    addToCart(itemName) {
        const slug = itemName
            .toLowerCase()
            .replace(/\s+/g, '-');

        cy.get(`[data-test="add-to-cart-${slug}"]`).click();
    }

    verifyCartBadge(count) {
        cy.get('[data-test="shopping-cart-badge"]')
            .should('have.text', count.toString());
    }
}

export default new ProductsPage();