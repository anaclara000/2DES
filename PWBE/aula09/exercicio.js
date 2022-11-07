class Leaf{
    constructor(price , name){
        this.price = price;
        this.name = name;
    }
    showPrice(){
        return "Componemtes:  " + this.name + ",  " + this.price;
    }
}
class Component {
static components = [];
}
class Composite {
static composites = [];
constructor(name){
    this.name = name;
}
showPrice2(){
    return "Composite:  " + this.name;
}
}        
Component.components.push(new Leaf(450,"HDD"));
Component.components.push(new Leaf(14,"Mouse"));
Component.components.push(new Leaf(350,"Monitor"));
Component.components.push(new Leaf(275,"RAM"));
Component.components.push(new Leaf(480,"CPU"));
Composite.composites.push(ph = new Composite("Perifericos"));
Composite.composites.push(cabinet = new Composite("Gabinete"));
Composite.composites.push(mb = new Composite("Placa Mãe"));
Composite.composites.push(computer = new Composite("Computador"));
// ph.addComponent(mouse);
// ph.addComponent(monitor);
// mb.addComponent(cpu);
// mb.addComponent(ram);
// cabinet.addComponent(mb);
// cabinet.addComponent(hd);
// computer.addComponent(ph);
// computer.addComponent(cabinet);
Component.components.forEach(e => {
console.log(e.showPrice());
});
Composite.composites.forEach(e => {
console.log(e.showPrice2());
});