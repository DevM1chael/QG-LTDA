/**
 * Função para buscar entidades do tipo EntityName
 * Pode ser filtrado por campos específicos
 */
async function fetchEntityNameEntities() {
  const response = await fetch(
    'https://app.base44.com/api/apps/68c708df79e73634e5462f0b/entities/EntityName',
    {
      headers: {
        api_key: '4297a79b5d734483b63d156bade50371', // ou use await User.me() para obter a chave
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

/**
 * Função para atualizar uma entidade do tipo EntityName
 * @param {string} entityId - ID da entidade
 * @param {object} updateData - Dados para atualização
 */
async function updateEntityNameEntity(entityId, updateData) {
  const response = await fetch(
    `https://app.base44.com/api/apps/68c708df79e73634e5462f0b/entities/EntityName/${entityId}`,
    {
      method: 'PUT',
      headers: {
        api_key: '4297a79b5d734483b63d156bade50371', // ou use await User.me() para obter a chave
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    }
  );
  const data = await response.json();
  console.log(data);
}
/**
 * Função para buscar entidades do tipo EntityName
 * Pode ser filtrado por campos específicos
 */
async function fetchEntityNameEntities() {
  const response = await fetch(
    'https://app.base44.com/api/apps/68c708df79e73634e5462f0b/entities/EntityName',
    {
      headers: {
        api_key: '4297a79b5d734483b63d156bade50371', // ou use await User.me() para obter a chave
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

/**
 * Função para atualizar uma entidade do tipo EntityName
 * @param {string} entityId - ID da entidade
 * @param {object} updateData - Dados para atualização
 */
async function updateEntityNameEntity(entityId, updateData) {
  const response = await fetch(
    `https://app.base44.com/api/apps/68c708df79e73634e5462f0b/entities/EntityName/${entityId}`,
    {
      method: 'PUT',
      headers: {
        api_key: '4297a79b5d734483b63d156bade50371', // ou use await User.me() para obter a chave
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    }
  );
  const data = await response.json();
  console.log(data);
}