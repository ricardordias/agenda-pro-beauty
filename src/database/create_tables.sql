USE probeautydb;

DROP TABLE IF EXISTS tb_areas;

CREATE TABLE tb_areas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeArea VARCHAR(100) NOT NULL UNIQUE,
    descricaoArea VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS tb_usuarios;

CREATE TABLE tb_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeUsuario VARCHAR(100) NOT NULL,
    emailUsuario VARCHAR(100) NOT NULL UNIQUE,
    senha_hash VARCHAR(100) NOT NULL,
    perfil VARCHAR(100) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS tb_profissionais;

CREATE TABLE tb_profissionais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeProfissional VARCHAR(100) NOT NULL,
    especialidade VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS tb_servicos;

CREATE TABLE tb_servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    area_id INT NOT NULL,
    FOREIGN KEY (area_id) REFERENCES tb_areas(id),
    nomeServico VARCHAR(100) NOT NULL,
    duracao_min INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

DROP TABLE IF EXISTS tb_status_agendamento;

CREATE TABLE tb_status_agendamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeStatus VARCHAR(100) NOT NULL,
    descricaoStatus VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS tb_agendamentos;

CREATE TABLE tb_agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES tb_usuarios(id),
    profissional_id INT NOT NULL,
    FOREIGN KEY (profissional_id) REFERENCES tb_profissionais(id),
    servico_id INT NOT NULL,
    FOREIGN KEY (servico_id) REFERENCES tb_servicos(id),
    status_id INT NOT NULL,
    FOREIGN KEY (status_id) REFERENCES tb_status_agendamento(id),
    data_hora_inicio DATETIME NOT NULL,
    data_hora_fim DATETIME NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS tb_horarios_trabalho;

CREATE TABLE tb_horarios_trabalho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profissional_id INT NOT NULL,
    FOREIGN KEY (profissional_id) REFERENCES tb_profissionais(id),
    dia_semana INT NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL
);

DROP TABLE IF EXISTS tb_horarios_bloqueados;

CREATE TABLE tb_horarios_bloqueados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profissional_id INT NOT NULL,
    FOREIGN KEY (profissional_id) REFERENCES tb_profissionais(id),
    inicio DATETIME NOT NULL,
    fim DATETIME NOT NULL,
    motivo VARCHAR(100) NOT NULL
);