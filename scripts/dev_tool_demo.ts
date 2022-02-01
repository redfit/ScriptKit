// Name: Dev Tools Devmo

import "@johnlindquist/kit"

let response = await get(`https://api.github.com/users/redfit/repos`)

dev(response.data)
