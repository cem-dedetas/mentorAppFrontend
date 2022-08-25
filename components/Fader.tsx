interface FaderProps {
    key : string;
    color : string;
    direction : 'top' | 'left' | 'bottom' | 'right';
    className? : string;
}

const Fader = ({ key, children, color, direction, className } : React.PropsWithChildren<FaderProps>) => {

    const hexToCssHsl = (hex : string, valuesOnly = false) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if(!result) return;
        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);
        let cssString = '';
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = (max + min) / 2;
        let s = (max + min) / 2;
        let l = (max + min) / 2;
        if(!h || !s || !l) return;
        if (max == min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }
        
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        
        cssString = h + ',' + s + '%,' + l + '%';
        return cssString;
    }

    const getFaderString = () => {
        const hslString = hexToCssHsl(color);
        const hsl = `linear-gradient(to ${direction},hsla(${hslString},0) 0,hsla(${hslString},.15) 15%,hsla(${hslString},.35) 29%,hsla(${hslString},.58) 44%,${color} 68%,${color})`;
        return hsl;
    }

    return (
        <div 
            key = {key}
            style={{
                backgroundColor:'transparent !important', 
                backgroundImage: getFaderString(),
            }}
            className={className}
        >
            {children}
        </div>
    );
}


export default Fader;