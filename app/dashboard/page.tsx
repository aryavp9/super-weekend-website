"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Calendar, FileText, Clock, CheckCircle, XCircle, Upload, Sparkles, Users, Target, Zap } from "lucide-react"
import { AuthGuard } from "@/components/auth-guard"

export default function CandidateDashboard() {
  const [applications] = useState([
    {
      id: 1,
      eventTitle: "SuperWeekends - March 2024",
      eventDate: "2024-03-15",
      applicationDate: "2024-02-20",
      status: "under_review",
      caseStudyUploaded: true,
    },
    {
      id: 2,
      eventTitle: "SuperWeekends - January 2024",
      eventDate: "2024-01-15",
      applicationDate: "2023-12-20",
      status: "accepted",
      caseStudyUploaded: true,
    },
  ])

  const [upcomingEvents] = useState([
    {
      id: 3,
      title: "SuperWeekends - May 2024",
      date: "2024-05-18",
      description: "Join our team for an intensive weekend of collaboration, learning, and innovation.",
      applicationDeadline: "2024-05-01",
      spotsAvailable: 12,
    },
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "under_review":
        return <Clock className="h-4 w-4 text-yellow-400" />
      case "accepted":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-400" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "under_review":
        return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Under Review</Badge>
      case "accepted":
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Accepted</Badge>
      case "rejected":
        return <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Not Selected</Badge>
      default:
        return <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Pending</Badge>
    }
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Your SuperWeekends Journey</h1>
                  <p className="text-gray-300">Track your applications and prepare for your next adventure</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => {
                    localStorage.removeItem("isAuthenticated")
                    localStorage.removeItem("userEmail")
                    localStorage.removeItem("userName")
                    window.location.href = "/"
                  }}
                >
                  Sign Out
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Applications */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">My Applications</h2>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <Card
                      key={app.id}
                      className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white text-lg">{app.eventTitle}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-2 text-gray-300">
                              <Calendar className="h-4 w-4" />
                              Weekend: {new Date(app.eventDate).toLocaleDateString()} -{" "}
                              {new Date(new Date(app.eventDate).getTime() + 86400000).toLocaleDateString()}
                            </CardDescription>
                          </div>
                          {getStatusBadge(app.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {getStatusIcon(app.status)}
                            <span className="text-gray-300">
                              Applied {new Date(app.applicationDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {app.caseStudyUploaded ? (
                              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                                <FileText className="h-3 w-3 mr-1" />
                                Case Study Submitted
                              </Badge>
                            ) : (
                              <Button
                                size="sm"
                                className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30"
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload Case Study
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Upcoming Events */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Upcoming SuperWeekends</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <Card
                      key={event.id}
                      className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-gray-300">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString()} -{" "}
                          {new Date(new Date(event.date).getTime() + 86400000).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">{event.description}</p>
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-sm text-gray-400">
                            Apply by: {new Date(event.applicationDeadline).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-400">{event.spotsAvailable} spots available</div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Profile Strength</CardTitle>
                  <CardDescription className="text-gray-300">Complete your profile to stand out</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white">Profile Progress</span>
                        <span className="text-purple-300">85%</span>
                      </div>
                      <Progress value={85} className="bg-white/10" />
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">Basic Information</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">Case Study Uploaded</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300">Portfolio Link</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                      Complete Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">Team Collaboration</div>
                        <div className="text-gray-400 text-sm">Work directly with our engineers and designers</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-pink-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">Real Challenges</div>
                        <div className="text-gray-400 text-sm">Solve problems we're actually facing</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">Fast Track</div>
                        <div className="text-gray-400 text-sm">Skip traditional interviews if you excel</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Your Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Applications</span>
                      <span className="font-semibold text-white">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Under Review</span>
                      <span className="font-semibold text-yellow-300">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Accepted</span>
                      <span className="font-semibold text-green-300">1</span>
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="flex justify-between">
                      <span className="text-gray-300">Success Rate</span>
                      <span className="font-semibold text-purple-300">50%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
