import {Products, ProductsManagement} from "./products.js";
class Ui {
    constructor() {
        this.uiName = document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm = document.getElementById("form-data");
        this.container = document.getElementById("container-table");
        this.manager =  new ProductsManagement();
        let p1 = new Products("Pollo", "Pollo Sofia", 20);
        let p2 = new Products("Galletas", "Galleras Mabel", 50);
        let p3 = new Products("Pollo", "Pollo Imba", 50);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
        this.loadEvents();
    }
    loadEvents() {
        this.uiForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
        });
    }
    clearForm() {
                this.uiName.value = "";
                this.uiDescription.value = ""
                this.uiQuantity.value = ""
    }
    loadTable() {
        var html = "";
        for (var i = 0; i < this.manager.showProducts().length; i++) {
            html += `
            <tr>
                <td scope="row">
                ${this.manager.showProducts()[i].name}</td>
                <td>${this.manager.showProducts()[i].description}</td>
                <td>${this.manager.showProducts()[i].quantity}</td>
            </tr>`;
        }
        this.container.innerHTML = html;
    }
    addProducts(name, description, quantity) {
        let p1 = new Products(name, description, quantity);
        this.manager.addProducts(p1);
        this.loadTable();

    }


    // Practica 2
    actualizarProducto(name, description, quantity, newName, newDescription, newQuantity) {
        let product = new Products(name, description, quantity);
        let newProduct = new Products(newName, newDescription, newQuantity);
        this.manager.updateProducts(product, newProduct);
        this.loadTable();
    }

    eliminarProducto(name, description, quantity) {
        let product = new Products(name, description, quantity);
        this.manager.removeProducts(product);
        this.loadTable();
    }
}
let ui = new Ui();
ui.loadTable();
