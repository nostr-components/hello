import { html, render } from '../js/standalone.module.js'
import '../js/nostr-ui.js'
import Sidebar from '../components/Sidebar.js'
import Navbar from '../components/Navbar.js'

render(html`<${Navbar} />

<${Sidebar} />

<div style="padding-left: 200px">Hello Nostr!</div>

`, document.body)
