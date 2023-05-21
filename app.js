import { html, render } from './js/standalone.module.js'
import Sidebar from './js/nostr-components-sidebar.js'
import Navbar from './js/nostr-components-navbar.js'

render(html`<${Navbar} />
<${Sidebar} />`, document.body)
