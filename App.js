import React from 'react'
import './index.css'
import Chart from 'chart.js/auto'

function App() {
  const barChartData = {
    labels: ['SAB', 'DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX'],
    datasets: [
      {
        label: 'Usabilidade Semanal',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(63, 110, 164, 0.7)',
        borderColor: 'rgba(63, 110, 164, 1)',
        borderWidth: 1
      }
    ]
  }

  const pieChartData = {
    labels: ['Concluído', 'Em Progresso', 'Não Iniciado'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#36a2eb', '#ffcd56', '#ff6384'],
        borderColor: '#ffffff'
      }
    ]
  }

  React.useEffect(() => {
    const barChartCtx = document.getElementById('barChart').getContext('2d')
    new Chart(barChartCtx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })

    const pieChartCtx = document.getElementById('pieChart').getContext('2d')
    new Chart(pieChartCtx, {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }, [])

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
          <div className="search-bar">{/* Barra de pesquisa */}</div>
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
              <canvas id="barChart" width="400" height="200"></canvas>
            </div>
          </div>
          <div className="progress">
            <h3>Progresso</h3>
            <div className="progress-chart">
              <canvas id="pieChart" width="400" height="200"></canvas>
            </div>
          </div>
        </section>

        {/* Rodapé estilizado */}
        <footer className="footer">
          <p>&copy; 2023 Health Book. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
