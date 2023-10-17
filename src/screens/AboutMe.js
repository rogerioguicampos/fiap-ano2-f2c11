import React, { useState } from "react"; 
import { Cont } from "../common-components/Container/Container"
import { Header } from "../common-components/Header/Header"
import { TextBox } from "../common-components/Header/TextBox"
import { Button } from "../common-components/Button/Button"
import { TextEnd } from "../common-components/Header/TextEnd"

export function About() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const getAdress = async () => {

    let cepToSearch = cep; 

    if (cep.trim() === '') {
      cepToSearch = '02017013'; 
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepToSearch}/json/`);
      const data = await response.json();

      if (data.erro) {
        setEndereco('CEP não encontrado');
      } else {
        const enderecoCompleto = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        setEndereco(enderecoCompleto);
      }
    } catch (error) {
      console.error(error);
      setEndereco('Erro ao buscar o endereço');
    }
  };

    return (
      <Cont>
        <div>
          <Header>Sobre mim</Header>
          <TextBox 
            placeholder='02017013'
            value={cep}
            onChange={(e) => setCep(e.target.value)}>
          </TextBox>
        </div>
        <div>
          <Button onClick={getAdress}>Buscar Endereço</Button>
        </div>
        <div>
          <TextEnd>Endereço: {endereco}</TextEnd>
        </div>
      </Cont>
    );
  
}
