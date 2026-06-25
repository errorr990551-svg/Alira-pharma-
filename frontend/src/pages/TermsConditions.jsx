import React from 'react';
import { FileText, ClipboardList, AlertCircle, Scale, ShieldAlert, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative bg-teal-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-teal-950/70 backdrop-blur-[2px]"></div>
          <div className="w-full h-full bg-radial from-teal-800 via-teal-950 to-teal-950 opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Regulatory & Compliance</span>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white tracking-tight">Terms & Conditions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100">
            Review the contractual and legal frameworks governing B2B surgical procurement and export from Alira Pharmaceuticals.
          </p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900">Terms & Conditions</span>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-10 space-y-10">
          
          {/* Last Updated */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 border-b border-gray-100 pb-6">
            <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">Effective Date: June 25, 2026</span>
          </div>

          {/* 1. Agreement Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <Scale className="w-6 h-6 text-teal-600" />
              1. Agreement Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions govern the use of the website <Link to="/" className="text-teal-600 hover:underline">alirapharmaceuticals.com</Link> and all B2B transaction contracts, export proposals, quotes, and product supplies provided by <strong>Alira Pharmaceuticals</strong>. By accessing this website or requesting purchase contracts, you agree to comply with these terms in full.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you represent a hospital, medical distributor, or procurement firm, you warrant that you are authorized to bind your business organization to these terms.
            </p>
          </div>

          {/* 2. B2B Sales, Orders, and Quotes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-teal-600" />
              2. B2B Ordering, Customization, & Quotes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Alira Pharmaceuticals operates primarily as a manufacturer and exporter of high-precision surgical instruments, PPE, and wound care products.
            </p>
            <ul className="grid gap-3 pl-2 mt-4 text-gray-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Wholesale Focus:</strong> We do not supply directly to retail customers or individual patients. All proposals are subject to Minimum Order Quantities (MOQ).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Quote Validity:</strong> Pricing quotes issued through our sales team remain valid for thirty (30) days from the date of issuance unless stated otherwise in writing. Price adjustments may occur due to raw steel cost fluctuations.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Custom Orders:</strong> OEM manufacturing or private labeling requests require initial design deposits and official regulatory approval verification before tooling starts.</span>
              </li>
            </ul>
          </div>

          {/* 3. Export Regulations and SFDA / CE Compliance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <FileText className="w-6 h-6 text-teal-600" />
              3. Regulatory Compliance & Quality Controls
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As an ISO 13485:2016 and CE certified medical device manufacturer, we maintain absolute compliance with international standards. Customers buying our products for export (e.g. to the United Arab Emirates, Saudi Arabia, or rest of GCC) are responsible for verifying that the products satisfy local customs regulations, including SFDA registrations and health ministry declarations, prior to final shipment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alira Pharmaceuticals will provide necessary compliance papers (CoC, ISO Certificates, CE declarations) but is not liable for items held at customs due to missing buyer authorizations.
            </p>
          </div>

          {/* 4. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-teal-600" />
              4. Warranties and Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We certify that our medical-grade surgical instruments are free from material defects at the point of shipment. Our surgical steel tools carry standard warranties against fabrication splits under proper autoclave protocols.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alira Pharmaceuticals is not liable for indirect, incidental, or consequential damages resulting from product usage, sterilizer settings, or clinician error. In no circumstances will our liability exceed the invoice price paid for the specific batch of products involved in a dispute.
            </p>
          </div>

          {/* 5. Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <Scale className="w-6 h-6 text-teal-600" />
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All website content, designs, texts, product catalog formats, structural data, and images are protected by intellectual property and copyright laws. You are prohibited from copying, distributing, republishing, or harvesting product lists or blog materials from this website for competitive or commercial purposes without our express written permission.
            </p>
          </div>

          {/* 6. Governing Law */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <FileText className="w-6 h-6 text-teal-600" />
              6. Governing Law and Disputes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of India, without regard to conflict of law principles. Any legal proceedings or disputes relating to purchases, contract obligations, or web operations will be settled exclusively in the competent courts of Gautam Buddha Nagar, Uttar Pradesh, India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-100 pt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-950">7. Contact B2B Legal Department</h2>
            <p className="text-gray-600 leading-relaxed">
              If you require clarification on these Terms & Conditions, custom trade agreements, or regulatory credentials, please contact us:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <span className="block text-xs text-gray-400 font-semibold uppercase">Email</span>
                  <a href="mailto:info@alirapharmaceuticals.com" className="text-sm font-semibold text-gray-900 hover:text-teal-600 break-all">info@alirapharmaceuticals.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <span className="block text-xs text-gray-400 font-semibold uppercase">Phone</span>
                  <a href="tel:+917895850793" className="text-sm font-semibold text-gray-900 hover:text-teal-600">+91-7895850793</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <span className="block text-xs text-gray-400 font-semibold uppercase">Office Address</span>
                  <span className="text-xs text-gray-900 block font-medium leading-tight">A-116, Sector-132, Noida, UP, IN</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
