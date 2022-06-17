import { useState } from "react";
import useViaCep from "./api/cep/useviacep";
import Header from '../components/header';
import Toggletheme from '../components/toggletheme';
import GoBack from '../components/returnbutton';
import Cepo from "./api/cep/cep1";
import { useSession } from "next-auth/react";



 function cep() {
    const {data: session} = useSession()
    const [data, setData] = useState('');
    const { cep, loading, error } = useViaCep(data);
  
        return (
            <>
            <div className="h-screen bg-gray-400 dark:bg-gray-800 py-2 ">
            <Header session={session}/>
            <Toggletheme/>
            <GoBack/>
                <div className="flex-col text-center mt-5">
                    <h1><strong>Encontrar o Cep pelo endereço:</strong></h1>
                    <Cepo/>
                    <div className="mt-10">
                    <h1><strong>Encontrar endereço digitando o CEP:</strong></h1>
                    </div>
                    {loading? <p>loading...</p> : <></>  }
                    {error? <p>Verifique o Cep Digitado</p> : <></> }

                    <input className="rounded" value={data} placeholder="Digite o Cep" onChange={(e) => setData(e.target.value)} />
                    <p>Cidade: {cep.localidade}</p>
                    <p>Logradouro: {cep.logradouro}</p>
                    <p>Bairro: {cep.bairro}</p>
                    <p>Complemento: {cep.complemento}</p>
                    <p>UF: {cep.uf}</p>
                    <p>Unidade: {cep.unidade}</p>
      

                </div>
            </div>
            </>
        );

  };


export default cep