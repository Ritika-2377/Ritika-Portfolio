import { OPERATORS } from './validator.js'

/** Default demo values for operands A–Z (educational only — not part of the expression syntax). */
export const DEFAULT_OPERAND_VALUES = Object.fromEntries(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, i) => [letter, i + 1]),
)

export function evaluatePostfix(tokens, operandValues = DEFAULT_OPERAND_VALUES) {
  const stack = []
  const steps = []

  for (const token of tokens) {
    if (/^[A-Z]$/.test(token)) {
      const value = operandValues[token]
      if (value === undefined || Number.isNaN(Number(value))) {
        return { success: false, error: `No numeric value assigned for operand "${token}".` }
      }
      stack.push(Number(value))
      steps.push({
        action: `Push ${token} (= ${value})`,
        stack: [...stack],
      })
    } else if (OPERATORS.has(token)) {
      if (stack.length < 2) {
        return { success: false, error: 'Not enough operands for operator in postfix expression.' }
      }
      const b = stack.pop()
      const a = stack.pop()
      let result
      switch (token) {
        case '+':
          result = a + b
          break
        case '-':
          result = a - b
          break
        case '*':
          result = a * b
          break
        case '/':
          if (b === 0) {
            return { success: false, error: 'Division by zero in postfix evaluation.' }
          }
          result = a / b
          break
        default:
          return { success: false, error: `Unknown operator "${token}".` }
      }
      stack.push(result)
      steps.push({
        action: `Apply ${token} on ${a} and ${b} → ${result}`,
        stack: [...stack],
      })
    } else {
      return { success: false, error: `Invalid token "${token}" during evaluation.` }
    }
  }

  if (stack.length !== 1) {
    return { success: false, error: 'Invalid postfix expression: stack should hold exactly one value.' }
  }

  return { success: true, result: stack[0], steps }
}
