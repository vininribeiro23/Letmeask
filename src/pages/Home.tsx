import illustrationImg from '../assets/imags/illustration.svg'
import logoImg  from '../assets/imags/logo.svg'
import googleIconImg from '../assets/imags/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home(){
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
                    <button className="create-room">
                    <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala </div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite código da sala "
                         />
                         <Button type="submit">
                             Entrar na sala 
                         </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}