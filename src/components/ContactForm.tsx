import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message,
          }),
        },
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        toast({
          title: "Message sent!",
          description:
            "Your message has been received! We'll be in touch soon.",
          variant: "default",
        });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (err) {
      const errorMessage = "Something went wrong. Please try again.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted" id="contact">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Ready to transform your property? Contact us for a free,
              no-obligation estimate. We serve Toronto and the entire GTA.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+16471234567"
                    className="font-semibold text-foreground"
                  >
                    (647) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:info@torontosiding.ca"
                    className="font-semibold text-foreground"
                  >
                    info@torontosiding.ca
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-semibold text-foreground">
                    123 Yonge St, Toronto, ON
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl shadow-card p-8 border border-border space-y-4"
          >
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Your message has been received! We'll be in touch soon.
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                disabled={loading}
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                disabled={loading}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                disabled={loading}
              />
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                disabled={loading}
              >
                <option value="">Select Service</option>
                <option value="vinyl">Vinyl Siding</option>
                <option value="cedar">Cedar Siding</option>
                <option value="fiber">Fiber Cement Siding</option>
                <option value="repair">Siding Repair</option>
                <option value="soffit">Soffit & Fascia</option>
                <option value="gutter">Gutter Installation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              maxLength={1000}
              disabled={loading}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary text-secondary-foreground hover:bg-amber-dark text-base"
              disabled={loading}
            >
              <Send className="mr-2 h-5 w-5" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
