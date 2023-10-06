import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Chart from 'chart.js/auto';
import FHIR from 'fhirclient';
import Logo from "./img/hat-icon.png"
import Logo2 from "./img/forum-icon.png"
import Logo3 from "./img/search-icon.png"
import profileImage from "./img/profile3.jpg"


function App() {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Função para buscar recursos FHIR (pacientes)
    const fetchFhirPatients = async () => {
      try {
        const client = FHIR.oauth2({
          clientId: 'c50b504a-0eea-448f-95df-ef4a677e6376',
          scope: 'patient/*.read', // Escopo de leitura do paciente, ajuste conforme necessário
          redirectUri: 'https://login.microsoftonline.com/4b66a893-ae4c-43b4-8459-c7ae89b2ec0e/oauth2/token',
        });

        const patientBundle = await client.request(client.patient.apiEndpoint + '/Patient');

        // Exemplo de como acessar os recursos FHIR (pacientes)
        const patients = patientBundle.entry.map((entry) => entry.resource);
        setPatients(patients);

        // Resto do código para processar e exibir os dados
        // ...
      } catch (error) {
        console.error('Erro ao buscar pacientes FHIR', error);
      }
    };

    fetchFhirPatients();
  }, []);

  const [patients, setPatients] = useState([]); // Mova essa linha para fora do useEffect

  useEffect(() => {
    const barChartCtx = barChartRef.current?.getContext('2d');
    const pieChartCtx = pieChartRef.current?.getContext('2d');

    // Destrói gráficos anteriores se existirem
    if (window.barChartInstance) {
      window.barChartInstance.destroy();
    }
    if (window.pieChartInstance) {
      window.pieChartInstance.destroy();
    }

    const barChartData = {
      labels: ['SAB', 'DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX'],
      datasets: [
        {
          label: 'Usabilidade Semanal',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(63, 110, 164, 0.7)',
          borderColor: 'rgba(63, 110, 164, 1)',
          borderWidth: 1,
        },
      ],
    };

    const pieChartData = {
      labels: ['Concluído', 'Em Progresso', 'Não Iniciado'],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ['#36a2eb', '#ffcd56', '#ff6384'],
          borderColor: '#ffffff',
        },
      ],
    };

    window.barChartInstance = new Chart(barChartCtx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    window.pieChartInstance = new Chart(pieChartCtx, {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);

  const posts = [
    {
      profileImage: 'profile1.jpg',
      username: 'Rodrigo',
      text: 'Pesquisas laboratoriais',
      likes: 10,
    },
    {
      profileImage: 'profile2.jpg',
      username: 'Carlos',
      text: 'Ideias sobre tratamentos.',
      likes: 5,
    },
    {
      profileImage: 'profile3.jpg',
      username: 'Iara',
      text: 'Novas pesquisas sobre vacinas.',
      likes: 3,
    },
    {
      profileImage: 'profile4.jpg',
      username: 'Camila',
      text: 'Desenvolvimento de remédios',
      likes: 8,
    },
    {
      profileImage: 'profile5.jpg',
      username: 'Pablo',
      text: 'Máquinas cirúrgicas',
      likes: 12,
    },
  ];

  return (
      <div className="App">
      <aside className="sidebar">
        <div className="logo">
          <h2>HEALTH BOOK</h2>
        </div>
        <div className="sidebar-items">
          <button className="qr-code-button">QR Code</button>
          <div className="icons">
            <div className="icon">
              <button className='hat-icon-button'>
                <img src={Logo} alt="Estudos" title='Estudos' /></button>              
            </div>
            <div className="icon">
            <button className='forum-icon-button'>
                <img src={Logo2} alt="Fórum" title='Fórum' /></button>
            </div>
            <div className="icon">
            <button className='search-icon-button'>
                <img src={Logo3} alt="Fórum" title='Fórum' /></button>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Estudos</h1>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="action-buttons">
            <button className="notification-button">Notificações</button>
            <button className="settings-button">Configurações</button>
           
            <button className="logout-button">Sair</button>
          </div>
        </header>
        <section className="overview">
          <h2>Visão Geral</h2>
          <div className="overview-blocks">
            <div className="overview-block">
              <h3>Pesquisas em progresso</h3>
              <p>3</p>
            </div>
            <div className="overview-block">
              <h3>Tópicos abertos</h3>
              <p>7</p>
            </div>
            <div className="overview-block">
              <h3>Tempo gasto</h3>
              <p>14h 18m</p>
            </div>
            <div className="overview-block">
              <h3>Pontuação da comunidade</h3>
              <p>240</p>
            </div>
          </div>
          <div className="weekly-usage">
            <h3>Usabilidade Semanal</h3>
            <div className="usage-buttons">
              <button>Semanal</button>
              <button>Mensal</button>
            </div>
            <div className="usage-chart">
              <canvas ref={barChartRef} width="400" height="200"></canvas>
            </div>
          </div>
          <div className="progress">
            <h3>Progresso</h3>
            <div className="progress-chart">
              <canvas ref={pieChartRef} width="400" height="200"></canvas>
            </div>
          </div>
        </section>

        {/* Separação para o fórum */}
        <hr />

        {/* Barra de pesquisa e botão "Meus tópicos" */}
        <div className="forum">
          <h2>Fórum</h2>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar tópicos..." />
            <button>Meus tópicos</button>
          </div>
        </div>
        {/* Renderize os posts aqui */}
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <div className="post-header">
              <img src={post.profileImage} alt={`${post.username}'s Profile`} />
              <p>{post.username}</p>
            </div>
            <p className="post-text">{post.text}</p>
            <button className="like-button">Like ({post.likes})</button>
          </div>
        ))}


              
       {/* Rodapé estilizado */}
        <footer className="footer">
          <p>&copy; 2023 Health Book. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  
  );
}   

export default App;
