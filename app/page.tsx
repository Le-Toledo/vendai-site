export default function Home() {
  return (
    <>
      <header className="header">
        <a href="/" className="brand">
          <span className="brandIcon">V</span>
          <span>VendAI</span>
        </a>

        <nav className="headerNav">
          <a href="#recursos">Recursos</a>
          <a href="/privacidade">Privacidade</a>
          <a href="/suporte">Suporte</a>
        </nav>
      </header>

    <main>
      <section>
        <p>Gestão inteligente para o seu negócio</p>

        <h1>
          Organize seu negócio com o <span>VendAI</span>
        </h1>

        <p>
          Clientes, orçamentos, contratos e finanças em um só lugar.
          Uma forma simples e inteligente de cuidar da gestão do seu negócio.
        </p>

        <div>
          <a href="#recursos">Conheça o VendAI</a>
          <a href="/suporte">Suporte</a>
        </div>
      </section>

      <section id="recursos">
        <h2>Tudo o que você precisa em um só lugar</h2>

        <div>
          <article>
            <h3>Clientes</h3>
            <p>
              Cadastre e organize as informações dos seus clientes de forma
              simples.
            </p>
          </article>

          <article>
            <h3>Orçamentos</h3>
            <p>
              Crie, acompanhe e compartilhe orçamentos profissionais.
            </p>
          </article>

          <article>
            <h3>Contratos</h3>
            <p>
              Mantenha seus contratos organizados e vinculados aos seus
              clientes.
            </p>
          </article>

          <article>
            <h3>Financeiro</h3>
            <p>
              Registre receitas e despesas e acompanhe o resumo financeiro do
              seu negócio.
            </p>
          </article>

          <article>
            <h3>Inteligência Artificial</h3>
            <p>
              Utilize recursos de inteligência artificial para auxiliar nas
              tarefas do dia a dia.
            </p>
          </article>

          <article>
            <h3>Documentos</h3>
            <p>
              Gere e compartilhe documentos diretamente pelo VendAI.
            </p>
          </article>
        </div>
      </section>

      <footer>
        <p>© 2026 VendAI</p>

        <nav>
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos de Uso</a>
          <a href="/suporte">Suporte</a>
        </nav>
      </footer>
    </main>
    </>
  );
}