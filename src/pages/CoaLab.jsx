import CpuCycleSimulator from '../components/coa/CpuCycleSimulator.jsx'
import ExpressionSimulator from '../components/coa/ExpressionSimulator.jsx'
import LearningNotes from '../components/coa/LearningNotes.jsx'
import NumberSystemConverter from '../components/coa/NumberSystemConverter.jsx'
import PageHero from '../components/PageHero.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function CoaLab() {
  usePageTitle('COA Learning Lab')

  return (
    <>
      <PageHero
        title="COA Learning Lab"
        description="Client-side educational tools for Computer Organization and Architecture — no backend or API keys required."
      />

      <div className="space-y-10 pb-12">
        <NumberSystemConverter />
        <ExpressionSimulator />
        <CpuCycleSimulator />
        <LearningNotes />
      </div>
    </>
  )
}
