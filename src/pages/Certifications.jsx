import CertificationCard from '../components/CertificationCard.jsx'

import Button from '../components/Button.jsx'

import PageHero from '../components/PageHero.jsx'

import { certifications } from '../data/certifications.js'

import { usePageTitle } from '../hooks/usePageTitle.js'



export default function CertificationsPage() {

  usePageTitle('Certifications')



  return (

    <>

      <PageHero

        title="Certifications"

        description="Microsoft Azure Fundamentals and Azure AI Fundamentals certificates."

      />



      <div className="grid md:grid-cols-2 gap-6 pb-12">

        {certifications.map((cert) => (

          <CertificationCard key={cert.id} cert={cert} />

        ))}

      </div>



      <div className="pb-10 text-center border-t border-[var(--border-subtle)] pt-10">

        <Button to="/achievements" variant="secondary">

          View achievements & leadership

        </Button>

      </div>

    </>

  )

}

