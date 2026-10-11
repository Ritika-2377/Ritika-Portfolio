const OP_MNEMONIC = { '+': 'ADD', '-': 'SUB', '*': 'MUL', '/': 'DIV' }

export function generateZeroAddress(postfix) {
  const instructions = []

  for (const token of postfix) {
    if (/^[A-Z]$/.test(token) || /^T\d+$/.test(token)) {
      instructions.push(`PUSH ${token}`)
    } else {
      instructions.push(OP_MNEMONIC[token])
    }
  }

  return { instructions, count: instructions.length }
}
