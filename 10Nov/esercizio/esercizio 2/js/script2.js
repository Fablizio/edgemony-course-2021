function avanzCalculator(numbers) {
    try {
        if (numbers.length === 1) throw "errore: Hai passato un solo valore"
        if (numbers.length === 0) throw "Nessun parametro passato alla funzione"

        const sum = () => numbers.reduce((acc, num) => acc + num);
        const sub = () => numbers.reduce((acc, num) => acc - num);
        const mul = () => numbers.reduce((acc, num) => acc * num);
        const div = () => numbers.reduce((acc, num) => acc / num);
        const potenz = () => numbers.map(num => num * num);
        const radic = () => numbers.map(num => Math.sqrt(num));
        return {
            sum: sum(),
            sub: sub(),
            mul: mul(),
            div: div(),
            potenz: potenz(),
            rad: radic()
        }
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Hai fatto la tua scelta.");
    }

}
