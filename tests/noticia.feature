Feature: Gestão de Notícias

  Scenario: Obter lista de notícias
    Given que existem notícias cadastradas
    When eu solicitar a lista de notícias
    Then eu devo receber um array de notícias

  Scenario: Criar uma nova notícia
    Given que eu tenho uma nova notícia para criar
    When eu enviar a nova notícia
    Then a notícia deve ser criada e retornada

  Scenario: Atualizar uma notícia existente
    Given que existe uma notícia cadastrada
    When eu atualizar a notícia
    Then a notícia deve ser atualizada e retornada

  Scenario: Deletar uma notícia existente
    Given que existe uma notícia cadastrada
    When eu deletar a notícia
    Then a notícia deve ser deletada com sucesso
