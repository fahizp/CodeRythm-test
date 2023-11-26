import { openai } from './api.js'

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('davinci:ft-coderythm-technology-private-limited-2023-11-24-06-56-57')
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()