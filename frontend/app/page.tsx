"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  const titleRef = useRef(null);
  const featureCards = [
    {
      title: "Analyze In Real-Time While Writing",
      badge: "Smart Resume Analysis",
      body: "By removing the guesswork that blocks productivity when building your career profile.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Deploy Optimized Resumes To Your Entire Job Search",
      badge: "ATS Optimization",
      body: "With a one-click system that makes it easy to get started and works across all job boards.",
      imageUrl: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Become A Leader In Tech Recruitment",
      badge: "AI-Powered Suggestions",
      body: "Intelligently using our analysis engine to surface skills gaps and improvement opportunities.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Accelerate Career Growth",
      badge: "Developer-Tailored Feedback",
      body: "By eliminating the friction that blocks productivity when applying for tech roles.",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for exploring our AI capabilities",
      features: [
        "3 AI resume analyses per month",
        "Basic ATS compatibility check",
        "Standard resume templates",
        "PDF download",
        "Community support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Best for active job seekers",
      features: [
        "Unlimited AI resume analyses",
        "Advanced ATS optimization",
        "Premium resume templates",
        "Multiple file formats (PDF, Word, LinkedIn)",
        "Priority email support",
        "Resume performance analytics",
        "Custom skill recommendations"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Lifetime",
      price: "$99",
      period: "one-time",
      originalPrice: "$199",
      description: "Best value for career growth",
      features: [
        "All Pro features included",
        "Lifetime updates & new features",
        "1-on-1 career consultation (30 min)",
        "LinkedIn profile optimization",
        "Priority chat support",
        "Resume review by human experts"
      ],
      cta: "Get Lifetime Access",
      popular: false
    }];

  useGSAP(() => {
    gsap.set(titleRef.current, {
      backgroundSize: "130% 130%",
    });

    gsap.fromTo(
      titleRef.current,
      {
        backgroundPosition: "100% 100%",
        filter: "brightness(1)"
      },
      {
        backgroundPosition: "0% 0%",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <>
      <section id="hero" className="flex flex-col items-center justify-center gap-4 mt-10 lg:max-h-[calc(100vh-5rem)] lg:mt-0 overflow-hidden lg:justify-start lg:pt-20">
        <div className="h-[10rem] w-[10rem] absolute bg-white -z-10 top-1/3 -translate-y-1/2 brightness-50 rounded-full blur-3xl scale-120 lg:scale-200 lg:translate-y-1/2">
        </div>
        <Badge className="lg:scale-120">AI Developer CV Enhancer</Badge>
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-br from-primary/10 via-primary to-primary/10 text-transparent bg-clip-text bg-no-repeat lg:text-5xl capitalize lg:leading-tight" ref={titleRef}>
          Empower every developer, upgrade every resume, everywhere.
        </h1>
        <span className="text-center text-primary/70 lg:text-xl">Instantly receive actionable suggestions and corrections to boost interview success.</span>
        <div className="flex gap-2 mt-6 mb-8">
          <Button size={"sm"} className="shadow">Get Started for Free</Button>
          <Button variant={"secondary"} size={"sm"} className="shadow">View Demo {"->"}</Button>
        </div>
        <div className="w-full rounded-md max-w-md overflow-hidden xl:max-w-xl">
          <video
            autoPlay
            muted
            playsInline
            loop
            controls={false}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="features" className="mt-20 flex flex-col items-center md:mt-32">
        <Badge className="mx-auto md:scale-120">Features</Badge>
        <h2 className="text-2xl font-bold text-center text-primary/90 mt-4 md:text-3xl md:mt-6">All Of Your Resume Improvements
          In One Place</h2>
        <span className="mt-3 text-center w-full block text-sm font-semibold text-primary/60 md:mt-4 md:text-xl">AI-Powered Resume Enhancement For Developers.</span>
        <div className="grid w-full gap-6 mt-12 md:grid-cols-3 md:mt-16 md:gap-8">
          {featureCards.map((card, index) => {
            const isWide = index == 0 || index == 3;

            const getOriginClass = (idx: number) => {
              switch (idx % 4) {
                case 0: return 'md:origin-top-left';
                case 1: return 'md:origin-top-right';
                case 2: return 'md:origin-bottom-left';
                case 3: return 'md:origin-bottom-right';
                default: return 'md:origin-center';
              }
            };

            return (
              <Card
                className={`
                  aspect-square md:aspect-auto overflow-hidden 
                  ${isWide ? "md:col-span-2 md:row-span-1" : "md:col-span-1"} 
                  hover:scale-[1.02] transition-all duration-300 ease-in-out
                  peer
                  peer-hover:scale-95 has-[~_.peer:hover]:scale-95
                  ${getOriginClass(index)}
                  relative
                `}
                key={index}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30 rounded-xl blur-3xl opacity-75 group-hover:opacity-100 transition duration-300 scale-60"></div>
                <CardHeader className={isWide ? "text-nowrap" : ""}>
                  <CardTitle className="md:text-xl font-normal">{index + 1}. {card.title}</CardTitle>
                  <CardDescription><Badge className="mt-2">{card.badge}</Badge></CardDescription>
                </CardHeader>
                <CardContent className={`w-full flex flex-col gap-3 ${isWide ? "md:flex-row items-center md:gap-20" : ""}`}>
                  <p>{card.body}</p>
                  <img
                    src={card.imageUrl}
                    alt=""
                    className={`
                      md:self-end object-cover aspect-square rounded-md transition-transform duration-300 relative z-20
                      ${isWide ? "md:max-h-[15rem]" : "md:max-h-[10rem] w-full aspect-auto"}
                    `}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="howItWorks" className="mt-20 md:mt-32">
        <h2 className="text-center text-2xl font-bold md:text-4xl">How It Works?</h2>
        <span className="text-sm w-full block text-center font-bold mt-3 text-primary/60 md:text-xl md:mt-4">From upload to interview-ready in under 60 seconds</span>
        <div className="aspect-video bg-white mt-12 rounded-md md:mt-16">
          <iframe src="https://www.youtube.com/embed/7LbAaBTKMLg?si=1ABUfLI0Rlg6oj7y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full rounded-md"></iframe>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/20 mt-20 md:mt-32" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing for Every Stage of Your Career
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your needs and start optimizing your resume today.
            </p>
            <Badge className="mb-8 md:scale-120">No hidden fees • Cancel anytime • 30-day money-back guarantee</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300 scale-70"></div>

                <Card className={`
                  relative backdrop-blur-md bg-white/10 border border-white/20
                  ${tier.popular ? 'scale-105 border-primary/50' : ''}
                  transition-all duration-300 hover:scale-105
                `}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    {tier.originalPrice && (
                      <span className="text-sm line-through text-muted-foreground">
                        Originally {tier.originalPrice}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="text-left">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the AI resume analysis work?</AccordionTrigger>
                  <AccordionContent>
                    Our AI analyzes your resume against thousands of job descriptions and industry standards. It checks for ATS compatibility, keyword optimization, formatting issues, and provides specific suggestions to improve your chances of getting interviews.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my resume data secure and private?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We use enterprise-grade encryption and never store your personal information permanently. Your resume is analyzed in real-time and automatically deleted from our servers after processing. We're GDPR compliant and take data privacy seriously.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What file formats do you support?</AccordionTrigger>
                  <AccordionContent>
                    We support PDF, Word (.docx), and plain text formats for upload. You can download your optimized resume in PDF, Word, or get LinkedIn-optimized content for easy copy-pasting to your profile.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How is this different from other resume builders?</AccordionTrigger>
                  <AccordionContent>
                    Unlike generic resume builders, DevProof AI is specifically trained on developer and tech roles. We understand programming languages, frameworks, and technical skills. Our AI provides context-aware suggestions that actually matter for tech recruiting.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel anytime with no questions asked. There are no long-term contracts or hidden fees. Your Pro features will remain active until the end of your current billing cycle.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with the results, contact our support team and we'll provide a full refund, no questions asked.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
