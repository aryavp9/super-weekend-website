"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Users, Clock, FileText, Upload, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

export default function EventDetailsPage() {
  const [hasApplied, setHasApplied] = useState(false)

  const event = {
    id: 1,
    title: "SuperWeekends - March 2024",
    date: "2024-03-15",
    endDate: "2024-03-16",
    time: "Saturday 9:00 AM - Sunday 6:00 PM",
    location: "Our San Francisco Office",
    description:
      "Join us for an intensive weekend where you'll work alongside our team on real challenges, learn our unique approach to problem-solving, and potentially fast-track your way to a final interview. This isn't just another hiring event - it's your chance to experience what it's really like to be part of our team.",
    applicationDeadline: "2024-03-01",
    spotsAvailable: 12,
    totalSpots: 15,
    agenda: [
      { day: "Saturday", time: "9:00 AM", activity: "Welcome & Team Introductions" },
      { day: "Saturday", time: "9:30 AM", activity: "Problem Deep Dive Session" },
      { day: "Saturday", time: "11:00 AM", activity: "Collaborative Work Session #1" },
      { day: "Saturday", time: "12:30 PM", activity: "Lunch & Culture Chat" },
      { day: "Saturday", time: "2:00 PM", activity: "Technical Workshop" },
      { day: "Saturday", time: "4:00 PM", activity: "Progress Check & Feedback" },
      { day: "Saturday", time: "6:00 PM", activity: "Dinner & Social Time" },
      { day: "Sunday", time: "9:00 AM", activity: "Morning Standup" },
      { day: "Sunday", time: "9:30 AM", activity: "Collaborative Work Session #2" },
      { day: "Sunday", time: "12:00 PM", activity: "Lunch & Mentorship" },
      { day: "Sunday", time: "1:30 PM", activity: "Solution Presentations" },
      { day: "Sunday", time: "3:30 PM", activity: "Team Feedback & Discussion" },
      { day: "Sunday", time: "5:00 PM", activity: "Wrap-up & Next Steps" },
    ],
    whatYoullDo: [
      "Work on a real challenge our team is currently facing",
      "Collaborate with our engineers, designers, and product managers",
      "Experience our decision-making process and work culture",
      "Present your solution and get feedback from the team",
      "Learn about our technology stack and methodologies",
    ],
    requirements: [
      "3+ years of professional experience in your field",
      "Strong problem-solving and communication skills",
      "Ability to work collaboratively in a team environment",
      "Genuine interest in our company and mission",
      "Available for the full weekend commitment",
    ],
  }

  const handleApply = () => {
    setHasApplied(true)
    // TODO: Implement application logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Next Event</Badge>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {event.spotsAvailable} of {event.totalSpots} spots available
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                <Clock className="h-3 w-3 mr-1" />
                Apply by {new Date(event.applicationDeadline).toLocaleDateString()}
              </Badge>
              {hasApplied ? (
                <div>
                  <Button disabled className="w-full bg-green-500/20 text-green-300 border-green-500/30">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Application Submitted
                  </Button>
                  <p className="text-sm text-green-300 mt-2">We'll review your application and get back to you soon!</p>
                </div>
              ) : (
                <Button
                  onClick={handleApply}
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Experience Something Different</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-lg">{event.description}</p>
              </CardContent>
            </Card>

            {/* What You'll Do */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What You'll Do</CardTitle>
                <CardDescription className="text-gray-300">
                  Get hands-on experience with our team and processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.whatYoullDo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Weekend Schedule */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Weekend Schedule</CardTitle>
                <CardDescription className="text-gray-300">Your intensive two-day journey with us</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {["Saturday", "Sunday"].map((day) => (
                    <div key={day}>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        {day}
                      </h4>
                      <div className="space-y-3 ml-5">
                        {event.agenda
                          .filter((item) => item.day === day)
                          .map((item, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="w-20 text-sm font-medium text-purple-300 flex-shrink-0">{item.time}</div>
                              <div className="text-gray-300">{item.activity}</div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What We're Looking For</CardTitle>
                <CardDescription className="text-gray-300">
                  Make sure you're ready for this intensive experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Process */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Application", desc: "Complete your profile and application" },
                    { step: "2", title: "Upload Case Study", desc: "Share a problem you've solved" },
                    { step: "3", title: "Review Process", desc: "We'll review your submission" },
                    { step: "4", title: "Weekend Invitation", desc: "Join us for the SuperWeekend" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Case Study Requirements */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5" />
                  Case Study Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium text-white">Format:</div>
                    <div className="text-gray-300">PDF, DOC, or DOCX</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Max Size:</div>
                    <div className="text-gray-300">10MB</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Content:</div>
                    <div className="text-gray-300">
                      A technical or creative challenge you've solved, including your approach and solution
                    </div>
                  </div>
                </div>
                <Separator className="my-4 bg-white/10" />
                <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Case Study
                </Button>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    <strong className="text-white">Within 1 week:</strong> We'll review your application and case study
                  </p>
                  <p>
                    <strong className="text-white">If selected:</strong> You'll receive an invitation with detailed
                    logistics
                  </p>
                  <p>
                    <strong className="text-white">After the weekend:</strong> Outstanding participants may receive
                    offers or final interview invitations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
