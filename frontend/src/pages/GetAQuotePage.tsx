import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const GetAQuotePage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { ref: contactRef, isVisible: contactVis } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    "Fill out the form with your requirements",
    "You will receive a confirmation via email",
    "A Partner Success Manager (PSM) will be assigned within 24 hours and will contact you via phone",
    "Review and finalize warehouse options and pricing",
    "Once rates are approved, provide email confirmation to book the warehouse",
  ];

  return (
    <>
      {/* Main Split Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Info */}
            <div className="lg:w-1/2 animate-slide-right">
              <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Core Space Warehousing provides flexible warehouse solutions tailored to businesses of all sizes. We focus on reliability, accessibility, and customized space options to ensure your storage needs are met efficiently. Serving businesses across Canada, we are committed to delivering practical and scalable warehousing solutions that support your growth.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                    <p className="text-muted-foreground text-sm pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 animate-slide-left">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Get a Quote</h2>
                <p className="text-sm text-muted-foreground mb-6">We respond within 24 hours</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">Your request has been submitted. Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">First Name *</label>
                        <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Last Name *</label>
                        <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                      <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-section-alt">
        <div className={`container mx-auto px-4 text-center ${contactVis ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">Our team is here to help you.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">info@corespacewh.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-foreground font-medium">Mon – Fri, 9AM – 6PM EST</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetAQuotePage;
