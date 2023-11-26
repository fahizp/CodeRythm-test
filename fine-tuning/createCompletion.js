import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-coderythm-technology-private-limited-2023-11-25-11-10-57',
      prompt: 'Pretest data: Silence & Violence: 2\nPosttest data: Silence & Violence: -2',
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()
