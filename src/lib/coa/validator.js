const OPERATORS = new Set(['+', '-', '*', '/'])
const OPERAND_PATTERN = /^[A-Z]$/

export function validateExpression(expression) {
  const expr = expression.replace(/\s+/g, '')

  if (!expr) {
    return { valid: false, error: 'Expression cannot be empty.' }
  }

  if (!/^[A-Z+\-*/()]+$/.test(expr)) {
    return {
      valid: false,
      error:
        'Invalid characters. Use uppercase letters (A–Z), operators (+, -, *, /), and parentheses.',
    }
  }

  let depth = 0
  let expectsOperand = true
  let previous = null

  for (const ch of expr) {
    if (OPERAND_PATTERN.test(ch)) {
      if (!expectsOperand) {
        return { valid: false, error: 'Missing operator between operands.' }
      }
      expectsOperand = false
    } else if (ch === '(') {
      if (!expectsOperand) {
        return { valid: false, error: 'Missing operator before opening parenthesis.' }
      }
      depth += 1
      expectsOperand = true
    } else if (ch === ')') {
      if (depth === 0) {
        return { valid: false, error: 'Mismatched parentheses: unexpected closing parenthesis.' }
      }
      if (expectsOperand) {
        return {
          valid: false,
          error: previous === '(' ? 'Empty parentheses are not allowed.' : 'Invalid operator or operand placement.',
        }
      }
      depth -= 1
      expectsOperand = false
    } else if (OPERATORS.has(ch)) {
      if (expectsOperand) {
        return { valid: false, error: 'Operator must follow an operand or closing parenthesis.' }
      }
      expectsOperand = true
    }
    previous = ch
  }

  if (depth !== 0) {
    return { valid: false, error: 'Mismatched parentheses: missing closing parenthesis.' }
  }
  if (expectsOperand) {
    return { valid: false, error: 'Expression cannot end with an operator.' }
  }

  return { valid: true }
}

export { OPERATORS, OPERAND_PATTERN }
