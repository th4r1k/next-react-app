import { useState } from 'react'
import useViaCep from './api/cep/useviacepNumber'
import Header from '../components/Header'
import Toggletheme from '../components/Toggletheme'
import GoBack from '../components/Returnbutton'
import Cepo from './api/cep/cepAdress'
import { useSession } from 'next-auth/react'

function cep() {
  const { data: session } = useSession()
  const [data, setData] = useState('')
  const { cep, loading, error } = useViaCep(data)

  return (
    <>
      <div className="h-screen bg-gray-400 py-2 dark:bg-gray-800 ">
        <Header session={session} />
        <Toggletheme />
        <GoBack />
        <div className="mt-5 flex-col text-center">
          <h1>
            <strong>Encontrar o Cep pelo endereço:</strong>
          </h1>
          <Cepo />
          <div className="mt-10">
            <h1>
              <strong>Encontrar endereço digitando o CEP:</strong>
            </h1>
          </div>
          {loading ? <p>loading...</p> : <></>}
          {error ? <p>Verifique o Cep Digitado</p> : <></>}

          <input
            className="rounded"
            value={data}
            placeholder="Digite o Cep"
            onChange={(e) => setData(e.target.value)}
          />
          <p>Cidade: {cep.localidade}</p>
          <p>Logradouro: {cep.logradouro}</p>
          <p>Bairro: {cep.bairro}</p>
          <p>Complemento: {cep.complemento}</p>
          <p>UF: {cep.uf}</p>
          <p>Unidade: {cep.unidade}</p>
        </div>
      </div>
    </>
  )
}

export default cep
