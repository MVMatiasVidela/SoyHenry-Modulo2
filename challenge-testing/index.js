class CarritoCompra {
constructor (){
   this.products =[];
}
agregarProducto (product) {
    this.products.push(product);
}

calcularTotal (){
    let total = 0;
    for (const product of this.products){
        total = total + product.price;
    }
   return total;
}

aplicarDescuento (porcent){
const total = this.calcularTotal ();
const discount = porcent / 100* total;
return total - discount;
}

}





module.exports = CarritoCompra;