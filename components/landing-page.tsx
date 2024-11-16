'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Building2 } from 'lucide-react'

export function LandingPageComponent() {
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

        <section className="bg-muted p-8 rounded-lg">
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
      </main>

      <footer className="bg-primary text-primary-foreground mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 LongTerm Alpha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}