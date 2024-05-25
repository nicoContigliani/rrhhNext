import * as jwt from 'jsonwebtoken';

export const jwtDecodes = async (token: string, secretKey: string): Promise<object | undefined> => {
    try {
        console.log("***********************", token, "***********", secretKey)
        const tokenValido: any | undefined | string = jwt.verify(token, 'simon');
        console.log("🚀 ~ jwtDecodes ~ tokenValido:", tokenValido)

        return tokenValido;
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return undefined; // Indicate decoding failure
    }
};