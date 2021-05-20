import logoimg from '../../assets/logo.svg'
import { Container,Content } from './styles'

interface HeaderProps{
    onOpeNewTransactionModal: () => void;
}

export function Header ({onOpeNewTransactionModal}:HeaderProps){

   
    return(
        <Container>
            <Content>
                <img src={logoimg} alt="dt money"/>
                <button type="button" onClick={onOpeNewTransactionModal}>
                    Nova Transação
                </button>
           </Content>
        </Container>
    )
}