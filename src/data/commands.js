import PlainText from '../components/commands/PlainText.vue'
import HelpCommand from '../components/commands/HelpCommand.vue'
import LinkComponent from '../components/commands/LinkComponent.vue'

export default [
  {
    name: 'help',
    description: 'shows all avalible commands',
    lineData: {
      component: HelpCommand,
    }
  },
  {
    name: 'about',
    description: 'get information about this site',
    lineData: {
      component: PlainText,
      text: 'about me'
    }
  },
  {
    name: 'linkedin',
    description: 'open my linkedin in a new tab',
    lineData: {
      component: LinkComponent,
      text: 'my linkedin',
      url: 'https://linkedin.com/in/oscar-childs-4b5843146'
    }
  },
  {
    name: 'github',
    description: 'open my github in a new tab',
    lineData: {
      component: LinkComponent,
      text: 'my github',
      url: 'https://github.com/oscarchilds'
    }
  }
]
