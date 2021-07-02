import { Link } from 'react-router-dom';

import illustrationImg from '../assets/imags/illustration.svg'
import logoImg  from '../assets/imags/logo.svg'


import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


import '../styles/auth.scss';

export function NewRoom(){
   // const {user} = useAuth()

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustracçao simolizando perguntas e respostas " />
                <strong> Crie salas Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala </h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala "
                         />
                         <Button type="submit">
                             Criar sala 
                         </Button>
                    </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/" >Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}