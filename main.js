function DonoDOCao (dono) {
    this.dono = dono;
    this.veterinario = function(){
        console.log(this.dono + " gostaria deixar o cão no veterinario" )
    }
    this.dizPorte = function(){
        console.log(this.porte + " porte")
    }
}

function Cao (dono , peso, pagamento , porte) {
    this.peso = peso;
    this.porte = porte
    let _pagamento = pagamento;

    this.getPagamento = function() {
        return _pagamento;
    }

    this.setPorte = function(valor){
        if (typeof valor === 'number'){
        _pagamento = valor
        }
    }

    this.medioPorte = function() {
        const valorAdicional = _pagamento * 1.2;
        this.setPorte(valorAdicional);
    }

    DonoDOCao.call(this, dono);
}

function PorteGrande(nome, peso, pagamento) {
    Cao.call(this, nome, peso, pagamento, "Grande");

    this.medioPorte = function() {
        const valorAdicional = this.getPagamento() * 1.5;
        this.setPorte(valorAdicional);
    }

}

function PortePequeno(nome, peso, pagamento) {
    Cao.call(this, nome, peso, pagamento, "Grande");

    this.medioPorte = function() {
        const valorAdicional = this.getPagamento() * 1;
        this.setPorte(valorAdicional);
    }

}

const cao1 = new PorteGrande("Douglas" , 10 , 130);
const cao2 = new Cao("Pamela" , 5, 100 , "Medio");
const cao3 = new PortePequeno("Santos" , 2, 200);


cao1.medioPorte();
console.log(cao1.getPagamento())


cao2.medioPorte();
console.log(cao2.getPagamento())

cao3.medioPorte();
console.log(cao3.getPagamento())