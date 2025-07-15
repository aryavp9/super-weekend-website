import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Target, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SuperWeekends
            </h1>
          </div>
          <div className="space-x-4">
            <Link href="/auth/signin">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                Join Next Event
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
          <Zap className="h-3 w-3 mr-1" />
          Next Event: March 15-16, 2024
        </Badge>

        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          Work With Us.
          <br />
          <span className="text-4xl md:text-6xl">Before You Join Us.</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Skip the traditional interview process. Spend a weekend working alongside our team, solving real problems, and
          discovering if we're the right fit for each other.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg"
            >
              Apply for March Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/events/upcoming">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">This Isn't Your Average Interview</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our culture, work style, and team dynamics firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Work With The Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Collaborate directly with our engineers, designers, and product managers on real challenges we're
                facing.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Learn Our Process</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Discover our unique approach to problem-solving, decision-making, and building products that matter.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Test Your Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Put your technical and creative thinking to the test with challenges that mirror our day-to-day work.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Skip to Finals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Exceptional participants may receive an offer or advance directly to final round interviews.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Your SuperWeekend Journey</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From application to potential offer - here's what to expect
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Apply & Submit Case Study",
                description:
                  "Tell us about yourself and submit a case study that showcases your problem-solving approach.",
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "02",
                title: "Weekend Immersion",
                description: "Spend Saturday and Sunday working with our team on real projects and challenges.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "03",
                title: "Showcase & Feedback",
                description: "Present your work, get feedback from the team, and learn about our culture and values.",
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "04",
                title: "Decision & Next Steps",
                description:
                  "Outstanding participants may receive offers or invitations to final interviews within a week.",
                color: "from-orange-500 to-red-500",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center border border-white/10 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Something Different?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our next SuperWeekend and discover if we're the perfect match for your next career move.
          </p>
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-12 py-6 text-xl"
            >
              Apply Now - March 15-16
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400">&copy; 2024 SuperWeekends. A unique hiring experience.</p>
        </div>
      </footer>
    </div>
  )
}
