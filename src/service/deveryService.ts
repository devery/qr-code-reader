import { DeveryRegistry, NetworkValues } from "@devery/devery";


const networkNames = { "1": "Main", "5": "Goerli" }

export const loadProduct = async (productId: string, networkId: NetworkValues) => {
    console.log("loadProduct", productId, networkId)
    try {
        const deveryRegistry = new DeveryRegistry({ networkId });
        const product = await deveryRegistry.getProduct(productId);
        if (!product.active) {
            throw new Error("Product is not active");
        }
        return product;
    }
    catch (e) {
        console.log("loadProduct error", e)
        throw e
    }
}


export const toggleNetwork = (networkId: NetworkValues) => {
    return networkId === 1 ? 5 : 1
}

export const getNetworkNames = (networkId: NetworkValues) => {
    return networkNames[`${networkId}`]
}