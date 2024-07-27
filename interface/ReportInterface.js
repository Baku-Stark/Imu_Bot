class ReportInterface{
    constructor(id_usuario, text_report){
        this.id_usuario = id_usuario
        this.text_report = text_report
    }

    toString() {
        return `User Reported(ID de Usuário: ${this.id_usuario}, Texto: ${this.text_report})`;
    }
}

module.exports = ReportInterface