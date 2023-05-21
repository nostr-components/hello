import { html, render } from './js/standalone.module.js'
import Sidebar from './js/nostr-components-sidebar.js'
import Navbar from './components/Navbar.js'

render(html`<${Navbar} />
<${Sidebar} />`, document.body)
