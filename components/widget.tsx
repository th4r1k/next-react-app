import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="group flex h-12 items-center rounded-full bg-gray-800 px-3 text-white dark:bg-gray-400">
        <ChatTeardropDots className="h-6 w-6" />

        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
          <span className="pl-2"></span>
          Contact
        </span>
      </Popover.Button>
    </Popover>
  )
}
