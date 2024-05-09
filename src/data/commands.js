import PlainText from '../components/Commands/PlainText.vue'
import HelpCommand from '../components/Commands/HelpCommand.vue'
import LinkedIn from '../components/Commands/LinkedIn.vue'
import Github from '../components/Commands/Github.vue'

export default [
  {
    name: 'help',
    description: 'shows all avalible commands',
    component: HelpCommand
  },
  {
    name: 'about',
    description: 'get information about this site',
    component: PlainText
  },
  {
    name: 'linkedin',
    description: 'open my linkedin in a new tab',
    component: LinkedIn
  },
  {
    name: 'github',
    description: 'open my github in a new tab',
    component: Github
  }
]