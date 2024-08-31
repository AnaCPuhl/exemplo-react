import './styles.css'

export default function Form(){
    return(
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
    )
}

