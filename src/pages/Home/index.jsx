import Form from '../../components/Form'
import List from '../../components/List'
import Video from '../../components/Video'
import './styles.css'

export default function Home() {
    return(
        <main>
            <List titulo={"Lista 1"} />
            <List titulo={"Lista 2"} />
            <Video />
            <Form />
        </main>
    )
}