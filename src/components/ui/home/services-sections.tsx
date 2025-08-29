import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Search,
  Target,
  Palette,
  Video,
  Play,
  Sparkles,
  PenTool,
} from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "Cross-Platform", "User-Friendly"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
    features: ["Keyword Research", "On-Page SEO", "Link Building"],
  },
  {
    icon: Target,
    title: "Google Ads Campaigns",
    description:
      "Targeted advertising campaigns that maximize ROI and drive qualified leads to your business.",
    features: ["PPC Management", "Ad Optimization", "ROI Tracking"],
  },
  {
    icon: Palette,
    title: "Creative Graphic Design",
    description:
      "Eye-catching designs that communicate your brand message and captivate your audience.",
    features: ["Brand Identity", "Print Design", "Digital Graphics"],
  },
  {
    icon: Video,
    title: "Video Shoot & Production",
    description:
      "Professional video content that tells your story and engages your target audience effectively.",
    features: ["Corporate Videos", "Product Demos", "Social Content"],
  },
  {
    icon: Play,
    title: "Video Ads",
    description:
      "Compelling video advertisements that drive conversions and boost brand awareness.",
    features: ["Social Media Ads", "YouTube Ads", "Display Videos"],
  },
  {
    icon: Sparkles,
    title: "Branding Solutions",
    description:
      "Complete brand identity development that sets you apart from the competition.",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
  },
  {
    icon: PenTool,
    title: "Logo Creation",
    description:
      "Memorable logos that represent your brand values and create lasting impressions.",
    features: ["Custom Design", "Multiple Concepts", "Vector Files"],
  },
];

export function ServicesSection() {
  useEffect(() => {
    // h2 animation
    gsap.fromTo(
      "#service-heading h2",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#service-heading h2",
          start: "top 80%",
          end: "top 20%",
          onEnter: () =>
            gsap.to("#service-heading h2", { opacity: 1, x: 0, duration: 1 }),
          onLeaveBack: () =>
            gsap.to("#service-heading h2", {
              opacity: 0,
              x: -100,
              duration: 1,
            }),
        },
      }
    );

    gsap.fromTo(
      "#service-heading p",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#service-heading p",
          start: "top 80%",
          end: "top 20%",
          onEnter: () =>
            gsap.to("#service-heading p", { opacity: 1, x: 0, duration: 1 }),
          onLeaveBack: () =>
            gsap.to("#service-heading p", { opacity: 0, x: 100, duration: 1 }),
        },
      }
    );
  }, []);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="service-heading" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive IT solutions designed to accelerate your
            business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 
             bg-gradient-to-br from-[#553d88] via-[#8877ab] to-[#553d88] text-white"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl gradient-brand-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 " />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold  mb-4">{service.title}</h3>
                <p className=" mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm "
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-white group-hover:text-black transition-colors bg-transparent"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <Button
            size="lg"
            className="gradient-brand-subtle text-white hover:opacity-90 px-8"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
