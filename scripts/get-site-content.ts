// Name: Get Site Content

import "@johnlindquist/kit"

let js = `
localStorage.setItem('ScriptKit', 'Is Awesome!');
`

let value = await applescript(`
tell application "Google Chrome" to tell window 1
  get execute active tab javascript "
  
 
 ${js}
  

"
end tell
`)

await dev(value)
