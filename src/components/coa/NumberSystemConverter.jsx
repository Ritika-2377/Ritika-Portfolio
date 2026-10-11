import { useState } from 'react'
import Button from '../Button.jsx'
import { convertNumber } from '../../lib/coa/numberSystem.js'

const BASE_OPTIONS = [
  { value: 2, label: 'Binary (base 2)' },
  { value: 8, label: 'Octal (base 8)' },
  { value: 10, label: 'Decimal (base 10)' },
  { value: 16, label: 'Hexadecimal (base 16)' },
]

const EXAMPLES = [
  { label: 'Binary 1010 → Decimal', input: '1010', from: 2, to: 10 },
  { label: 'Decimal 255 → Hex', input: '255', from: 10, to: 16 },
  { label: 'Hex FF → Octal', input: 'FF', from: 16, to: 8 },
]

export default function NumberSystemConverter() {
  const [input, setInput] = useState('')
  const [fromBase, setFromBase] = useState(10)
  const [toBase, setToBase] = useState(2)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [copyStatus, setCopyStatus] = useState('')

  const runConvert = () => {
    const out = convertNumber(input, fromBase, toBase)
    if (!out.success) {
      setError(out.error)
      setResult(null)
      return
    }
    setError('')
    setResult(out)
  }

  const reset = () => {
    setInput('')
    setError('')
    setResult(null)
    setCopyStatus('')
  }

  const copyResult = async () => {
    if (!result?.result) return
    try {
      await navigator.clipboard.writeText(String(result.result))
      setCopyStatus('Result copied to clipboard.')
    } catch {
      setCopyStatus('Clipboard unavailable. Select and copy the result instead.')
    }
  }

  return (
    <div className="surface rounded-[var(--radius-card)] p-6 md:p-8">
      <h3 className="text-lg font-semibold">Number system converter</h3>
      <p className="mt-2 text-sm text-secondary">
        Convert between binary, decimal, octal, and hexadecimal with validation and step-by-step notes.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="text-muted">From base</span>
          <select
            className="mt-1 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-2.5 min-h-[44px]"
            value={fromBase}
            onChange={(e) => {
              setFromBase(Number(e.target.value))
              setResult(null)
              setError('')
              setCopyStatus('')
            }}
          >
            {BASE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-muted">To base</span>
          <select
            className="mt-1 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-2.5 min-h-[44px]"
            value={toBase}
            onChange={(e) => {
              setToBase(Number(e.target.value))
              setResult(null)
              setError('')
              setCopyStatus('')
            }}
          >
            {BASE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block mt-4 text-sm">
        <span className="text-muted">Input value</span>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setResult(null)
            setError('')
            setCopyStatus('')
          }}
          className="mt-1 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-2.5 min-h-[44px] font-mono"
          placeholder="Enter digits valid for the source base"
          aria-describedby="ns-examples"
        />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" onClick={runConvert}>
          Convert
        </Button>
        <Button type="button" variant="secondary" onClick={reset}>
          Reset
        </Button>
        {result?.result != null && (
          <Button type="button" variant="ghost" onClick={copyResult}>
            Copy result
          </Button>
        )}
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      {result?.success && (
        <div className="mt-6 p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
          <p className="text-sm text-muted">Result</p>
          <p className="text-2xl font-mono font-semibold mt-1">{result.result}</p>
          {result.steps?.length > 0 && (
            <ol className="mt-4 space-y-1 text-sm text-secondary list-decimal pl-5">
              {result.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}
        </div>
      )}

      {copyStatus && <p className="mt-2 text-sm text-secondary" role="status">{copyStatus}</p>}

      <div id="ns-examples" className="mt-6">
        <p className="text-sm font-medium">Examples</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <li key={ex.label}>
              <button
                type="button"
                className="text-xs px-3 py-2 rounded-lg border border-[var(--border-strong)] hover:bg-[var(--bg-elevated)] min-h-[44px]"
                onClick={() => {
                  setInput(ex.input)
                  setFromBase(ex.from)
                  setToBase(ex.to)
                  setError('')
                  setResult(null)
                  setCopyStatus('')
                }}
              >
                {ex.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
