import { useMemo, useState } from 'react'
import Button from '../Button.jsx'
import { buildCycleSteps, DEMO_PROGRAM, PHASES } from '../../lib/coa/cpuCycle.js'

export default function CpuCycleSimulator() {
  const steps = useMemo(() => buildCycleSteps(DEMO_PROGRAM), [])
  const [index, setIndex] = useState(0)

  const current = steps[index]

  return (
    <div className="surface rounded-[var(--radius-card)] p-6 md:p-8">
      <h3 className="text-lg font-semibold">CPU instruction cycle simulator</h3>
      <p className="mt-2 text-sm text-secondary">
        Step through fetch, decode, execute, and store/write-back on a small predefined program. This is a
        teaching model, not a cycle-accurate CPU. Demo values start with memory[200] = 7, R1 = 0, and R2 = 5;
        the final instruction stores the result (12) in memory[201].
      </p>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold text-muted">Program in memory</h4>
          <ul className="mt-2 space-y-2 text-sm font-mono">
            {DEMO_PROGRAM.map((instr) => (
              <li
                key={instr.address}
                className={`px-3 py-2 rounded-lg border ${
                  current?.pc === instr.address
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent-muted)]'
                    : 'border-[var(--border-subtle)]'
                }`}
              >
                [{instr.address}] {instr.instruction}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm" aria-live="polite" aria-atomic="true">
            Current instruction: <strong className="font-mono">{DEMO_PROGRAM[current?.programIndex]?.instruction}</strong>
          </p>
          <p className="text-sm">
            Step {index + 1} of {steps.length} · Phase:{' '}
            <strong className="text-[var(--color-accent)]">{current?.phase}</strong>
          </p>
          <p className="text-sm text-secondary">{current?.explanation}</p>

          <dl className="grid grid-cols-2 gap-3 text-sm">
            {Object.entries(current?.components || {}).map(([key, value]) => (
              <div key={key} className="bg-[var(--bg-elevated)] rounded-lg p-3">
                <dt className="text-muted text-xs">{key}</dt>
                <dd className="font-mono mt-1">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button type="button" variant="secondary" disabled={index <= 0} onClick={() => setIndex((i) => i - 1)}>
              Previous step
            </Button>
            <Button
              type="button"
              disabled={index >= steps.length - 1}
              onClick={() => setIndex((i) => i + 1)}
            >
              Next step
            </Button>
            <Button type="button" variant="ghost" onClick={() => setIndex(0)}>
              Reset
            </Button>
          </div>

          <p className="text-xs text-muted">Phases per instruction: {PHASES.join(' → ')}</p>
        </div>
      </div>
    </div>
  )
}
