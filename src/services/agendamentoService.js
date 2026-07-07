const agendamentoModel = require("../models/agendamentoModel");

class agendamentoService {
    static async getAllAgendamentos() {
        return await agendamentoModel.findAll();
    }

    static async createAgendamento(agendamento) {
        return await agendamentoModel.create(agendamento);
    }

    static async updateAgendamento(id, agendamento) {
        const updatedRows = await agendamentoModel.update(id, agendamento);
        if (updatedRows === 0) {
            throw new Error(`Agendamento não encontrado.`);
        }
        return updatedRows;
    }

    static async deleteAgendamento(id) {
        const deletedRows = await agendamentoModel.delete(id);
        if (deletedRows === 0) {
            throw new Error(`Agendamento não encontrado.`);
        }
        return deletedRows;
    }
}

module.exports = agendamentoService;