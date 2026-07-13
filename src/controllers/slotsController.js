const slotsService = require("../services/slotsService");
const servicoModel = require("../models/servicoModel");

class slotsController {
    static async consultarDisponibilidade(req, res) {
        try {
            const { data, servico_id } = req.query;
            const servico = await servicoModel.findByServico(servico_id);
            if (!servico) {
                return res.status(404).json({ error: "Serviço não encontrado." });
            }
            const slots = await slotsService.consultarDisponibilidade(servico.profissional_id, data);
            res.json(slots);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = slotsController;