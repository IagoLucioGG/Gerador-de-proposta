new Vue({
    el: '#app',
    data: {
        showForm: true,
        showProposta: false,
        form1: {
            nome: 'Iago Lucio Pereira de carvalho',
            telefone: '22 992147015',
            endereco: ' Rua Alvaro paná 1350, fonte santa. Teresópolis, RJ.',
            mediaKw: '200',
            data: '19/05/2024',
            tipoLuz: 'R$',
            KWH: null,
        },
        form: {
            nome: '',
            telefone: '',
            endereco: '',
            mediaKw: '',
            data: '',
            tipoLuz: 'R$',
            KWH: '',
        }
    },
    watch: {
        'form.mediaKw': function (newVal, oldVal) {
            this.calculaValor();
        },
        'form.tipoLuz': function (newVal, oldVal) {
            this.calculaValor();
        }
    },
    methods: {
        handleSubmit() {
            this.showForm = false;
            this.showProposta = true;
        },
        toggleView() {
            this.showForm = !this.showForm;
            this.showProposta = !this.showProposta;
        },
        mediaLuz(tipo) {
            this.form.tipoLuz = tipo;
        },
        printProposal() {

            const element = document.getElementById('proposal');
            
            if (element) {
                const fileName = `Proposta_${this.form.nome || 'SemNome'}_${this.form.data}.pdf`; 
                
                html2pdf(element, {
                    filename: fileName
                });

            } else {
                console.error('Element with ID "proposal" not found.');
            }
        },
        calculaValor() {

            if (this.form.tipoLuz === 'R$') {
                this.form.KWH = this.form.mediaKw / 0.45; 

            } else if (this.form.tipoLuz === 'KWH') {
                this.form.KWH = this.form.mediaKw; 
            }
        }
    }
});
