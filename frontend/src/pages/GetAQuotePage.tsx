import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-warehouse-1.jpg";

const GetAQuotePage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { ref: contactRef, isVisible: contactVis } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    "Submit your storage requirements below",
    "A space specialist contacts you within 24 hours",
    "Review available configurations and transparent rates",
    "Finalize the contract and schedule move-in",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Split Hero / Form Section */}
      <section className="relative w-full lg:flex">
        
        {/* Left Side - Image & Flow */}
        <div className="lg:w-[45%] bg-slate-900 text-white relative min-h-[500px] flex flex-col justify-center px-8 md:px-16 py-20 lg:py-32">
          <img src={hero1} alt="Warehouse operations" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 animate-slide-right max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-xs mb-6 tracking-widest uppercase">Start Here</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">Let's find your perfect space.</h1>
            <p className="text-lg text-slate-300 font-light mb-12">Core Space Warehousing makes scalable storage accessible. Whether you need a small secure room or a heavy industrial hub, we have the network to support you.</p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="text-accent" /> Quick Process
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute top-2 left-4 bottom-2 w-0.5 bg-white/20"></div>
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-5 relative z-10 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-accent/40">{i + 1}</div>
                    <p className="text-slate-200 mt-1 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-[55%] flex items-center justify-center p-8 md:p-16 relative">
          {/* Decorative blur */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-full max-w-xl animate-slide-left relative z-10">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Request a Quote</h2>
              <p className="text-slate-500 mb-8 font-medium">Complete this form and we'll get right back to you.</p>

              {submitted ? (
                <div className="text-center py-16 animate-fade-in-up">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Message Received!</h3>
                  <p className="text-slate-600 text-lg">Thank you for reaching out. A Partner Success Manager will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name (Optional)</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Storage Requirements</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" />
                  </div>

                  <button type="submit" className="group w-full py-4 mt-4 bg-slate-900 text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-primary transition-colors shadow-lg hover:shadow-xl">
                    Submit Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam ever.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quick Links */}
      <section ref={contactRef} className="py-24 bg-white border-t border-slate-200">
        <div className={`container mx-auto px-4 ${contactVis ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-xl">Call Us</h3>
              <p className="text-slate-500 mb-1">+1 (800) 123-4567</p>
            </div>

            <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-xl">Email Us</h3>
              <p className="text-slate-500 mb-1">info@corespacewh.com</p>
            </div>

            <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-xl">Hours</h3>
              <p className="text-slate-500 mb-1">Mon – Fri, 9AM – 6PM EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetAQuotePage;
