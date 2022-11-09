import React, { useState } from 'react'
import styles from "../styles/login.module.css"

export default function Home() {

  const [ingles, setIngles] = useState(false)

  const Teste = (e) => {
    const response = e.target.value
    if (response == "ingles"){
      setIngles(true)
    } else  {
        setIngles(false)
      }
    
  }

  return (
    <div className={styles.tag}>
      <body>
        <div className={styles.container}>
          {/* left */}
          <div className={styles.leftContainer}>
            <img src="https://www.uniir.com.br/wp-content/uploads/2021/03/uniir-aluguel-de-celular-aparelho-iphone-12.png" alt="" />
          </div>
          {/* Right */}
          <div className={styles.rightContainer}>

              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="" className={styles.logoInstagram}/>

            <form action="" className={styles.formContainer}>
              <div className={styles.inputLogin}>
                  <input type="User" placeholder={ingles ? "Phone, username or email" : "Telefone, nome de usuário ou email"} />
                  <input type="password" placeholder={ingles ? "Password" : "Senha"} />
                  <button className={styles.loginButton}>
                  {ingles ? "Sign In" : "Entrar"}
                  </button>
              </div>
            </form>

          </div>

        </div>
        <footer className={styles.footerContainer}>
          <ul className={styles.footerNav}>
            <li><a href="">{ingles ? "Meta" : "Meta"}</a></li>
            <li><a href="">{ingles ? "About" : "Sobre"}</a></li>
            <li><a href="">{ingles ? "Blog" : "Blog"}</a></li>
            <li><a href="">{ingles ? "Carrer" : "Carreira"}</a></li>
            <li><a href="">{ingles ? "Help" : "Ajuda"}</a></li>
            <li><a href="">{ingles ? "API" : "API"}</a></li>
            <li><a href="">{ingles ? "Privacy" : "Privacidade"}</a></li>
            <li><a href="">{ingles ? "Terms" : "Termos"}</a></li>
            <li><a href="">{ingles ? "Main Accounts" : "Principais Contas"}</a></li>
            <li><a href="">{ingles ? "Hashtags" : "Hashtags"}</a></li>
            <li><a href="">{ingles ? "Localizations" : "Localizações"}</a></li>
            <li><a href="">{ingles ? "Instagram Lite" : "Instagram Lite"}</a></li>
            <li><a href="">{ingles ? "Loading of contacts and not users" : "Carregamento de contatos e não usuários"}</a></li>
          </ul>
        <div className={styles.footerLastOp}>
          <select onChange={Teste} name="" id="testeSelect">
            <option value="pt">Português (Brasil)</option>
            <option value="ingles">Inglês (USA)</option>
          </select>
          <p>© 2022 Instagram from Meta</p>
        </div>
        </footer>

      </body>
    </div>
  )
}
