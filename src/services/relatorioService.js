const relatorioModel = require("../models/relatorioModel");

class relatorioService {
    static async getTotalAgendamentos() {
        const result = await relatorioModel.getTotalAgendamentos();
        return {
            totalAgendamentos: Number(result?.totalAgendamentos ?? 0)
        };
    }

    static async getServicosMaisSolicitados() {
        const servicos = await relatorioModel.getServicosMaisSolicitados();
        return {
            servicosMaisSolicitados: servicos.map((servico) => ({
                id: servico.id,
                nomeServico: servico.nomeServico,
                totalSolicitacoes: Number(servico.totalSolicitacoes)
            }))
        };
    }

    static async getProfissionaisMaisRequisitados() {
        const profissionais = await relatorioModel.getProfissionaisMaisRequisitados();
        return {
            profissionaisMaisRequisitados: profissionais.map((profissional) => ({
                id: profissional.id,
                nomeProfissional: profissional.nomeProfissional,
                totalRequisicoes: Number(profissional.totalRequisicoes)
            }))
        };
    }
}

module.exports = relatorioService;
