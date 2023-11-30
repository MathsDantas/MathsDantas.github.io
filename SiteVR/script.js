function enviarFormulario() {
  const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      const dadosParaInserir = {
          name: formulario.fname.value,
          email: formulario.lname.value,
      };

      axios.post('https://6568c1e39927836bd975613e.mockapi.io/users', dadosParaInserir)
          .then(response => {
              alert('Adicionado com sucesso!');
              console.log('Dados inseridos com sucesso:', response.data);
              formulario.reset();
          })
          .catch(error => {
              alert('Erro ao inserir dados. Verifique o console para mais detalhes.');
              console.error('Erro ao inserir dados:', error);
          });
  });
}

// Lendo os dados com o Axios

function lerDados() {
axios.get(`https://6568c1e39927836bd975613e.mockapi.io/users`)
  .then(response => {
    const listaDados = document.getElementById('listaDados');
    listaDados.innerHTML = '';

    response.data.forEach(usuario => {
      const itemLista = document.createElement('li');
      itemLista.innerHTML = `
        <strong>Nome:</strong> ${usuario.name}<br>
        <strong>Email:</strong> ${usuario.email}<br>
      `;
      listaDados.appendChild(itemLista);
    });
  })
  .catch(error => {
    console.error('Erro ao ler dados:', error);
  });
}

lerDados();
