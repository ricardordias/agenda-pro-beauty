const db = require("../config/database");

class userModel {
    static async findAll() {
        const [rows] = await db.query("SELECT * FROM tb_usuarios");
        return rows;
    }

    static async findByEmail(emailUsuario) {
        const [rows] = await db.query("SELECT * FROM tb_usuarios WHERE emailUsuario = ?", [emailUsuario]);
        return rows[0];
    }

    static async create(user) {
        const { nomeUsuario, emailUsuario, senha_hash, perfil } = user;
        const [result] = await db.query("INSERT INTO tb_usuarios (nomeUsuario, emailUsuario, senha_hash, perfil) VALUES (?, ?, ?, ?)", [nomeUsuario, emailUsuario, senha_hash, perfil]);
        return result.insertId;
    }

    static async update(id, user) {
        const { nomeUsuario, emailUsuario, senha_hash, perfil } = user;
        const [result] = await db.query("UPDATE tb_usuarios SET nomeUsuario = ?, emailUsuario = ?, senha_hash = ?, perfil = ? WHERE id = ?", [nomeUsuario, emailUsuario, senha_hash, perfil, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const [result] = await db.query("DELETE FROM tb_usuarios WHERE id = ?", [id]);
        return result.affectedRows;
    }
}

module.exports = userModel;