import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';
import LegalPageLayout, {
  LegalSection,
  ContactNote,
} from '@/components/LegalPageLayout';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Windows King collects, uses and protects the personal information you share through our website quote forms and contact channels.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
            ])
          ),
        }}
      />
      <LegalPageLayout
        eyebrow="Legal"
        title={
          <>
            Privacy{' '}
            <span className="font-serif italic font-normal text-emerald-800">
              Policy.
            </span>
          </>
        }
        subtitle="We respect your privacy. This policy explains what information Windows King collects when you use our website, how we use it, and the choices you have."
        updated="November 2026"
      >
        <LegalSection heading="1. Who We Are">
          <p>
            This Privacy Policy applies to{' '}
            <strong className="font-semibold text-slate-800">Windows King uPVC Doors &amp; Windows</strong>{' '}
            (“Windows King”, “we”, “us”), located at Old National Highway,
            Uranhall, Anantnag, Jammu &amp; Kashmir, India. It covers our website
            and any information you submit to us through it, by phone, WhatsApp
            or email.
          </p>
        </LegalSection>

        <LegalSection heading="2. Information We Collect">
          <p>We collect information only when you choose to share it with us:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="font-semibold text-slate-800">Quote form details</strong> —
              your name, phone number, delivery/installation address, product
              preferences (system type, glazing, finish, approximate dimensions)
              and any message you include.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Location picker</strong> —
              if you use the map selector, the coordinates of the point you
              choose, so our team can plan a site visit.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Communication records</strong> —
              messages sent by email, phone or WhatsApp, including call-back
              preferences.
            </li>
            <li>
              <strong className="font-semibold text-slate-800">Basic technical data</strong> —
              standard web server information such as browser type and pages
              visited, used only in aggregate to improve the website.
            </li>
          </ul>
          <p>
            We do not collect payments through this website, and we never ask for
            card numbers, bank details or passwords via our online forms.
          </p>
        </LegalSection>

        <LegalSection heading="3. How We Use Your Information">
          <p>We use the information you share to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prepare and send quotations and price estimates.</li>
            <li>Call or message you to discuss your requirement.</li>
            <li>Schedule site measurements, surveys and installations.</li>
            <li>Provide after-sales support, warranty service and spare parts.</li>
            <li>
              Send occasional updates about products or offers — only if you have
              asked us to.
            </li>
          </ul>
        </LegalSection>

        <LegalSection heading="4. Who We Share It With">
          <p>
            Your information is used internally by the Windows King team. We use
            a third-party email delivery service (Resend) to route quote
            submissions to our company inbox; that service processes your
            submission solely to deliver it to us. We do not sell, rent or trade
            your personal information to anyone else. We may disclose information
            if required by law or to protect our legal rights.
          </p>
        </LegalSection>

        <LegalSection heading="5. Data Retention">
          <p>
            We keep quote requests and related correspondence for as long as
            needed to service your enquiry and any resulting order, warranty
            claim or after-sales support, after which it is deleted or
            anonymised. You may ask us to delete your information at any time.
          </p>
        </LegalSection>

        <LegalSection heading="6. Your Rights">
          <p>
            You may request access to, correction of, or deletion of the personal
            information we hold about you, and you may withdraw consent for
            marketing messages at any time. To exercise any of these rights,
            contact us using the details below.
          </p>
        </LegalSection>

        <LegalSection heading="7. Cookies & Local Storage">
          <p>
            This website does not use advertising or tracking cookies. We use
            minimal browser storage only for functional purposes such as
            remembering your preferences while you use the site.
          </p>
        </LegalSection>

        <LegalSection heading="8. Children’s Privacy">
          <p>
            Our website is intended for adults making home-improvement decisions.
            We do not knowingly collect information from children.
          </p>
        </LegalSection>

        <LegalSection heading="9. Changes to This Policy">
          <p>
            We may update this policy from time to time. The “Last updated” date
            at the top of this page always shows the current version.
          </p>
        </LegalSection>

        <ContactNote />
      </LegalPageLayout>
    </SiteChrome>
  );
}
