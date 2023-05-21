import { html, render } from '../js/standalone.module.js'
import '../js/nostr-ui.js'
import Sidebar from '../components/Sidebar.js'
import Navbar from '../components/Navbar.js'

const links = [
  { '@id': '#', label: 'Sidebar' }
]

const nav = [
  { '@id': '#', label: 'Home' }
]

render(html`<${Navbar} links="${nav}" />

<${Sidebar} links="${links}" />

<div style="padding-left: 220px; padding-top: 20px"> ${di.data.name}</div>

`, document.body)
