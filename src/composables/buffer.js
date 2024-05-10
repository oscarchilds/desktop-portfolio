import { ref, shallowRef } from "vue"
import Commands from '@data/commands.js'
import PlainText from '@components/console/commands/PlainText.vue'
import UserInput from '@components/console/commands/UserInput.vue'

export function useBuffer() {
  const buffer = shallowRef([
    {
      component: PlainText,
      text: 'welcome to the website'
    },
    {
      component: PlainText,
      text: 'Type help for a list of commands'
    }
  ])

  const userInput = ref("")

  function submitInput() {
    const text = userInput.value
    userInput.value = ''

    buffer.value.push({
      component: UserInput,
      text: text
    })

    const command = Commands.find(x => x.name === text)

    if (!command) {
      buffer.value.push({
        component: PlainText,
        text: `${text}: command not found`
      })

      return
    }

    if (command.clear) {
      buffer.value = []
      return
    }

    buffer.value.push(command.lineData)
  }

  return { buffer, userInput, submitInput }
}