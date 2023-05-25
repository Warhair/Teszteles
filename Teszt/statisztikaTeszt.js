import Statisztika from "../js/Statisztika.js";


QUnit.module("Statisztika ellenőrzése", function(hooks){
        let statisztika;
        hooks.before(() => {
           statisztika = new Statisztika();
        });
    QUnit.test("nemszerintSzama egyenlet letezik e", function(assert) {
        assert.ok(statisztika.nemszerintSzama, "Létezik a leptetes");
      }); 

    QUnit.test("nemszerintSzama egyenlet fügvény e", function(assert) {
        assert.ok(typeof statisztika.nemszerintSzama == "function", "a leptetes fuggvény");
      });
      QUnit.test("atlagEletkor egyenlet letezik e", function(assert) {
        assert.ok(statisztika.atlagEletkor, "Létezik a leptetes");
      }); 

    QUnit.test("atlagEletkor egyenlet fügvény e", function(assert) {
        assert.ok(typeof statisztika.atlagEletkor == "function", "a leptetes fuggvény");
      });
      QUnit.test("nemszerintAtlagEletkora egyenlet letezik e", function(assert) {
        assert.ok(statisztika.nemszerintAtlagEletkora, "Létezik a leptetes");
      }); 

    QUnit.test("nemszerintAtlagEletkora egyenlet fügvény e", function(assert) {
        assert.ok(typeof statisztika.nemszerintAtlagEletkora == "function", "a leptetes fuggvény");
      });
    });
QUnit.module("Statisztika ellenőrzése", function(hooks){
        let statisztika;
        hooks.before(() => {
           statisztika = new Statisztika();
        });
    QUnit.test("ures lista", function (assert){
        statisztika.lista= ["","","","","","","","",""];
        assert.equal(statisztika.nemszerintSzama("nő"),"");
    })
    QUnit.test("ures lista", function (assert){
        statisztika.lista= ["","","","","","","","",""];
        assert.equal(statisztika.nemszerintSzama("ffi"), 0);
    })
    QUnit.test("no lista", function (assert){
        statisztika.lista= [{nem: "no"},{nem: "no"},{nem: "no"},{nem: "no"}];
        assert.equal(statisztika.nemszerintSzama("no"), 4);
    })
    QUnit.test("ferfi lista", function (assert){
        statisztika.lista= [{nem: "ffi"},{nem: "ffi"},{nem: "ffi"},{nem: "ffi"}];
        assert.equal(statisztika.nemszerintSzama("ffi"), 4);
    })
    QUnit.test("egyeb lista", function (assert){
        statisztika.lista= [{nem: "ffi"},{nem: "so"},"","","","","","",""];
        assert.equal(statisztika.nemszerintSzama("ffi"), 1);
    })
    QUnit.test("atlagEletkor", function (assert){
        statisztika.lista= [{kor: 4},{kor: 3},{kor: 4},{kor: 3}];
        assert.equal(statisztika.atlagEletkor(), 3.5);
    })
    QUnit.test("atlagEletkor", function (assert){
        statisztika.lista= [{kor: -2},{kor: 2},{kor: 2},{kor: 2}];
        assert.equal(statisztika.atlagEletkor(), 1);
    })
    QUnit.test("atlagEletkor", function (assert){
        statisztika.lista= [{kor: -2},{kor: 2},{kor: 2},{kor: ""},];
        assert.equal(statisztika.atlagEletkor(), 0.5);
    })
    
    
    QUnit.test("nemszerintAtlagEletkora", function (assert){
        statisztika.lista= [{nem: "ffi",kor: -2},{nem: "ffi",kor: 2},{nem: "ffi",kor: 2},{nem: "ffi",kor: 2}];
        assert.equal(statisztika.nemszerintAtlagEletkora("ffi"), 1);
    })
    QUnit.test("atlagnemszerintAtlagEletkoraEletkor", function (assert){
        statisztika.lista= [{nem: "no",kor: -2},{nem: "no",kor: 2},{nem: "no",kor: 2},{nem: "no",kor: 2}];
        assert.equal(statisztika.nemszerintAtlagEletkora("no"), 1);
    })
    QUnit.test("atlagnemszerintAtlagEletkoraEletkor", function (assert){
        statisztika.lista= [{nem: "no",kor: -2},{nem: "no",kor: 2},{nem: "no",kor: 2},{nem: "no",kor: 2}];
        assert.equal(statisztika.nemszerintAtlagEletkora("no"), 1);
    })
    QUnit.test("atlagnemszerintAtlagEletkoraEletkor", function (assert){
        statisztika.lista= [{nem: "ferfi",kor: -2},{nem: "ferfi",kor: 2},{nem: "no",kor: 2},{nem: "no",kor: 2}];
        assert.equal(statisztika.nemszerintAtlagEletkora("no"), 2);
    })
    QUnit.test("atlagnemszerintAtlagEletkoraEletkor", function (assert){
        statisztika.lista= [{nem: "",kor: -2},{nem: "no",kor: 2},{nem: "no",kor: 2},{nem: "no",kor: 2}];
        assert.equal(statisztika.nemszerintAtlagEletkora("egyeb"), "");
    })
    
    QUnit.test("nemszerintAtlagEletkora", function (assert){
        statisztika.lista= ["","","","","","","","",""];
        assert.equal(statisztika.nemszerintAtlagEletkora("no"), "");
    });
    QUnit.test("nemszerintAtlagEletkora", function (assert){
        statisztika.lista= ["","","","","","","","",""];
        assert.equal(sstatisztika.nemszerintAtlagEletkora("ferfi"), "");
    });
    QUnit.test("nemszerintAtlagEletkora", function (assert){
        statisztika.lista= ["","","","","","","","",""];
        assert.equal(statisztika.nemszerintAtlagEletkora("egyeb"), "");
    });
    QUnit.test("nemszerintAtlagEletkora", function (assert){
        statisztika.lista= ["","","","","","","","",""];
        assert.equal(statisztika.atlagEletkor(), "");
    });
});
