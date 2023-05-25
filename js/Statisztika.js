class Statisztika {
   
    constructor(lista) {
        this.lista = lista;
        console.log(lista);
    }
    
    nemszerintSzama(nem) {
        let db = 0;
        this.lista.forEach((element) => {
            if (element.nem === nem) {
                db++;
            }
        });
        console.log(db);
        return db;
    }
    atlagEletkor() {
        let atlag = 0;
        this.lista.forEach((element) => {
            atlag += element.kor;
        });
        console.log(atlag / this.lista.length);
        return atlag / this.lista.length;
    }
    nemszerintAtlagEletkora(nem) {
        let atlag = 0;
        let db = 0;
        this.lista.forEach((element) => {
            if (element.nem === nem) {
                atlag += element.kor;
                db++;
            }
        });
        console.log(atlag / db);
        return atlag / db;
    }
}
export default Statisztika;