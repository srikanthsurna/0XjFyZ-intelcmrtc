'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  TeamOutlined,
  CalendarOutlined,
  MessageOutlined,
  FileOutlined,
  BarChartOutlined,
  CloudOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Centralized Communication Hub`,
      description: `Streamline all your organization's conversations in one place, reducing email clutter and improving response times.`,
      icon: <MessageOutlined />,
    },
    {
      heading: `Efficient Task Management`,
      description: `Assign, track, and complete tasks with ease, ensuring nothing falls through the cracks.`,
      icon: <FileOutlined />,
    },
    {
      heading: `Seamless Resource Sharing`,
      description: `Share documents, files, and knowledge effortlessly, making information accessible to all team members.`,
      icon: <CloudOutlined />,
    },
    {
      heading: `Intuitive Event Organization`,
      description: `Plan, schedule, and manage events with a user-friendly interface that keeps everyone in the loop.`,
      icon: <CalendarOutlined />,
    },
    {
      heading: `Comprehensive Member Management`,
      description: `Easily onboard, organize, and engage with your community members all in one place.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Insightful Analytics Dashboard`,
      description: `Gain valuable insights into your organization's activities and member engagement with powerful analytics tools.`,
      icon: <BarChartOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Thompson`,
      designation: `Executive Director, GreenEarth Foundation`,
      content: `This platform has revolutionized how we manage our non-profit. We've seen a 40% increase in member engagement and saved countless hours on administrative tasks.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Dr. Michael Chen`,
      designation: `President, Medical Professionals Association`,
      content: `The centralized communication hub has made it incredibly easy to disseminate important information to our members. Our response times have improved by 60%.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Community Manager, TechStart Incubator`,
      content: `The event management feature is a game-changer. We've increased attendance at our workshops by 75% and reduced planning time by half.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `Robert Kiyosaki`,
      designation: `Treasurer, Local Business Network`,
      content: `The resource sharing capabilities have transformed how we collaborate. We've eliminated redundant work and improved productivity across the board.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Blackwell`,
      designation: `Dean of Students, Westfield University`,
      content: `Managing student organizations has never been easier. We've seen a 50% increase in club participation since implementing this platform.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `James Worthington`,
      designation: `Board Member, Neighborhood Watch Association`,
      content: `The analytics dashboard provides invaluable insights. We've been able to tailor our initiatives based on member feedback and saw a 30% increase in active participation.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small organizations and communities`,
      monthly: 29,
      yearly: 290,
      features: [`Up to 100 members`, `Basic analytics`, `Standard support`],
    },
    {
      title: `Professional`,
      description: `Ideal for growing organizations with diverse needs`,
      monthly: 79,
      yearly: 790,
      features: [
        `Up to 1,000 members`,
        `Advanced analytics`,
        `Priority support`,
        `Custom branding`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large-scale organizations`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Unlimited members`,
        `Full analytics suite`,
        `24/7 dedicated support`,
        `API access`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How easy is it to migrate our existing data to your platform?`,
      answer: `We've designed our platform with easy migration in mind. Our team provides comprehensive support and tools to ensure a smooth transition of your existing data. Most organizations complete the migration process within a few days.`,
    },
    {
      question: `Can we customize the platform to match our organization's branding?`,
      answer: `Absolutely! Our Professional and Enterprise plans offer custom branding options. You can easily add your logo, adjust color schemes, and even customize certain interface elements to align with your organization's visual identity.`,
    },
    {
      question: `What kind of support do you offer?`,
      answer: `We offer tiered support based on your plan. All plans include standard email support. Our Professional plan includes priority support with faster response times, while our Enterprise plan offers 24/7 dedicated support with a personal account manager.`,
    },
    {
      question: `Is the platform compliant with data protection regulations?`,
      answer: `Yes, we take data protection very seriously. Our platform is fully compliant with GDPR, CCPA, and other major data protection regulations. We employ state-of-the-art security measures to ensure your data remains safe and private.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up`,
      description: `Create your organization's account in minutes and invite your team members.`,
    },
    {
      heading: `Customize`,
      description: `Tailor the platform to your needs by setting up communication channels, task lists, and resource libraries.`,
    },
    {
      heading: `Engage`,
      description: `Start collaborating, managing tasks, and organizing events with your newly streamlined system.`,
    },
    {
      heading: `Analyze & Improve`,
      description: `Use our powerful analytics to gain insights and continuously enhance your organization's efficiency.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Drowning in endless emails and scattered communications`,
    },
    {
      emoji: `🕰️`,
      title: `Wasting hours searching for information and resources`,
    },
    {
      emoji: `😞`,
      title: `Struggling with low member engagement and participation`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Empower Your Organization, Engage Your Community`}
        subtitle={`Streamline communication, boost efficiency, and foster collaboration with our all-in-one platform designed for modern organizations.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/0XjFyZ-intelcmrtc-1tRL`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from thriving organizations`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Organizations`}
      />
      <LandingPainPoints
        title={`The Hidden Costs of Disorganization: Reclaim 9.3 Hours Per Week`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Effortlessly Transform Your Organization in Four Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock Your Organization's Full Potential`}
        subtitle={`Discover how our comprehensive suite of features can revolutionize your operations and engagement.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How Organizations Thrive with Our Platform`}
        subtitle={`Join countless satisfied users who have transformed their operations and community engagement.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Efficiency, Cultivate Engagement`}
        subtitle={`Choose the perfect plan to elevate your organization and empower your community.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Find quick solutions to common queries about our platform.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Organization?`}
        subtitle={`Join thousands of thriving communities and start your journey to unprecedented efficiency and engagement today.`}
        buttonText={`Start Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
