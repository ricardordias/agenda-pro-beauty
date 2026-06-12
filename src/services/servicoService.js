const servicoModel = require("../models/servicoModel");

class servicoService {
    static async getAllServicos() {
        return await servicoModel.findAll();
    }

    static async createServico(servico) {
        const existingServico = await servicoModel.findByServico(servico.nomeServico);
        if (existingServico) {
            throw new Error("Serviço já cadastrado.");
        }
        return await servicoModel.create(servico);
    }

    static async updateServico(id, servico) {
        const updatedRows = await servicoModel.update(id, servico);
        if (updatedRows === 0) {
            throw new Error(`Serviço não encontrado.`);
        }
        return updatedRows;
    }

    static async deleteServico(id) {
        const deletedRows = await servicoModel.delete(id);
        if (deletedRows === 0) {
            throw new Error(`Serviço não encontrado.`);
        }
        return deletedRows;
    }
}

module.exports = servicoService;