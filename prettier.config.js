module.exports = {
    printWidth: 80,
    semi: false,
    bracketSameLine: true,
    trailingComma: 'es5',
    tabWidth: 4,
    singleQuote: true,
    bracketSpacing: false,
    arrowParens: 'always',
    singleAttributePerLine: true,
    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-organize-attributes',
        'prettier-plugin-jsdoc',
        'prettier-plugin-tailwindcss',
    ],
    tailwindConfig: 'tailwind.config.ts',
}
