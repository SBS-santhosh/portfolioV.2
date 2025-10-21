import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contactez-<span className="text-primary">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Informations</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:santhoshfrancecool@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    santhoshfrancecool@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a
                    href="tel:+33699288801"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    06 99 28 88 01
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localisation</h4>
                  <span className="text-muted-foreground">
                    Paris, France
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Réseaux sociaux</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://fr.linkedin.com/in/satheeskumar-santhosh-40288726a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/not_santhosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Envoyez un message</h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="f31466ea-81ed-497a-926f-cfd0393c27be"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                Envoyer
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};