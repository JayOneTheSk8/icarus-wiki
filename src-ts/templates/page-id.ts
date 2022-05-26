export default (pageIdConst: string): string => `export const ${pageIdConst}_PAGE_ID = '${pageIdConst.toLowerCase()}'
`
