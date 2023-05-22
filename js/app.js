import { html, render } from '../js/standalone.module.js'
import '../js/nostr-ui.js'
import Sidebar from '../components/Sidebar.js'
import Profile from '../components/Profile.js'
import NavbarLogin from '../components/NavbarLogin.js'

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

di.data.mutation = 1

function renderPage () {
  render(html`<${NavbarLogin} links="${nav}" />

  <${Sidebar} links="${links}" />
  
    
  <div style="padding-left: 220px; padding-top: 20px"> 
    ${localStorage.getItem('currentUser') ? html`<${Profile} pubkey="${pubkey}" />` : ''}
  </div>


  
  `, document.body)
}

// Initial render
renderPage()

let lastCurrentUser = localStorage.getItem('currentUser')

// heartbeat
setInterval(() => {
  localStorage.setItem('test', 'value') // your existing operation
  console.log('set')

  const currentUser = localStorage.getItem('currentUser')
  if (currentUser !== lastCurrentUser) {
    // console.log('logged in as', currentUser)
    // console.log('rendering page')
    renderPage()
    lastCurrentUser = currentUser
  }
}, 1000)
