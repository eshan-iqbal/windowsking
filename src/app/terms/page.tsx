import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';
import LegalPageLayout, {
  LegalSection,
  ContactNote,
} from '@/components/LegalPageLayout';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms and conditions governing the use of the Windows King website, quotations, orders and installation services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Terms of Service', path: '/terms' },
            ])
          ),
        }}
      />
      <LegalPageLayout
        eyebrow="Legal"
        title={
          <>
            Terms of{' '}
            <span className="font-serif italic font-normal text-emerald-800">
              Service.
            </span>
          </>
        }
        subtitle="These terms govern your use of the Windows King website and the quotations, orders and installation services we provide through it."
        updated="November 2026"
      >
        <LegalSection heading="1. Acceptance of Terms">
          <p>
            By accessing this website or submitting an enquiry to{' '}
            <strong className="font-semibold text-slate-800">
              Windows King uPVC Doors &amp; Windows
            </strong>{' '}
            (“Windows King”, “we”, “us”), you agree to these Terms of Service. If
            you do not agree, please do not use the website.
          </p>
        </LegalSection>

        <LegalSection heading="2. Website Use">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Content on this site — text, images, specifications and the quote
              estimator — is provided for general information about our products
              and services.
            </li>
            <li>
              You may not copy, reuse or redistribute our content, images or
              branding for commercial purposes without written permission.
            </li>
            <li>
              You agree not to misuse the website, including submitting false
              enquiries, spam or content that is unlawful or abusive.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="3. Quotes & Estimates">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Prices shown by the online quote estimator are{' '}
              <strong className="font-semibold text-slate-800">
                indicative estimates only
              </strong>
              , based on the system, glazing, finish and dimensions you enter.
            </li>
            <li>
              A binding quotation is issued only in writing after site
              measurement and final specification confirmation by our team.
            </li>
            <li>
              Quotations are typically valid for 30 days unless stated otherwise,
              and are subject to material availability and applicable taxes.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="4. Orders, Production & Installation">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Orders are confirmed on receipt of the agreed advance payment and
              signed confirmation of the final specification.
            </li>
            <li>
              Delivery and installation timelines are estimates and may vary with
              site conditions, weather and material availability.
            </li>
            <li>
              The customer is responsible for providing safe access to the site,
              electrical points and civil readiness (openings prepared to
              specification) at the time of installation.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="5. Payments">
          <p>
            Payment schedules are agreed in writing with each order. Prices are
            inclusive/exclusive of GST as stated in the quotation. Goods remain
            the property of Windows King until full payment is received.
          </p>
        </LegalSection>

        <LegalSection heading="6. Product Information">
          <p>
            We work hard to keep specifications, images and descriptions
            accurate. However, minor variations in profile systems, hardware,
            finishes and glass are possible; the signed quotation for your order
            always takes precedence over website content.
          </p>
        </LegalSection>

        <LegalSection heading="7. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Windows King is not liable
            for indirect or consequential losses arising from use of this
            website, or for decisions taken purely on the basis of online
            estimates before written confirmation. Our liability for products and
            services is limited to the terms of our warranty and the signed order
            agreement.
          </p>
        </LegalSection>

        <LegalSection heading="8. Governing Law">
          <p>
            These terms are governed by the laws of India. Any disputes are
            subject to the jurisdiction of the courts of Anantnag, Jammu &amp;
            Kashmir.
          </p>
        </LegalSection>

        <LegalSection heading="9. Changes to These Terms">
          <p>
            We may update these terms from time to time. The “Last updated” date
            at the top of this page always shows the current version.
          </p>
        </LegalSection>

        <ContactNote />
      </LegalPageLayout>
    </SiteChrome>
  );
}
