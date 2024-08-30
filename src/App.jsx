
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
        <Header />

    <main class="container">
        <section>
            <h2>Seção de listas</h2>
            <div>
                <h2>Lista não ordenada</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                <h2>Lista ordenada</h2>
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>

            </div>
        </section>

        <section>
            <h2>Seção de img, gif e video</h2>
            <div>
                <img width="560" height="315" src="./Como-Manter-o-Foco-no-Trabalho.webp" />
            </div>

            <div>
                <img width="560" height="315"
                    src="https://webappstatic.buzzfeed.com/static/2021-06/7/22/asset/74f2d4ff92a1/anigif_sub-buzz-412-1623103735-4.gif" />
            </div>

            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rgnn_QLrfIA?si=g118nD8lVUYhskzH"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </section>

        <section class="last">
            <h2>Seção de formuário</h2>
            <form>
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" nome="nome" placeholder="Nome completo" />
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="exemplo@exemplo.com.br"/>
                </div>

                <div>
                    <label for="senha">Senha:</label>
                    <input type="password" nome="senha" id="senha" placeholder="******"/>
                </div>

                <button type="submit">Salvar</button>
                <button type="reset">Limpar</button>


            </form>
        </section>
    </main>

    

    </>
  )
}



export default App