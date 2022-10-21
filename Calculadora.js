class Calculadora {

	constructor(){
		this.memory = 0;
	}

    showMemory()
    {
    	if(this.memory != 0){
    		this.dis(this.memory);
    	}
    }

    dis(val)
    {
    	document.getElementById("result").value+=val;
    }

    resolver()
    {
    	let x = document.getElementById("result").value; 
        try{
            let y = eval(x);
            document.getElementById("result").value = y;
        } catch(e){
        	alert(e.message);
            this.clr();
        }
    }

    clr()
    {
    	document.getElementById("result").value = "";
    }
}

class CalculadoraSimple extends Calculadora {
	clearMemory() {
        this.memory = 0;
    }

    showDisplay(val) {
        document.getElementById("result").value = val;
    }

    xp2() {
        try{
            let disp = document.getElementById("result").value;
            let x = eval(disp) * eval(disp);
            this.showDisplay(x)
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }

    xp3() {
        try{
            let disp = document.getElementById("result").value;
            let x = eval(disp) * eval(disp) * eval(disp);
            this.showDisplay(x)
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }
    
    tenXp() {
        try{
            let disp = document.getElementById("result").value;
            let x = 10**eval(disp);
            this.showDisplay(x)
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }

    log() {
        let x = Math.log(document.getElementById("result").value);
        this.showDisplay(x);
    }

    squareRoot() {
        let x = Math.sqrt(document.getElementById("result").value);
        this.showDisplay(x);
    }

    changeSign() {
        try {
            let val = eval(document.getElementById("result").value);
            document.getElementById("result").value = eval(-val);
        } catch(e){
            alert(e.message);
            this.clr();
        }
    }

    deletarUltimo() {
        let x = document.getElementById("result").value;
        document.getElementById("result").value = x.substring(0, x.length-1);
    }

    factorial() {
        let x = document.getElementById("result").value;
        document.getElementById("result").value = this.factorialRecursivo(x);
    }

    factorialRecursivo(n) {
        try {
            if (n === 0) {
                return 1;
            }
            return n * this.factorialRecursivo(n - 1);
        } catch (e) {
            return Infinity;
        }
    }

    clrE() {
        const display = document.getElementById("result");
        const limit = display.value.length - 1;
        for (let i = limit; i >= 0; i--) {
            let value = display.value[i];
            if (/^([^0-9]*)$/.test(value)) {
                display.value = display.value.substring(0, i);
                break;
            }
        }
    }
}

var calculadora = new CalculadoraSimple();