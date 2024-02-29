import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Githunsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
      eos tempora numquam iure. Recusandae quasi reprehenderit provident qui
      facilis aliquam, minus, sit mollitia optio ea a quibusdam quaerat
      voluptates omnis.
    </Paragrafo>
    <Githunsecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ogiansouza&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leoabril98&layout=compact&langs_count=7&theme=dracula" />
    </Githunsecao>
  </section>
)

export default Sobre
