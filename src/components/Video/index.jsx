import './styles.css'

export default function Video(){
    return(
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
    )
}

