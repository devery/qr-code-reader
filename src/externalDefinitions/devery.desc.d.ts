declare module "@devery/devery" {

    export interface Product {
        active: boolean;
        brandAccount: string;
        details: string;
        origin: string;
        productAccount: string;
        description: string
    }

    export class DeveryRegistry {
        constructor({ networkId: string });
        check(address: string): Promise<{ productAccount: string }>;
        getProduct(productAccount: string): Promise<Product>;
    }

    export type NetworkValues = 1 | 5;
}
