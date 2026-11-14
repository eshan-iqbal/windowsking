import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';
import LegalPageLayout, {
  LegalSection,
  ContactNote,
} from '@/components/LegalPageLayout';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Warranty Terms',
  description:
    'Windows King 20-year product warranty and 10-year hardware warranty terms: coverage for uPVC profiles, hardware, glazing and installation workmanship, and claim procedure.',
  path: '/warranty',
});

export default function WarrantyPage() {
  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Warranty Terms', path: '/warranty' },
            ])
          ),
        }}
      />
      <LegalPageLayout
        eyebrow="Support"
        title={
          <>
            20-Year Product & 10-Year Hardware{' '}
            <span className="font-serif italic font-normal text-emerald-800">
              Warranty.
            </span>
          </>
        }
        subtitle="Every Windows King installation is protected by a 20-year product warranty and a 10-year hardware warranty. These terms explain what is covered, what is not, and how to make a claim."
        updated="November 2026"
      >
        <LegalSection heading="1. Warranty Coverage">
          <p>
            Windows King warrants its uPVC doors and windows, fabricated in-house and installed by our
            own certified teams, against manufacturing, structural, and material defects covering:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="font-semibold text-slate-800">uPVC Profiles (20-Year Warranty)</strong> —
              guaranteed for 20 years from date of installation against cracking, warping, rotting, corrosion, abnormal discolouration, or flaking under normal alpine climatic exposure.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Fabrication & Fusion Welds (20-Year Warranty)</strong> —
              guaranteed for 20 years covering corner welding strength, structural frame squareness, and sash integrity.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Hardware & Mechanisms (10-Year Warranty)</strong> —
              guaranteed for 10 years covering handles, hinges, multi-point locking shootbolts, rollers, friction stays, and locking gears against mechanical breakdown or material defects.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Glazing Units (5-Year Warranty)</strong> —
              against internal condensation (hermetic seal failure) of double or triple-glazed insulated units.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Installation Workmanship</strong> —
              fixing, perimeter weatherproofing, and alignment performed by our professional installation teams.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="2. What Is Not Covered">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Damage from accidents, impact, fire, flood, earthquakes, vandalism
              or civil disturbance.
            </li>
            <li>
              Damage or obstruction caused by structural movement of the building
              or improperly prepared openings.
            </li>
            <li>
              Glass breakage after installation (except defects present at
              handover, reported within 7 days).
            </li>
            <li>
              Normal wear items and consumables, including weather strips,
              brush seals and drainage caps beyond the first year.
            </li>
            <li>
              Misuse, forceful operation, unauthorised repairs, painting or
              modifications by any party other than Windows King.
            </li>
            <li>
              Systems maintained, repaired or re-installed by third parties after
              original installation.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="3. How to Make a Claim">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Contact us with your installation date/invoice and a description —
              and, if possible, photos or a short video — of the issue.
            </li>
            <li>
              Our service team will inspect the installation (in person or via
              shared media) within a reasonable time.
            </li>
            <li>
              For valid claims, we repair or replace the affected part or unit at
              no cost for materials and labour.
            </li>
            <li>
              Where a replacement is no longer manufactured, we will offer the
              closest equivalent product.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="4. Warranty Conditions">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The warranty applies to the original purchaser at the original
              installation address and is not transferable with the property.
            </li>
            <li>
              It is valid only when final payment has been completed in full.
            </li>
            <li>
              Routine care — cleaning drainage slots, lubricating moving
              hardware and gentle cleaning of profiles — is expected as per our
              care guidelines.
            </li>
            <li>
              This warranty is in addition to rights available under applicable
              Indian consumer law, and does not limit those rights.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="5. Exclusions of Consequential Loss">
          <p>
            The warranty covers repair or replacement of the product itself. It
            does not extend to indirect losses such as damage to furniture,
            flooring, or inconvenience caused during service visits.
          </p>
        </LegalSection>

        <ContactNote />
      </LegalPageLayout>
    </SiteChrome>
  );
}
