import { ref, shallowRef } from "vue"
import Commands from '@data/commands'
import PlainText from '@components/console/commands/PlainText.vue'
import UserInput from '@components/console/commands/UserInput.vue'
import type BufferItem from "types/bufferItem"

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
  ] as BufferItem[])

  const userInput = ref("")

  function submitInput(currentDir: string) {
    const text = userInput.value
    userInput.value = ''

    buffer.value.push({
      component: UserInput,
      text: text,
      dir: currentDir
    })

    var commandText: string
    var commandArguments: string[] = []
    const indexOfSpaceChar = text.indexOf(' ')

    if (indexOfSpaceChar > 0) {
      commandText = text.substring(0, indexOfSpaceChar)
      commandArguments = text.substring(indexOfSpaceChar + 1).split(' ')
    } else {
      commandText = text
    }

    const command = Commands.find(x => x.name.toLowerCase() === commandText?.toLowerCase())

    if (!command) {
      buffer.value.push({
        component: PlainText,
        text: `${commandText}: command not found`
      })

      return
    }

    if (command.clear) {
      buffer.value = []
      return
    }

    buffer.value.push({
      component: command.lineData?.component,
      commandArguments: commandArguments,
      dir: currentDir
    })
  }

  return { buffer, userInput, submitInput }
}