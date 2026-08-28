const relatorioService = require("../services/relatorioService");

class relatorioController {
    static async totalAgendamentos(req, res) {
        try {
            const relatorio = await relatorioService.getTotalAgendamentos();
            return res.status(200).json(relatorio);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async servicosMaisSolicitados(req, res) {
        try {
            const relatorio = await relatorioService.getServicosMaisSolicitados();
            return res.status(200).json(relatorio);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async profissionaisMaisRequisitados(req, res) {
        try {
            const relatorio = await relatorioService.getProfissionaisMaisRequisitados();
            return res.status(200).json(relatorio);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = relatorioController;
