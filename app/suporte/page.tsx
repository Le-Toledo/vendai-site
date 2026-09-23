export default function Suporte() {
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
          <a href="/termos">Termos</a>
        </nav>
      </header>

      <main className="legalPage">
        <div className="legalContent">
          <p className="legalBadge">Central de ajuda</p>

          <h1>Suporte</h1>

          <p className="legalUpdated">
            Estamos aqui para ajudar com o VendAI.
          </p>

          <p>
            Se você tiver dúvidas, encontrar algum problema ou precisar de
            ajuda para utilizar o VendAI, entre em contato com nosso suporte.
          </p>

          <section>
            <h2>Entre em contato</h2>

            <p>
              Envie um e-mail descrevendo sua dúvida ou problema. Se possível,
              informe o que estava fazendo no aplicativo quando o problema
              aconteceu.
            </p>

            <a
              className="supportEmail"
              href="mailto:vendeai.suport@gmail.com"
            >
              vendeai.suport@gmail.com
            </a>
          </section>

          <section>
            <h2>Problemas com sua conta</h2>

            <p>
              Para dificuldades relacionadas a acesso, recuperação de senha ou
              utilização da conta, entre em contato pelo e-mail de suporte.
            </p>
          </section>

          <section>
            <h2>Privacidade e dados pessoais</h2>

            <p>
              Solicitações relacionadas à privacidade e ao tratamento de dados
              pessoais também podem ser encaminhadas ao nosso e-mail de
              suporte.
            </p>

            <a className="legalLink" href="/privacidade">
              Consultar Política de Privacidade →
            </a>
          </section>

          <section>
            <h2>Exclusão da conta</h2>

            <p>
              O VendAI disponibiliza a opção de exclusão da conta diretamente
              pelo aplicativo. Caso tenha dificuldades com esse procedimento,
              entre em contato com o suporte.
            </p>
          </section>

          <section>
            <h2>Documentos importantes</h2>

            <p>
              Consulte também nossa Política de Privacidade e nossos Termos de
              Uso.
            </p>

            <div className="supportLinks">
              <a href="/privacidade">Política de Privacidade</a>
              <a href="/termos">Termos de Uso</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}