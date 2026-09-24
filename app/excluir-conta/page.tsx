export default function ExcluirConta() {
  return (
    <>
      <header className="header">
        <a href="/" className="brand">
          <span className="brandIcon">V</span>
          <span>VendAI</span>
        </a>

        <nav className="headerNav">
          <a href="/">Início</a>
          <a href="/privacidade">Privacidade</a>
          <a href="/suporte">Suporte</a>
        </nav>
      </header>

      <main className="legalPage">
        <div className="legalContent">
          <p className="legalBadge">Privacidade e controle dos seus dados</p>

          <h1>Exclusão de conta e dados</h1>

          <p className="legalUpdated">
            Última atualização: 24 de setembro de 2026
          </p>

          <p>
            Os usuários do VendAI podem solicitar a exclusão da conta e dos
            dados associados a ela. A exclusão pode ser realizada diretamente
            pelo aplicativo ou solicitada por meio do nosso canal de suporte.
          </p>

          <section>
            <h2>1. Excluir a conta pelo aplicativo</h2>

            <p>
              Se você ainda possui acesso à sua conta, utilize a opção de
              exclusão de conta disponível no próprio VendAI.
            </p>

            <p>
              Após confirmar a solicitação de exclusão no aplicativo, o
              processo de exclusão da conta e dos dados associados será
              iniciado.
            </p>
          </section>

          <section>
            <h2>2. Solicitar a exclusão sem acesso ao aplicativo</h2>

            <p>
              Caso você não tenha mais acesso ao aplicativo, envie uma
              solicitação para o suporte do VendAI utilizando o endereço de
              e-mail abaixo:
            </p>

            <p>
              <a
                className="legalLink"
                href="mailto:vendeai.suport@gmail.com?subject=Solicitação de exclusão de conta - VendAI"
              >
                vendeai.suport@gmail.com
              </a>
            </p>

            <p>
              No e-mail, informe que deseja excluir sua conta do VendAI e
              utilize, sempre que possível, o mesmo endereço de e-mail
              cadastrado na conta. Poderemos solicitar informações necessárias
              para confirmar a titularidade da conta antes de realizar a
              exclusão.
            </p>
          </section>

          <section>
            <h2>3. Dados excluídos</h2>

            <p>
              A solicitação de exclusão abrange a conta do usuário e os dados
              associados a ela no VendAI, incluindo dados de cadastro e os
              dados armazenados pelo usuário durante a utilização das
              funcionalidades do aplicativo.
            </p>

            <p>
              Isso pode incluir informações relacionadas a clientes,
              orçamentos, contratos, registros financeiros e outros conteúdos
              vinculados à conta.
            </p>
          </section>

          <section>
            <h2>4. Dados que podem ser mantidos</h2>

            <p>
              Determinadas informações poderão ser conservadas quando a
              manutenção for necessária para cumprimento de obrigação legal ou
              regulatória, prevenção de fraudes, segurança ou exercício
              regular de direitos, pelo período exigido ou permitido pela
              legislação aplicável.
            </p>
          </section>

          <section>
            <h2>5. Dúvidas sobre a exclusão</h2>

            <p>
              Para dúvidas sobre a exclusão da conta ou o tratamento de dados,
              consulte nossa Política de Privacidade ou entre em contato com o
              suporte do VendAI.
            </p>

            <a className="legalLink" href="/privacidade">
              Consultar Política de Privacidade →
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
