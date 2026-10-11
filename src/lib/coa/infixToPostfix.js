import { OPERATORS, OPERAND_PATTERN } from './validator.js'

const PRECEDENCE = { '+': 1, '-': 1, '*': 2, '/': 2 }

export function infixToPostfix(expression) {
  const expr = expression.replace(/\s+/g, '')
  const output = []
  const stack = []

  for (const token of expr) {
    if (OPERAND_PATTERN.test(token)) {
      output.push(token)
    } else if (token === '(') {
      stack.push(token)
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop())
      }
      stack.pop()
    } else if (OPERATORS.has(token)) {
      while (
        stack.length &&
        stack[stack.length - 1] !== '(' &&
        PRECEDENCE[stack[stack.length - 1]] >= PRECEDENCE[token]
      ) {
        output.push(stack.pop())
      }
      stack.push(token)
    }
  }

  while (stack.length) {
    output.push(stack.pop())
  }

  return output
}

export function infixToPostfixWithSteps(expression) {
  const expr = expression.replace(/\s+/g, '')
  const output = []
  const stack = []
  const steps = []

  const snapshot = (action) => {
    steps.push({
      action,
      output: [...output],
      stack: [...stack],
    })
  }

  snapshot('Start with empty output queue and operator stack.')

  for (const token of expr) {
    if (OPERAND_PATTERN.test(token)) {
      output.push(token)
      snapshot(`Read operand "${token}" → append to output.`)
    } else if (token === '(') {
      stack.push(token)
      snapshot(`Read "(" → push onto stack.`)
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        const op = stack.pop()
        output.push(op)
        snapshot(`Read ")" → pop "${op}" from stack to output.`)
      }
      stack.pop()
      snapshot(`Pop matching "(" from stack.`)
    } else if (OPERATORS.has(token)) {
      while (
        stack.length &&
        stack[stack.length - 1] !== '(' &&
        PRECEDENCE[stack[stack.length - 1]] >= PRECEDENCE[token]
      ) {
        const op = stack.pop()
        output.push(op)
        snapshot(
          `Operator "${token}": higher/equal precedence on stack → pop "${op}" to output.`,
        )
      }
      stack.push(token)
      snapshot(`Push operator "${token}" onto stack.`)
    }
  }

  while (stack.length) {
    const op = stack.pop()
    output.push(op)
    snapshot(`End of input → pop "${op}" from stack to output.`)
  }

  snapshot(`Postfix complete: ${output.join(' ')}`)

  return { tokens: output, steps }
}

export function formatPostfix(tokens) {
  return tokens.join('')
}
