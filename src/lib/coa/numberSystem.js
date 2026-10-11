const BASES = {
  2: { name: 'Binary', digits: '01' },
  8: { name: 'Octal', digits: '01234567' },
  10: { name: 'Decimal', digits: '0123456789' },
  16: { name: 'Hexadecimal', digits: '0123456789ABCDEF' },
}

function normalizeInput(value, base) {
  const trimmed = value.trim().toUpperCase()
  if (!trimmed) {
    return { ok: false, error: 'Enter a value to convert.' }
  }
  const allowed = BASES[base].digits
  for (const ch of trimmed) {
    if (!allowed.includes(ch)) {
      return {
        ok: false,
        error: `Invalid digit "${ch}" for ${BASES[base].name} (base ${base}).`,
      }
    }
  }
  return { ok: true, value: trimmed }
}

function toDecimalSteps(value, fromBase) {
  const steps = []
  let decimal = 0n
  const chars = value.split('')
  steps.push(`Convert ${BASES[fromBase].name} "${value}" to decimal:`)

  chars.forEach((digit, index) => {
    const power = chars.length - 1 - index
    const digitValue = parseInt(digit, fromBase)
    const contribution = BigInt(digitValue) * BigInt(fromBase) ** BigInt(power)
    decimal += contribution
    steps.push(
      `Position ${index}: digit ${digit} × ${fromBase}^${power} = ${digitValue} × ${BigInt(fromBase) ** BigInt(power)} = ${contribution}`,
    )
  })

  steps.push(`Sum = ${decimal}`)
  return { decimal, steps }
}

function fromDecimalSteps(decimal, toBase) {
  const steps = []
  if (decimal === 0n) {
    steps.push('Decimal 0 → "0" in any base.')
    return { result: '0', steps }
  }

  steps.push(`Convert decimal ${decimal} to ${BASES[toBase].name}:`)
  let n = decimal
  const base = BigInt(toBase)
  const digits = []
  while (n > 0n) {
    const remainder = Number(n % base)
    const quotient = n / base
    const digit =
      toBase === 16 && remainder > 9 ? String.fromCharCode(55 + remainder) : String(remainder)
    digits.unshift(digit)
    steps.push(`${n} ÷ ${toBase} → quotient ${quotient}, remainder ${remainder} (digit ${digit})`)
    n = quotient
  }

  const result = digits.join('')
  steps.push(`Read remainders bottom-to-top: ${result}`)
  return { result, steps }
}

export function convertNumber(input, fromBase, toBase) {
  if (!BASES[fromBase] || !BASES[toBase]) {
    return { success: false, error: 'Unsupported base selected.' }
  }

  const normalized = normalizeInput(input, fromBase)
  if (!normalized.ok) {
    return { success: false, error: normalized.error }
  }

  const steps = []
  let decimal

  if (fromBase === 10) {
    decimal = BigInt(normalized.value)
    steps.push(`Input is already decimal: ${decimal}`)
  } else {
    const toDec = toDecimalSteps(normalized.value, fromBase)
    decimal = toDec.decimal
    steps.push(...toDec.steps)
  }

  if (toBase === 10) {
    steps.push(`Target is decimal → result is ${decimal}`)
    return {
      success: true,
      result: String(decimal),
      steps,
      decimal: String(decimal),
    }
  }

  const fromDec = fromDecimalSteps(decimal, toBase)
  steps.push(...fromDec.steps)

  return {
    success: true,
    result: fromDec.result,
    steps,
    decimal: String(decimal),
  }
}

export const numberBases = BASES
