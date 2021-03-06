import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

function CloseButton() {
  return (
    <Popover.Button
      className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 dark:text-black"
      title="Fechar formulário"
    >
      <X weight="bold" className="h-4 w-4" />
    </Popover.Button>
  )
}

export default CloseButton
