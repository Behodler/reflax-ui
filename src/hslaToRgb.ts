
const brand = {
    50: 'hsl(0, 100%, 97%)',
    100: 'hsl(0, 92%, 90%)',
    200: 'hsl(0, 94%, 80%)',
    300: 'hsl(0, 90%, 65%)',
    400: 'hsl(0, 90%, 40%)',
    500: 'hsl(0, 90%, 30%)',
    600: 'hsl(0, 91%, 25%)',
    700: 'hsl(0, 94%, 18%)',
    800: 'hsl(0, 95%, 12%)',
    900: 'hsl(0, 93%, 6%)',
};
function hslToRgb(hsl: string): string {
    // Define regex pattern for HSL(A)
    const regex = /^hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\s*(,\s*([\d.]+))?\)$/;
    const match = hsl.match(regex);

    if (!match) {
        throw new Error("Invalid HSL(A) format");
    }

    // Parse H, S, L, and optional Alpha values
    const h: number = parseInt(match[1], 10);
    const s: number = parseFloat(match[2]) / 100;
    const l: number = parseFloat(match[3]) / 100;
    const alpha: number = match[5] ? parseFloat(match[5]) : 1;

    // Helper function for converting hue to RGB
    const hueToRgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    let r: number, g: number, b: number;

    // Calculate RGB values
    if (s === 0) {
        r = g = b = l; // Achromatic
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hueToRgb(p, q, h / 360);
        g = hueToRgb(p, q, h / 360 + 1 / 3);
        b = hueToRgb(p, q, h / 360 - 1 / 3);
    }

    // Convert RGB values to 0-255 range
    const red: number = Math.round(r * 255);
    const green: number = Math.round(g * 255);
    const blue: number = Math.round(b * 255);

    // Return formatted RGB or RGBA string based on alpha
    return alpha < 1 ? `rgba(${red}, ${green}, ${blue}, ${alpha})` : `rgb(${red}, ${green}, ${blue})`;
}

interface ColorMap {
    [key: number]: string
}
(() => {
    const flexibleBrand = brand as ColorMap
    const keysOfBrand = Object.keys(brand as ColorMap);
    const brand_rgb = {} as ColorMap
    keysOfBrand.map(key => parseInt(key)).forEach((key: number) => {
        const currentBrandHSL = flexibleBrand[key]
        const rgb = hslToRgb(currentBrandHSL)
        brand_rgb[key] = rgb
    })

    console.log(JSON.stringify(brand_rgb, null, 4))
})()

// // Example usage
// console.log(hslToRgb("hsl(210, 100%, 95%)"));    // Output: rgb(242, 247, 255)
// console.log(hslToRgb("hsla(210, 100%, 95%, 0.5)")); // Output: rgba(242, 247, 255, 0.5)
