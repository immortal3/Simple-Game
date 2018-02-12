function car(name,price,qty){

    this.name = name;
    this.price = price;
    this.qty = qty;
    this.totalprice = totalprice;

    function totalprice()
    {
      return (this.qty*this.price);
    }

}


audi = new car('audi',10,2);
console.log(audi.totalprice());
document.write(audi.totalprice());
