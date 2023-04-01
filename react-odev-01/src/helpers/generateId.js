//function is generating a random 32-bit integer using "crypto" module
export function generateId() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0];
}