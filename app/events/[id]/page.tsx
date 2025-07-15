"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Users, Clock, FileText, Upload } from "lucide-react"

export default function EventDetailsPage() {
  const [hasApplied, setHasApplied] = useState(false)

  const event = {
    id: 1,
    title: "Spring Tech Connect - March 2024",
    date: "2024-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Hub Convention Center, San Francisco",
    description:
      "Join us for our premier monthly hiring event connecting innovative tech talent with leading companies. This event features networking sessions, technical presentations, and one-on-one interviews with hiring managers.",
    applicationDeadline: "2024-03-01",
    spotsAvailable: 25,
    totalSpots: 50,
    requirements: [
      "Minimum 2 years of professional experience",
      "Portfolio or case study submission required",
      "Technical background in software development, data science, or related field",
      "Available for full-time positions",
    ],
    agenda: [
      { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "9:30 AM", activity: "Opening Keynote" },
      { time: "10:30 AM", activity: "Company Presentations" },
      { time: "12:00 PM", activity: "Networking Lunch" },
      { time: "1:30 PM", activity: "Technical Workshops" },
      { time: "3:00 PM", activity: "One-on-One Interviews" },
      { time: "4:30 PM", activity: "Closing Remarks" },
    ],
    companies: ["TechCorp Solutions", "InnovateLabs", "DataDrive Inc.", "CloudScale Systems", "AI Dynamics"],
  }

  const handleApply = () => {
    setHasApplied(true)
    // TODO: Implement application logic
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {event.spotsAvailable} of {event.totalSpots} spots available
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="mb-2">
                <Clock className="h-3 w-3 mr-1" />
                Apply by {new Date(event.applicationDeadline).toLocaleDateString()}
              </Badge>
              {hasApplied ? (
                <div>
                  <Button disabled className="w-full">
                    Application Submitted
                  </Button>
                  <p className="text-sm text-green-600 mt-2">We'll review your application and get back to you soon!</p>
                </div>
              ) : (
                <Button onClick={handleApply} size="lg" className="w-full">
                  Apply Now
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
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>Make sure you meet these criteria before applying</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Event Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
                <CardDescription>Schedule for the day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-20 text-sm font-medium text-gray-600 flex-shrink-0">{item.time}</div>
                      <div className="text-gray-700">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Participating Companies */}
            <Card>
              <CardHeader>
                <CardTitle>Participating Companies</CardTitle>
                <CardDescription>Companies you'll have the opportunity to meet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {event.companies.map((company, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">{company}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Submit Application</div>
                      <div className="text-sm text-gray-600">Complete the application form</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Upload Case Study</div>
                      <div className="text-sm text-gray-600">Submit your technical case study</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-gray-500">Review Process</div>
                      <div className="text-sm text-gray-600">We'll review your submission</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-gray-500">Confirmation</div>
                      <div className="text-sm text-gray-600">Receive acceptance notification</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Case Study Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Format:</div>
                    <div className="text-gray-600">PDF, DOC, or DOCX</div>
                  </div>
                  <div>
                    <div className="font-medium">Max Size:</div>
                    <div className="text-gray-600">10MB</div>
                  </div>
                  <div>
                    <div className="font-medium">Content:</div>
                    <div className="text-gray-600">
                      Technical problem-solving example with your approach and solution
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Case Study
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-medium">Email:</div>
                    <div className="text-gray-600">events@talenttracker.com</div>
                  </div>
                  <div>
                    <div className="font-medium">Phone:</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
