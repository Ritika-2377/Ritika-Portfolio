import { generateOneAddress } from './generators/oneAddress.js'
import { generateThreeAddress } from './generators/threeAddress.js'
import { generateTwoAddress } from './generators/twoAddress.js'
import { generateZeroAddress } from './generators/zeroAddress.js'
import { formatPostfix, infixToPostfix, infixToPostfixWithSteps } from './infixToPostfix.js'
import { validateExpression } from './validator.js'

export function processExpression(expression) {
  const validation = validateExpression(expression)
  if (!validation.valid) {
    return { success: false, error: validation.error }
  }

  const { tokens, steps } = infixToPostfixWithSteps(expression)
  const postfix = formatPostfix(tokens)

  return {
    success: true,
    infix: expression.replace(/\s+/g, ''),
    postfix,
    postfixSteps: steps,
    threeAddress: generateThreeAddress(tokens),
    twoAddress: generateTwoAddress(tokens),
    oneAddress: generateOneAddress(tokens),
    zeroAddress: generateZeroAddress(tokens),
  }
}

export { validateExpression, infixToPostfix, formatPostfix }
