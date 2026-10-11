const OP_SYMBOL = { '+': '+', '-': '-', '*': '*', '/': '/' }

export function generateThreeAddress(postfix) {
  const instructions = []
  const stack = []
  let tempCounter = 1

  for (const token of postfix) {
    if (/^[A-Z]$/.test(token) || /^T\d+$/.test(token)) {
      stack.push(token)
    } else {
      const op2 = stack.pop()
      const op1 = stack.pop()
      const temp = `T${tempCounter}`
      tempCounter += 1
      instructions.push(`${temp} = ${op1} ${OP_SYMBOL[token]} ${op2}`)
      stack.push(temp)
    }
  }

  return { instructions, count: instructions.length }
}
