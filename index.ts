import { promises } from 'fs'
import { join } from 'path'
import { format, Options } from 'prettier'

const prettierConfig: Options = {
  arrowParens: 'always',
  parser: 'typescript',
  singleQuote: true,
}

function toCamelSentenceWithoutSvg(text: string) {
  return ` ${text}`
    .replace('.svg', '')
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, character) => character.toUpperCase())
}

async function handleIconContent(iconName: string, content: string) {
  const replaced = content
    .slice()
    .replace('<svg', '<Svg')
    .replace('</svg', '</Svg')
    .replace('stroke="currentColor"', 'stroke="currentColor" {...props}')
    .replace(/<path/g, '<Path')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-width/g, 'strokeWidth')

  return format(
    `
    import React from 'react'
    import { Svg, Path } from 'react-native-svg'

    export default function ${iconName}(props) {
      return (
        ${replaced}
      )
    }
    `,
    prettierConfig,
  )
}

async function readIconFolderByType(iconType: string) {
  try {
    const directory = await promises.readdir(
      join(__dirname, 'heroicons', iconType),
    )
    return {
      name: iconType,
      directory,
    }
  } catch (error) {
    console.error(error)
  }
}

const iconFolders = [
  readIconFolderByType('outline'),
  readIconFolderByType('solid'),
]

async function main() {
  for await (const icons of iconFolders) {
    for (const icon of icons.directory) {
      try {
        const iconName = toCamelSentenceWithoutSvg(icon)
        const iconContent = await promises.readFile(
          join(__dirname, 'heroicons', icons.name, icon),
          'utf-8',
        )
        const newIconContent = await handleIconContent(iconName, iconContent)
        await promises.writeFile(
          join(__dirname, 'output', icons.name, `${iconName}.tsx`),
          newIconContent,
        )
      } catch (error) {
        console.error(error)
      }
    }
  }
}

main()
