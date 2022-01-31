// Name: Hacker News
// Description: Browse the Orange Site

import "@johnlindquist/kit"

let response = await get(`https://api.hackerwebapp.com/news`)

let url = await arg(
  `Select Story:`,
  // @ts-ignore
  response.data.map(({ title, url, id }) => {
    return {
      name: title,
      description: url,
      value: url,
      preview: async () => {
        let response = await get(`https://api.hackerwebapp.com/item/${id}`)

        // @ts-ignore
        let comments = response.data.comments
          .map(({ content, user }) => {
            return `## ${user}
${content}`
          })
          .join("\n")

        return md(`# ${title}
${comments}`)
      },
    }
  })
)

await $`open ${url}`
