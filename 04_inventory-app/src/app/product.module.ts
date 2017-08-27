
export class Product {
    public sku: string;
    public name: string;
    public imageUrl: string;
    public department: string[];
    public price: number;

    constructor(
        sku: string,
        name: string,
        imageUrl: string,
        department: string[],
        price: number) {
        this.sku = sku || '';
        this.name = name || '';
        this.imageUrl = imageUrl || '/assets/images/products/black-shoes.jpg';
        this.department = department || [];
        this.price =price;
    }
}

