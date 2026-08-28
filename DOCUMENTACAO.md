# Endpoints da API — AgendaPro Beauty

Base URL: `http://localhost:3000`

> Observação: todas as rotas protegidas exigem o header `Authorization: Bearer <token>`.

## 1. Rotas públicas

### GET /public/home
- Método: `GET`
- Parâmetros: nenhum
- Descrição: retorna a mensagem inicial da API pública.

Exemplo de resposta:

```json
"Bem-vindo à API pública!"
```

---

## 2. Autenticação

### POST /auth/register
- Método: `POST`
- Parâmetros: nenhum na URL
- Corpo da requisição:

```json
{
  "nomeUsuario": "Usuário novo",
  "emailUsuario": "novo@email.com",
  "senha_hash": "senha123",
  "perfil": "cliente"
}
```

Exemplo de resposta:

```json
{
  "message": "Usuário registrado com sucesso.",
  "id": 12
}
```

### POST /auth/login
- Método: `POST`
- Parâmetros: nenhum na URL
- Corpo da requisição:

```json
{
  "emailUsuario": "admin@probeauty.com",
  "senha_hash": "senha123"
}
```

Exemplo de resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "nome": "Administrador",
    "email": "admin@probeauty.com",
    "perfil": "admin"
  }
}
```

---

## 3. Rotas protegidas

### GET /protected/dashboard
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Bem-vindo ao painel, Ana Silva"
}
```

### GET /protected/admin
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Bem-vindo à área admin, Administrador"
}
```

---

## 4. Usuários

### GET /users
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nomeUsuario": "Administrador",
    "emailUsuario": "admin@probeauty.com",
    "perfil": "admin",
    "criado_em": "2026-08-27T12:00:00.000Z"
  }
]
```

### POST /users
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "nomeUsuario": "Maria Souza",
  "emailUsuario": "maria@email.com",
  "senha_hash": "senha123",
  "perfil": "cliente"
}
```

Exemplo de resposta:

```json
{
  "message": "Usuário criado com sucesso.",
  "id": 7
}
```

### PUT /users/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "nomeUsuario": "Maria Souza",
  "emailUsuario": "maria.nova@email.com",
  "senha_hash": "novaSenha123",
  "perfil": "cliente"
}
```

Exemplo de resposta:

```json
{
  "message": "Usuário atualizado com sucesso."
}
```

### DELETE /users/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Usuário deletado com sucesso."
}
```

---

## 5. Profissionais

### GET /profissionais
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nomeProfissional": "Juliana Mendes",
    "especialidade": "Cabeleireira",
    "telefone": "(11) 91234-5678",
    "ativo": true
  }
]
```

### POST /profissionais
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "nomeProfissional": "Laura Costa",
  "especialidade": "Esteticista",
  "telefone": "(11) 99876-5432",
  "ativo": true
}
```

Exemplo de resposta:

```json
{
  "message": "Profissional criado com sucesso.",
  "id": 7
}
```

### PUT /profissionais/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Profissional atualizado com sucesso."
}
```

### DELETE /profissionais/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Profissional deletado com sucesso."
}
```

---

## 6. Áreas

### GET /areas
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nomeArea": "Cabelo",
    "descricaoArea": "Servicos capilares: cortes, coloracao, tratamentos"
  }
]
```

### POST /areas
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "nomeArea": "Spa",
  "descricaoArea": "Serviços de bem-estar e relaxamento"
}
```

Exemplo de resposta:

```json
{
  "message": "Área criada com sucesso.",
  "id": 6
}
```

### PUT /areas/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Área atualizada com sucesso."
}
```

### DELETE /areas/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Área deletada com sucesso."
}
```

---

## 7. Serviços

### GET /servicos
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "area_id": 1,
    "nomeServico": "Corte Feminino",
    "duracao_min": 45,
    "preco": "80.00"
  }
]
```

### GET /servicos/area/:area_id
- Método: `GET`
- Parâmetros:
  - `area_id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "area_id": 1,
    "nomeServico": "Corte Feminino",
    "duracao_min": 45,
    "preco": "80.00"
  },
  {
    "id": 2,
    "area_id": 1,
    "nomeServico": "Corte Masculino",
    "duracao_min": 30,
    "preco": "50.00"
  }
]
```

### POST /servicos
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "area_id": "1",
  "nomeServico": "Corte de Cabelo Masculino",
  "duracao_min": "30",
  "preco": "25.00"
}
```

Exemplo de resposta:

```json
{
  "message": "Serviço criado com sucesso.",
  "id": 20
}
```

### PUT /servicos/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Serviço atualizado com sucesso."
}
```

### DELETE /servicos/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Serviço deletado com sucesso."
}
```

---

## 8. Status de agendamento

### GET /status_agendamento
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nomeStatus": "Pendente",
    "descricaoStatus": "Aguardando confirmacao"
  }
]
```

### GET /status_agendamento/:id
- Método: `GET`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "id": 2,
  "nomeStatus": "Confirmado",
  "descricaoStatus": "Agendamento confirmado"
}
```

### POST /status_agendamento
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "nomeStatus": "Reagendado",
  "descricaoStatus": "Agendamento reagendado"
}
```

Exemplo de resposta:

```json
{
  "message": "Status de agendamento criado com sucesso.",
  "id": 6
}
```

### PUT /status_agendamento/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Status de agendamento atualizado com sucesso."
}
```

### DELETE /status_agendamento/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Status de agendamento deletado com sucesso."
}
```

---

## 9. Agendamentos

### GET /agendamentos
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "usuario_id": 2,
    "profissional_id": 1,
    "servico_id": 1,
    "status_id": 4,
    "data_hora_inicio": "2026-08-22 09:00:00",
    "data_hora_fim": "2026-08-22 09:45:00",
    "criado_em": "2026-08-27T12:00:00.000Z"
  }
]
```

### GET /agendamentos/usuario/:id
- Método: `GET`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "usuario_id": 2,
    "profissional_id": 1,
    "servico_id": 1,
    "status_id": 4,
    "data_hora_inicio": "2026-08-22 09:00:00",
    "data_hora_fim": "2026-08-22 09:45:00"
  }
]
```

### GET /agendamentos/profissional/:id
- Método: `GET`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

### GET /agendamentos/status/:id
- Método: `GET`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

### GET /agendamentos/usuario/:id/status/:statusId
- Método: `GET`
- Parâmetros:
  - `id` (obrigatório, na URL)
  - `statusId` (obrigatório, na URL)
- Autorização: `Bearer token`

### GET /agendamentos/profissional/:id/status/:statusId
- Método: `GET`
- Parâmetros:
  - `id` (obrigatório, na URL)
  - `statusId` (obrigatório, na URL)
- Autorização: `Bearer token`

### GET /agendamentos/disponibilidade
- Método: `GET`
- Parâmetros:
  - `profissional_id` (obrigatório, query string)
  - `data` (obrigatório, query string)
- Autorização: sem token

Exemplo de URL:

```text
GET /agendamentos/disponibilidade?profissional_id=1&data=2026-08-28
```

Exemplo de resposta:

```json
[
  {
    "data": "2026-08-28",
    "horariosDisponiveis": [
      "09:00",
      "09:30",
      "10:00"
    ]
  }
]
```

### POST /agendamentos
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "usuario_id": 1,
  "profissional_id": 3,
  "servico_id": "2",
  "status_id": "1",
  "data_hora_inicio": "2026-08-06 16:30:00",
  "data_hora_fim": "2026-08-06 17:00:00"
}
```

Exemplo de resposta:

```json
{
  "message": "Agendamento criado com sucesso.",
  "id": 15
}
```

### PUT /agendamentos/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Agendamento atualizado com sucesso."
}
```

### DELETE /agendamentos/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Agendamento deletado com sucesso."
}
```

---

## 10. Horários de trabalho

### GET /horarios_trabalho
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "profissional_id": 1,
    "dia_semana": 1,
    "hora_inicio": "08:00:00",
    "hora_fim": "12:00:00"
  }
]
```

### POST /horarios_trabalho
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "profissional_id": 1,
  "dia_semana": 2,
  "hora_inicio": "09:00:00",
  "hora_fim": "17:00:00"
}
```

Exemplo de resposta:

```json
{
  "message": "Horário de trabalho criado com sucesso.",
  "horario": {
    "id": 25,
    "profissional_id": 1,
    "dia_semana": 2,
    "hora_inicio": "09:00:00",
    "hora_fim": "17:00:00"
  }
}
```

### PUT /horarios_trabalho/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Horário de trabalho atualizado com sucesso.",
  "horario": {
    "id": 25,
    "profissional_id": 1,
    "dia_semana": 2,
    "hora_inicio": "09:00:00",
    "hora_fim": "18:00:00"
  }
}
```

### DELETE /horarios_trabalho/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Horário de trabalho deletado com sucesso."
}
```

---

## 11. Horários bloqueados

### GET /horarios_bloqueados
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "profissional_id": 1,
    "inicio": "2026-01-15 08:00:00",
    "fim": "2026-01-15 16:30:00",
    "motivo": "Ferias"
  }
]
```

### POST /horarios_bloqueados
- Método: `POST`
- Parâmetros: nenhum na URL
- Autorização: `Bearer token`
- Corpo da requisição:

```json
{
  "profissional_id": 1,
  "inicio": "2026-09-10 09:00:00",
  "fim": "2026-09-10 12:00:00",
  "motivo": "Recesso"
}
```

Exemplo de resposta:

```json
{
  "message": "Horário bloqueado criado com sucesso.",
  "horario": {
    "id": 7,
    "profissional_id": 1,
    "inicio": "2026-09-10 09:00:00",
    "fim": "2026-09-10 12:00:00",
    "motivo": "Recesso"
  }
}
```

### PUT /horarios_bloqueados/:id
- Método: `PUT`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Horário bloqueado atualizado com sucesso.",
  "horario": {
    "id": 7,
    "profissional_id": 1,
    "inicio": "2026-09-10 10:00:00",
    "fim": "2026-09-10 12:00:00",
    "motivo": "Recesso"
  }
}
```

### DELETE /horarios_bloqueados/:id
- Método: `DELETE`
- Parâmetros:
  - `id` (obrigatório, na URL)
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "message": "Horário bloqueado deletado com sucesso."
}
```

---

## 12. Relatórios

### GET /relatorios/total_agendamentos
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "totalAgendamentos": 13
}
```

### GET /relatorios/servicos_mais_solicitados
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "servicosMaisSolicitados": [
    {
      "id": 1,
      "nomeServico": "Corte Feminino",
      "totalSolicitacoes": 3
    },
    {
      "id": 2,
      "nomeServico": "Corte Masculino",
      "totalSolicitacoes": 2
    }
  ]
}
```

### GET /relatorios/profissionais_mais_requisitados
- Método: `GET`
- Parâmetros: nenhum
- Autorização: `Bearer token`

Exemplo de resposta:

```json
{
  "profissionaisMaisRequisitados": [
    {
      "id": 1,
      "nomeProfissional": "Juliana Mendes",
      "totalRequisicoes": 4
    },
    {
      "id": 2,
      "nomeProfissional": "Roberto Alves",
      "totalRequisicoes": 3
    }
  ]
}
```

---

## Códigos de resposta comuns

- `200` — sucesso
- `201` — recurso criado
- `400` — requisição inválida
- `401` — token ausente ou inválido
- `403` — acesso negado
- `500` — erro interno do servidor
