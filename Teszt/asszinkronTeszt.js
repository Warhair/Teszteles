import Aszinkron from "../js/asszinkron.js";

QUnit.test("adatBe metódus tesztje",(assert) =>{
    const done = assert.async();
    const assinkron = new Aszinkron();
    const vegpont = "../adatok.json";
    const callbackFuggvenyen = function (data){
        assert.deepEqual(data,{
            szemelyek:[
                {
                    kor: 56,
                    nem: "ffi",
                    nev: "Béla",
                },
                {
                    kor: 16,
                    nem: "ffi",
                    nev: "Jenő",
                },
                {
                    kor: 33,
                    nem: "nő",
                    nev: "Rózsa",

                },
            ],
        });
        done();
    };

    assinkron.adatBe(vegpont, callbackFuggvenyen);
});