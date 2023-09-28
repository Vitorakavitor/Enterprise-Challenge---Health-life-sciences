import React, { useEffect, useRef } from 'react';
import './index.css';
import Chart from 'chart.js/auto';

function App() {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const barChartCtx = barChartRef.current.getContext('2d');
    const pieChartCtx = pieChartRef.current.getContext('2d');

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
      username: 'User2',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      likes: 5,
    },
    {
      profileImage: 'profile3.jpg',
      username: 'User3',
      text: 'Novo post do terceiro usuário.',
      likes: 3,
    },
    {
      profileImage: 'profile4.jpg',
      username: 'User4',
      text: 'Mais um post interessante.',
      likes: 8,
    },
    {
      profileImage: 'profile5.jpg',
      username: 'User5',
      text: 'Último post do exemplo.',
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
              <img src="hat-icon.png" alt="Hat Icon" />
            </div>
            <div className="icon">
              <img src="chat-icon.png" alt="Chat Icon" />
            </div>
            <div className="icon">
              <img src="internet-icon.png" alt="Internet Icon" />
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Início</h1>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="action-buttons">
            <button className="notification-button">Notificações</button>
            <button className="settings-button">Engrenagem</button>
          </div>
        </header>
        <section className="overview">
          <h2>Visão Geral</h2>
          <div className="overview-blocks">
            <div className="overview-block">
              <h3>Título do Bloco 1</h3>
              <p>123</p>
            </div>
            <div className="overview-block">
              <h3>Título do Bloco 2</h3>
              <p>456</p>
            </div>
            <div className="overview-block">
              <h3>Título do Bloco 3</h3>
              <p>789</p>
            </div>
            <div className="overview-block">
              <h3>Título do Bloco 4</h3>
              <p>987</p>
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
          <h2>Forum</h2>
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

        {/* Seção "Videos de Apoio" */}
        <div className="quebra-pagina">
          <hr />
          <h2>Videos de Apoio</h2>
          <div className="video-fileiras">
            {/* Aqui você pode adicionar as fileiras de vídeos */}
            {/* Cada fileira deve conter três vídeos */}
            <div className="video-fileira">
              <div className="video">
                <a href="https://www.youtube.com/link_do_video1" target="_blank" rel="noopener noreferrer">
                  <img src="video1.jpg" alt="Video 1" />
                </a>
              </div>
              <div className="video">
                <a href="https://www.youtube.com/link_do_video2" target="_blank" rel="noopener noreferrer">
                  <img src="video2.jpg" alt="Video 2" />
                </a>
              </div>
              <div className="video">
                <a href="https://www.youtube.com/link_do_video3" target="_blank" rel="noopener noreferrer">
                  <img src="video3.jpg" alt="Video 3" />
                </a>
              </div>
            </div>
            <div className="video-fileira">
              <div className="video">
                <a href="https://www.youtube.com/link_do_video1" target="_blank" rel="noopener noreferrer">
                  <img src="video1.jpg" alt="Video 1" />
                </a>
              </div>
              <div className="video">
                <a href="https://www.youtube.com/link_do_video2" target="_blank" rel="noopener noreferrer">
                  <img src="video2.jpg" alt="Video 2" />
                </a>
              </div>
              <div className="video">
                <a href="https://www.youtube.com/link_do_video3" target="_blank" rel="noopener noreferrer">
                  <img src="video3.jpg" alt="Video 3" />
                </a>
              </div>
            </div>
            {/* Repita este bloco para criar mais fileiras */}
          </div>
        </div>

        {/* Rodapé estilizado */}
        <footer className="footer">
          <p>&copy; 2023 Health Book. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
