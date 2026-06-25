import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative bg-teal-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-teal-950/70 backdrop-blur-[2px]"></div>
          <div className="w-full h-full bg-radial from-teal-800 via-teal-950 to-teal-950 opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Security & Compliance</span>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100">
            Learn how Alira Pharmaceuticals collects, utilizes, protects, and handles your data in accordance with global regulations.
          </p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900">Privacy Policy</span>
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

          {/* Intro */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <Shield className="w-6 h-6 text-teal-600" />
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At <strong>Alira Pharmaceuticals</strong>, we are committed to safeguarding the privacy and confidentiality of our global B2B clients, healthcare providers, distributors, and visitors. This Privacy Policy describes how we collect, process, share, and protect your information when you interact with our website (<Link to="/" className="text-teal-600 hover:underline">alirapharmaceuticals.com</Link>) and purchase our medical devices, surgical instruments, and PPE products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our website, services, or contacting us for wholesale medical quotes, you consent to the data collection and usage practices described in this policy.
            </p>
          </div>

          {/* Information Collection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <Eye className="w-6 h-6 text-teal-600" />
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information to deliver efficient B2B services, provide product estimates, and comply with international medical device distribution rules. This includes:
            </p>
            <ul className="grid gap-3 pl-2 mt-4 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Contact Details:</strong> Name, professional email address, phone number, company name, medical licenses, and delivery address.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Business Verification Info:</strong> Healthcare facility registrations, business registration certificates, or procurement authorization details when ordering medical grade devices.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Usage Data & Tech Specs:</strong> IP addresses, browser types, referral paths, device type, geographic location, and interaction logs with our product catalog pages.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Cookies & Tracking:</strong> Details gathered via opt-in cookie tracking tags (e.g. Google Ads, Microsoft Clarity) to optimize navigation and evaluate website performance.</span>
              </li>
            </ul>
          </div>

          {/* Usage */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <FileText className="w-6 h-6 text-teal-600" />
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your personal and corporate details are utilized strictly for authentic business and compliance actions:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Fulfillment & Quotes</h4>
                <p className="text-sm text-gray-600">To calculate freight rates, customize surgical tool batches, process orders, and send quotes requested through our contact forms.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                <p className="text-sm text-gray-600">To track surgical tool batches, handle device recalls under ISO 13485 requirements, and verify customer identities.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Site Optimization</h4>
                <p className="text-sm text-gray-600">To monitor usage patterns, prevent security breaches, improve UI speeds, and fix broken pages or 404 links.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Compliance & Audits</h4>
                <p className="text-sm text-gray-600">To enforce legal terms, satisfy tax mandates, check trade sanctions, and respond to regulatory inspections in target markets.</p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <Lock className="w-6 h-6 text-teal-600" />
              4. Data Protection & Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We execute appropriate technical and organizational safety measures to protect client records from unauthorised access, alteraton, disclosure, or damage. We run secure HTTPS communication, encrypt server-side data, and limit employee access to data databases.
            </p>
            <p className="text-gray-600 leading-relaxed">
              However, please note that no internet transmission or computer storage system is 100% immune to vulnerabilities. While we strive to protect your professional information, we cannot guarantee absolute absolute security.
            </p>
          </div>

          {/* Cookies and Opt-In */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <Shield className="w-6 h-6 text-teal-600" />
              5. Cookies and Marketing Tags
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We employ cookie identifiers to record user options, track general traffic levels, and deliver personalized commercial messages. In adherence to European GDPR rules and Middle East telecom regulations, we display an interactive Cookie Consent banner. Advertising tags (e.g. Google Ads) and user behavioral trackers (e.g. Microsoft Clarity) remain fully inactive until you explicitly click "Accept All" or configure your preferences.
            </p>
          </div>

          {/* Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-950 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-teal-600" />
              6. Your Legal Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your location (such as the EU, UK, GCC, or Saudi Arabia), you possess various rights concerning your personal information:
            </p>
            <ul className="grid gap-2 pl-4 text-gray-600 list-disc">
              <li><strong>Access:</strong> The right to demand duplicates of data records held by us.</li>
              <li><strong>Correction:</strong> The right to ask us to modify incorrect or outdated company facts.</li>
              <li><strong>Deletion:</strong> The right to demand erasure of your personal data, subject to regulatory retention limits.</li>
              <li><strong>Restriction:</strong> The right to limit our processing of specific details.</li>
              <li><strong>Consent Withdrawal:</strong> The right to revoke previous consent choices at any time.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-100 pt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-950">7. Contact Compliance Team</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our dedicated compliance officer:
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

export default PrivacyPolicy;
