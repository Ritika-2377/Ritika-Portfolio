const OP_MNEMONIC = { '+': 'ADD', '-': 'SUB', '*': 'MUL', '/': 'DIV' }

function isRegister(name) {
  return /^R\d+$/.test(name)
}

export function generateTwoAddress(postfix) {
  const instructions = []
  const stack = []
  let regCounter = 1

  const allocRegister = () => {
    const reg = `R${regCounter}`
    regCounter += 1
    return reg
  }

  for (const token of postfix) {
    if (/^[A-Z]$/.test(token) || /^T\d+$/.test(token) || isRegister(token)) {
      stack.push(token)
    } else {
      const op2 = stack.pop()
      const op1 = stack.pop()
      let dest

      if (isRegister(op1)) {
        dest = op1
      } else {
        dest = allocRegister()
        instructions.push(`MOV ${dest}, ${op1}`)
      }

      instructions.push(`${OP_MNEMONIC[token]} ${dest}, ${op2}`)
      stack.push(dest)
    }
  }

  return { instructions, count: instructions.length }
}
