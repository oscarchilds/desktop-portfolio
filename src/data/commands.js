import PlainText from '@components/console/commands/PlainText.vue'
import HelpCommand from '@components/console/commands/HelpCommand.vue'
import LinkComponent from '@components/console/commands/LinkComponent.vue'
import ChangeDirectory from '@components/console/commands/ChangeDirectory.vue'
import ReadDirectory from '@components/console/commands/ReadDirectory.vue'

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
  },
  {
    name: 'cd',
    description: 'change directory',
    lineData: {
      component: ChangeDirectory,
    }
  },
  {
    name: 'dir',
    description: 'read directory',
    lineData: {
      component: ReadDirectory,
    }
  },
  {
    name: 'clear',
    description: 'clear the console',
    clear: true
  }
]
