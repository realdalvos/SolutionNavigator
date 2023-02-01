function hatFehler(string1: string, string2: string): boolean {
    if (string1.length !== string2.length) {
        return true;
    }
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            return true;
        }
    }
    return false;
}

const mistakeDetected = hatFehler("hallo", "halo");
console.log(mistakeDetected); // true