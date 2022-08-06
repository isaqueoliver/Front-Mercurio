export class CurrencyUtils {

    public static StringParaDecimal(input: string): number | null {
        if (input === null) return 0;

        input = input.replace(/\./g, '');
        input = input.replace(/,/g, '.');
        return parseFloat(input);
    }

    public static DecimalParaString(input: number): string | null {
        var ret = (input) ? input.toString().replace(".", ",") : null;
        if (ret) {
            var decArr = ret.split(",");
            if (decArr.length > 1) {
                var dec = decArr[1].length;
                if (dec === 1) { ret += "0"; }
            }
        }
        return ret;
    }
}