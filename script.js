new Vue({
    el: '#app',
    data: {
        showForm: false,
        showProposta: true,
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
    computed: {
        calculaValor() {
            if (this.tipoLuz == 'R$') {
                this.KWH = this.mediaKw / 0.45; // Exemplo de cálculo para uso baixo
            } else {
                this.KWH = this.mediaKw; // Exemplo de cálculo para uso alto
            }
        },
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
                const fileName = `PropostaComercial_${this.form.nome || 'SemNome'}.pdf`; // Usar 'SemNome' se o campo nome estiver vazio
                html2pdf(element, {
                    filename: fileName
                });
            } else {
                console.error('Element with ID "proposal" not found.');
            }
        }

    }
});
