const OP_MNEMONIC = { '+': 'ADD', '-': 'SUB', '*': 'MUL', '/': 'DIV' }

export function generateOneAddress(postfix) {
  const instructions = []
  const stack = []
  let tempCounter = 1

  for (const token of postfix) {
    if (/^[A-Z]$/.test(token) || /^T\d+$/.test(token)) {
      stack.push(token)
    } else {
      const op2 = stack.pop()
      const op1 = stack.pop()
      instructions.push(`LOAD ${op1}`)
      instructions.push(`${OP_MNEMONIC[token]} ${op2}`)
      const temp = `T${tempCounter}`
      tempCounter += 1
      instructions.push(`STORE ${temp}`)
      stack.push(temp)
    }
  }

  if (instructions.length > 0) {
    const last = instructions[instructions.length - 1]
    instructions[instructions.length - 1] = last.replace(/STORE T\d+$/, 'STORE RESULT')
  }

  return { instructions, count: instructions.length }
}
