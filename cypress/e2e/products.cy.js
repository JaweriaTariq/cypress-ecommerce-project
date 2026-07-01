import productsPage from '../pages/ProductsPage';
import inventoryItems from '../fixtures/inventory.json';

describe("Products Page Tests", () => {

    beforeEach(() => {
        cy.login();
    });

    it('Add Sauce Labs Backpack to cart', () => {
        //cy.visit('/inventory.html');
        productsPage.verifyItem(inventoryItems.inventoryItems.item1);
        productsPage.addToCart(inventoryItems.inventoryItems.item1);
        productsPage.verifyCartBadge(1);
    });

});