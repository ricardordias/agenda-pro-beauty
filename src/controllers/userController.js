const userService = require("../services/userService");

class userController {
    static async getAll(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const id = await userService.createUser(req.body);
            res.status(201).json({ message: `Usuário criado com sucesso.`, id });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            await userService.updateUser(id, req.body);
            res.json({ message: `Usuário atualizado com sucesso.` });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await userService.deleteUser(id);
            res.json({ message: `Usuário deletado com sucesso.` });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = userController;