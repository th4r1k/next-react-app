import { useCallback, useEffect, useMemo, useState } from 'react'

type ViaCepResponse = [
  {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    unidade: string
    ibge: string
    gia: string
  }
]

type UseViaCepHook = {
  cep: ViaCepResponse
  error: string | null
  loading: boolean
}

const useViaCepo = (
  uf: string,
  localidade: string,
  rua: string
): UseViaCepHook => {
  const [cep, setCep] = useState<ViaCepResponse>({} as ViaCepResponse)
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const cepUf = useMemo(() => {
    return String(uf)
  }, [uf])

  const cepLoc = useMemo(() => {
    return String(localidade)
  }, [localidade])

  const cepRua = useMemo(() => {
    return String(rua)
  }, [rua])

  const viaCepURL = useMemo(() => {
    return `https://viacep.com.br/ws/${cepUf}/${cepLoc}/${cepRua}/json/`
  }, [cepUf])

  const fetchCep = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(viaCepURL)
      const json: ViaCepResponse = await response.json()
      setCep(json)

      if (response?.status !== 200) {
        setError('Error to get CEP')
        setLoading(false)
      }
      setLoading(false)
    } catch (err) {
      console.error('Error to get CEP: ', err)
      setLoading(false)
      setError('Error to get CEP')
    }
  }, [cepUf])

  useEffect(() => {
    if (cepUf.length === 2 && cepLoc.length > 0 && cepRua.length > 0) {
      fetchCep()
    }
  }, [fetchCep])

  return { cep, error, loading }
}

export default useViaCepo
