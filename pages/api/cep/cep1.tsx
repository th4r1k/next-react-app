import { useState } from "react";
import useViaCepo from "../cep/useviaceps1";

function Cepo() {
    const [uf, setUf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [rua, setRua] = useState('');
    const {cep, loading, error} = useViaCepo(uf, localidade, rua);
   
   
        return (
            <>
                {loading? <p>loading...</p> : <></>  }
                {error? <p>Cep não encontrado! verifique os dados digitados.</p> : <></> }

                
                <input className="rounded" value={localidade} placeholder="Cidade" onChange={(e) => setLocalidade(e.target.value)} />
                <p className="my-2"><input className="rounded" value={rua} placeholder="Logradouro" onChange={(e) => setRua(e.target.value)} /></p>
                <input className="rounded" value={uf} placeholder="Estado (sigla)" onChange={(e) => setUf(e.target.value)} />
            
                <p>CEP: {cep[0]?.cep}</p>
            </>
        );

  };

export default Cepo