import {useState} from 'react'
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {NewTransactionModal} from './components/NewTransactionModal/Index'

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false);
  }

  return (
    <>
     <Header onOpeNewTransactionModal={handleOpenNewTransactionModal}/>

     <Dashboard/>

     <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
     />
     
     <GlobalStyle/>
    </>
  );
}


