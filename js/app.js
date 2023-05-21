import { html, render } from '../js/standalone.module.js'
import '../js/nostr-ui.js'
import Sidebar from '../components/Sidebar.js'
import Navbar from '../components/Navbar.js'
import Profile from '../components/Profile.js'

const links = [
  { '@id': '#', label: 'Sidebar' }
]

const nav = [
  { '@id': '#', label: 'Home' }
]

function doc () {
  if (di.data.length) {
    return di.data[0]
  } else {
    return di.data
  }
}
const defaultPubkey = 'de7ecd1e2976a6adb2ffa5f4db81a7d812c8bb6698aa00dcf1e76adb55efd645'
const docPubkey = doc().mainEntity && doc().mainEntity['@id'] && doc().mainEntity['@id'].replace('nostr:pubkey:', '')

const pubkey = qs?.pubkey || docPubkey || defaultPubkey

render(html`<${Navbar} links="${nav}" />

<${Sidebar} links="${links}" />

<div style="padding-left: 220px; padding-top: 20px"> 

<${Profile} pubkey="${pubkey}" />

</div>

`, document.body)
