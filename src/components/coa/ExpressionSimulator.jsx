import { useState } from 'react'
import Button from '../Button.jsx'
import { DEFAULT_OPERAND_VALUES, evaluatePostfix } from '../../lib/coa/evaluatePostfix.js'
import { infixToPostfix } from '../../lib/coa/infixToPostfix.js'
import { processExpression } from '../../lib/coa/simulator.js'

const EXAMPLES = ['(A+B)*(C-D)/E', 'A+B*C', '(X+Y)*(Z-W)', 'A/B+C-D']

export default function ExpressionSimulator() {
  const [expression, setExpression] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const handleGenerate = () => {
    const output = processExpression(expression)
    if (!output.success) {
      setError(output.error)
      setResult(null)
      return
    }

    const tokens = infixToPostfix(expression)
    const evaluation = evaluatePostfix(tokens)

    setError('')
    setResult({ ...output, evaluation, tokens })
  }

  const reset = () => {
    setExpression('')
    setError('')
    setResult(null)
  }

  return (
    <div className="surface rounded-[var(--radius-card)] p-6 md:p-8">
      <h3 className="text-lg font-semibold">Arithmetic expression simulator</h3>
      <p className="mt-2 text-sm text-secondary">
        Infix → postfix conversion with stack steps, instruction formats (three-, two-, one-, and zero-address),
        and postfix evaluation. Operands are uppercase letters A–Z; evaluation uses demo values A=1, B=2, … Z=26
        (see <code className="text-xs">src/lib/coa/evaluatePostfix.js</code> to customize). No{' '}
        <code className="text-xs">eval()</code> is used.
      </p>

      <label className="block mt-6 text-sm">
        <span className="text-muted">Infix expression</span>
        <input
          type="text"
          value={expression}
          onChange={(e) => {
            setExpression(e.target.value)
            setError('')
            setResult(null)
          }}
          className="mt-1 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-2.5 min-h-[44px] font-mono"
          placeholder="e.g. (A+B)*C"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'expression-error' : undefined}
        />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" onClick={handleGenerate}>
          Analyze
        </Button>
        <Button type="button" variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            type="button"
            className="text-xs px-3 py-2 rounded-lg border border-[var(--border-strong)] hover:bg-[var(--bg-elevated)] min-h-[44px]"
            onClick={() => {
              setExpression(ex)
              setError('')
              setResult(null)
            }}
          >
            {ex}
          </button>
        ))}
      </div>

      {error && (
        <p id="expression-error" className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      {result && (
        <div className="mt-8 space-y-8">
          <section>
            <h4 className="font-semibold">Postfix (RPN)</h4>
            <p className="mt-2 font-mono text-sm bg-[var(--bg-elevated)] p-3 rounded-lg">{result.postfix}</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-[var(--border-subtle)]">
                <thead>
                  <tr className="bg-[var(--bg-elevated)] text-left">
                    <th className="p-2">Step</th>
                    <th className="p-2">Action</th>
                    <th className="p-2">Output queue</th>
                    <th className="p-2">Operator stack</th>
                  </tr>
                </thead>
                <tbody>
                  {result.postfixSteps.map((step, i) => (
                    <tr key={i} className="border-t border-[var(--border-subtle)]">
                      <td className="p-2 text-muted">{i + 1}</td>
                      <td className="p-2">{step.action}</td>
                      <td className="p-2 font-mono">{step.output.join(' ') || '—'}</td>
                      <td className="p-2 font-mono">{step.stack.join(' ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {result.evaluation?.success && (
            <section>
              <h4 className="font-semibold">Postfix evaluation (demo operand values)</h4>
              <p className="mt-2 text-sm text-secondary">
                Result: <span className="font-mono font-semibold">{result.evaluation.result}</span>
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {result.evaluation.steps.map((s, i) => (
                  <li key={i} className="font-mono bg-[var(--bg-elevated)] p-2 rounded">
                    {s.action} · stack [{s.stack.join(', ')}]
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted">
                Operand map sample: A={DEFAULT_OPERAND_VALUES.A}, B={DEFAULT_OPERAND_VALUES.B}, C=
                {DEFAULT_OPERAND_VALUES.C}
              </p>
            </section>
          )}

          {[
            ['Three-address instructions', result.threeAddress],
            ['Two-address instructions', result.twoAddress],
            ['One-address instructions', result.oneAddress],
            ['Zero-address (stack) instructions', result.zeroAddress],
          ].map(([title, block]) => (
            <section key={title}>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-xs text-muted mt-1">
                Educational sequence from postfix order; assumes a simple register/stack model — not a specific
                real ISA.
              </p>
              <pre className="mt-3 text-sm font-mono bg-[var(--bg-elevated)] p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                {block?.instructions?.length ? block.instructions.join('\n') : '—'}
              </pre>
              {block?.count != null && (
                <p className="mt-2 text-xs text-muted">Instruction count: {block.count}</p>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
