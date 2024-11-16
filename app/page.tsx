import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Building2, Users, Globe, BookOpen, Award, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">LongTerm Alpha</h1>
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unlock the Power of Quantitative Analysis</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover investment opportunities with our advanced stock analysis tools
          </p>
          <Button size="lg">Start Your Free Trial</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="mr-2" />
                Fundamental Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              Evaluate company performance, financial health, and growth potential
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Technical Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              Identify trends, momentum, and potential entry/exit points
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2" />
                Quantitative Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              Leverage data-driven strategies for smarter investment decisions
            </CardContent>
          </Card>
        </section>

        <section className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">Sample Stock Analysis: AAPL</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Fundamental Rating</CardTitle>
                <CardDescription>Based on company performance and financials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-600">8.5/10</div>
              </CardContent>
              <CardFooter>
                Strong revenue growth and solid balance sheet
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Rating</CardTitle>
                <CardDescription>Based on price action and momentum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-yellow-600">6.8/10</div>
              </CardContent>
              <CardFooter>
                Positive trend but approaching resistance levels
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose LongTerm Alpha?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Coverage", description: "Analysis of stocks from major markets worldwide" },
              { icon: Users, title: "Expert Team", description: "Seasoned analysts with decades of combined experience" },
              { icon: BookOpen, title: "In-depth Research", description: "Comprehensive reports on individual stocks and sectors" },
              { icon: Award, title: "Proven Track Record", description: "Consistently outperforming market benchmarks" }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <item.icon className="mr-2" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Research Process</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Data Collection</h4>
              <p className="mb-4">We gather data from various reliable sources, including financial statements, market data feeds, and industry reports.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quantitative Analysis</h4>
              <p className="mb-4">Our proprietary algorithms process the data to identify patterns, trends, and potential investment opportunities.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Expert Review</h4>
              <p className="mb-4">Our team of experienced analysts review the algorithmic outputs and provide additional insights.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Report Generation</h4>
              <p className="mb-4">We compile our findings into comprehensive, easy-to-understand reports for our clients.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">&quot;LongTerm Alpha&apos;s research has been instrumental in helping us make informed investment decisions. Their analysis is thorough and their insights are invaluable.&quot;</p>
                <p className="font-semibold">- John Doe, Portfolio Manager at XYZ Investments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">&quot;The depth of analysis provided by LongTerm Alpha is unparalleled. Their reports have consistently helped us identify promising investment opportunities.&quot;</p>
                <p className="font-semibold">- Jane Smith, Chief Investment Officer at ABC Capital</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Investment Strategy?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join LongTerm Alpha today and gain access to our comprehensive equity research
          </p>
          <Button size="lg" className="mr-4">Start Your Free Trial</Button>
          <Button size="lg" variant="outline">
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">LongTerm Alpha</h4>
            <p>Empowering investors with data-driven insights</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <p>Follow us on social media for the latest updates and insights</p>
            {/* Add social media icons/links here */}
          </div>
        </div>
      </footer>
    </div>
  )
}