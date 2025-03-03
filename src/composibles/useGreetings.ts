import { ref, watchEffect, unref, isRef } from 'vue'
import type { Ref } from 'vue'
import { greetingsList } from '@/config/greetingsList.ts'

export const useGreetings = (name: string | Ref<string>) => {
  const msg = ref<string>('')

  const getMsg = () => {
    const unrefName = unref(name)
    const messageTemplate = greetingsList[Math.floor(Math.random() * greetingsList.length)]
    msg.value = messageTemplate.replace('{name}', unrefName)
  }

  if (isRef(name)) {
    watchEffect(getMsg)
  } else {
    getMsg()
  }

  return msg
}
