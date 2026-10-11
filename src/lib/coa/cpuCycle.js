/** A small, deterministic teaching program; values are intentionally illustrative. */
export const DEMO_PROGRAM = [
  { address: 100, instruction: 'LOAD R1, [200]', mnemonic: 'LOAD', desc: 'Load memory[200] into R1' },
  { address: 101, instruction: 'ADD R1, R2', mnemonic: 'ADD', desc: 'Add R2 to R1' },
  { address: 102, instruction: 'STORE [201], R1', mnemonic: 'STORE', desc: 'Store R1 in memory[201]' },
]

export const PHASES = ['FETCH', 'DECODE', 'EXECUTE', 'STORE']

export function buildCycleSteps(program = DEMO_PROGRAM) {
  const steps = []
  const registers = { R1: 0, R2: 5 }
  const memory = { 200: 7, 201: 0 }
  const state = { pc: program[0]?.address ?? '—', ir: '—', mar: '—', mdr: '—', alu: 'Idle' }

  program.forEach((instr, programIndex) => {
    let pendingWrite = '—'

    PHASES.forEach((phase) => {
      let explanation

      if (phase === 'FETCH') {
        state.pc = instr.address
        state.mar = instr.address
        state.mdr = instr.instruction
        state.ir = instr.instruction
        state.alu = 'Idle'
        explanation = `PC (${instr.address}) addresses program memory. The instruction is fetched into MDR and copied to IR.`
      } else if (phase === 'DECODE') {
        explanation = `The control unit decodes ${instr.mnemonic}: ${instr.desc}.`
      } else if (phase === 'EXECUTE') {
        state.alu = instr.mnemonic === 'ADD' ? 'R1 + R2' : instr.mnemonic === 'LOAD' ? 'Read memory' : 'Prepare memory write'
        if (instr.mnemonic === 'LOAD') {
          const address = Number(instr.instruction.match(/\[(\d+)\]/)?.[1])
          pendingWrite = memory[address] ?? 0
          explanation = `Read memory[${address}] (${pendingWrite}) and prepare to write that value to R1.`
        } else if (instr.mnemonic === 'ADD') {
          pendingWrite = registers.R1 + registers.R2
          explanation = `The ALU adds R1 (${registers.R1}) and R2 (${registers.R2}); result ${pendingWrite} is ready for R1.`
        } else {
          const address = Number(instr.instruction.match(/\[(\d+)\]/)?.[1])
          pendingWrite = { address, value: registers.R1 }
          explanation = `Prepare to write R1 (${registers.R1}) to memory[${address}].`
        }
      } else {
        if (instr.mnemonic === 'LOAD' || instr.mnemonic === 'ADD') {
          registers.R1 = pendingWrite
          explanation = `Write ${registers.R1} back to R1. The next instruction address is loaded into PC.`
        } else if (instr.mnemonic === 'STORE') {
          memory[pendingWrite.address] = pendingWrite.value
          explanation = `Write ${pendingWrite.value} to memory[${pendingWrite.address}]. The program's final result is now stored.`
        }
        state.pc = program[programIndex + 1]?.address ?? 'Halt'
        state.alu = 'Idle'
      }

      const pendingLabel = typeof pendingWrite === 'object'
        ? `M[${pendingWrite.address}] ← ${pendingWrite.value}`
        : phase === 'EXECUTE' && instr.mnemonic !== 'STORE'
          ? `R1 ← ${pendingWrite}`
          : '—'

      steps.push({
        id: `${programIndex}-${phase}`,
        phase,
        pc: instr.address,
        ir: state.ir,
        explanation,
        components: {
          PC: state.pc,
          IR: state.ir,
          MAR: state.mar,
          MDR: state.mdr,
          'ALU / operation': state.alu,
          'Accumulator (R1)': registers.R1,
          R2: registers.R2,
          'Memory [200]': memory[200],
          'Memory [201]': memory[201],
          'Pending write': pendingLabel,
        },
        programIndex,
      })
    })
  })

  return steps
}
