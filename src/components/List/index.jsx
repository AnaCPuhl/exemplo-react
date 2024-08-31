import './styles.css'

export default function List(){
    return(
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
    )
}

