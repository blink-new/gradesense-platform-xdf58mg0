import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { GradeSenseLogo } from './components/GradeSenseLogo'
import { 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  Brain, 
  Target, 
  ArrowRight,
  Upload,
  Zap,
  Award,
  Mail,
  Phone,
  MapPin,
  GraduationCap
} from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <GradeSenseLogo />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
                <a href="#benefits" className="text-gray-600 hover:text-orange-500 transition-colors">Benefits</a>
                <a href="#demo" className="text-gray-600 hover:text-orange-500 transition-colors">Demo</a>
                <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Request Demo</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">
              AI-Powered Evaluation Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automate Answer Evaluation and Deliver{' '}
              <span className="text-orange-500">Feedback in Minutes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your evaluation process with AI. Reduce grading time by 75% while providing 
              structured, consistent feedback to students instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300"
              >
                Watch Video
              </Button>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No setup required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Instant feedback
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                75% time savings
              </div>
            </div>
            
            {/* Backing and Incubation Badges */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-sm border border-gray-200/50">
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-600 font-medium">Backed by</div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-6 w-6" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h11v11H0V0z" fill="#f25022"/>
                      <path d="M12 0h11v11H12V0z" fill="#7fba00"/>
                      <path d="M0 12h11v11H0V12z" fill="#00a4ef"/>
                      <path d="M12 12h11v11H12V12z" fill="#ffb900"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">Microsoft for Startups</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-sm border border-gray-200/50">
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-600 font-medium">Incubated at</div>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Scaler School of Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Current Evaluation Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional manual evaluation creates bottlenecks that hurt both educators and students
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <Clock className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-800">Time Consuming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">
                  Teachers spend weeks evaluating answer sheets, delaying feedback and creating academic bottlenecks.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <Target className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-800">Inconsistent Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">
                  Human evaluation varies between evaluators, leading to unfair grading and student dissatisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <Users className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-800">Delayed Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">
                  Students receive feedback too late to improve, missing critical learning opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How GradeSense Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform streamlines the entire evaluation process in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 - Upload */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">Step 1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Upload Answer Sheets</h3>
                <p className="text-white/90 mb-6">
                  Simply upload scanned handwritten answer sheets or typed responses to our secure platform.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/20 rounded h-2 mb-1"></div>
                      <div className="bg-white/20 rounded h-2 w-3/4"></div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white text-xs"
                    variant="outline"
                  >
                    <Upload className="w-3 h-3 mr-2" />
                    Upload Files
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 2 - AI Processing */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <Brain className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">Step 2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Evaluation</h3>
                <p className="text-white/90 mb-6">
                  Our AI analyzes answers using OCR and LLM models based on your institution's rubric and guidelines.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">AI Processing</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs">Active</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>OCR Analysis</span>
                      <span className="bg-green-400/30 px-2 py-1 rounded-full">✓ Complete</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Content Evaluation</span>
                      <span className="bg-yellow-400/30 px-2 py-1 rounded-full">⏳ Processing</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Rubric Matching</span>
                      <span className="bg-gray-400/30 px-2 py-1 rounded-full">⏸ Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Feedback */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">Step 3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Structured Feedback</h3>
                <p className="text-white/90 mb-6">
                  Receive detailed, structured feedback for each question within minutes, not weeks.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Overall Score</span>
                      <span className="bg-green-400/30 px-2 py-1 rounded-full text-xs font-bold">87/100</span>
                    </div>
                    <div className="bg-white/30 rounded-lg p-3">
                      <div className="text-xs mb-2 font-medium">Key Strengths:</div>
                      <div className="space-y-1 text-xs text-white/80">
                        <div>• Clear argument structure</div>
                        <div>• Good use of examples</div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white text-xs"
                      variant="outline"
                    >
                      <FileText className="w-3 h-3 mr-2" />
                      View Full Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to revolutionize your evaluation process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Evaluation Feature - Inspired by AI Resume Builder */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 p-6 text-white hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <Zap className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">Automated Evaluation</h3>
                <p className="text-white/90 mb-6">
                  AI generates detailed evaluations for each answer, based on your institution's rubric and standards.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Processing Answer</span>
                    <span className="text-xs bg-white/30 px-2 py-1 rounded-full">AI Active</span>
                  </div>
                  <div className="bg-white/30 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs">Analyzing content structure...</span>
                    </div>
                    <div className="bg-white/20 rounded h-2 mb-1"></div>
                    <div className="bg-white/20 rounded h-2 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* OCR Recognition Feature - Inspired by AI Cover Letter */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-red-400 to-orange-400 p-6 text-white hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <FileText className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">OCR Recognition</h3>
                <p className="text-white/90 mb-6">
                  Advanced OCR technology that accurately reads handwritten and typed text with 99% accuracy.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="bg-white/30 px-3 py-1 rounded-full text-xs font-medium">Handwritten</div>
                    <div className="bg-white/30 px-3 py-1 rounded-full text-xs font-medium">Typed</div>
                    <div className="bg-white/30 px-3 py-1 rounded-full text-xs font-medium">Mixed</div>
                  </div>
                  <div className="bg-white/30 rounded-lg p-3">
                    <div className="space-y-1">
                      <div className="bg-white/20 rounded h-2"></div>
                      <div className="bg-white/20 rounded h-2 w-4/5"></div>
                      <div className="bg-white/20 rounded h-2 w-3/5"></div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="mt-3 bg-white/20 hover:bg-white/30 border-white/30 text-white text-xs"
                    variant="outline"
                  >
                    <FileText className="w-3 h-3 mr-1" />
                    Extract Text
                  </Button>
                </div>
              </div>
            </div>

            {/* Rubric Assessment Feature */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6 text-white hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <Target className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">Rubric-Based Assessment</h3>
                <p className="text-white/90 mb-6">
                  Customizable rubrics that align with your institution's evaluation standards and criteria.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Content Quality</span>
                      <span className="text-xs bg-green-400/30 px-2 py-1 rounded-full">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Structure</span>
                      <span className="text-xs bg-yellow-400/30 px-2 py-1 rounded-full">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Grammar</span>
                      <span className="text-xs bg-green-400/30 px-2 py-1 rounded-full">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scalable Platform Feature - Inspired by Auto Apply */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 p-6 text-white hover:scale-105 transition-transform duration-300">
              <div className="relative z-10">
                <Users className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">Scalable Platform</h3>
                <p className="text-white/90 mb-6">
                  Handle thousands of students automatically. Save time and scale efficiently.
                </p>
                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Batch Processing</span>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-xs bg-green-400/30 px-2 py-1 rounded-full">Auto Processed</span>
                      </div>
                    </div>
                    <div className="text-xs text-white/80">
                      <div>📊 1,250 answer sheets processed</div>
                      <div>⏱️ Average time: 2.3 minutes</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Success Rate</span>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-xs bg-green-400/30 px-2 py-1 rounded-full">99.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GradeSense delivers value to teachers, institutions, and students alike
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-800">For Teachers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-700">Reduce evaluation time by 75%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-700">Focus on curriculum and mentoring</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-700">Eliminate repetitive evaluation tasks</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-700">Consistent grading standards</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-indigo-200">
              <CardHeader>
                <Users className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle className="text-indigo-800">For Institutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-700">Cut evaluation costs by up to 75%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-700">Scale to thousands of students</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-700">Improve operational efficiency</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-indigo-700">Better student outcomes</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-teal-200">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-teal-800">For Students</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-teal-700">Instant detailed feedback</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-teal-700">Identify learning gaps quickly</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-teal-700">Structured improvement suggestions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-teal-700">Fair and consistent grading</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See GradeSense in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our AI transforms the evaluation process in real-time
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4">Demo video will be embedded here</p>
                <Button>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Educators Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of teachers and institutions already using GradeSense
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "GradeSense has revolutionized our evaluation process. What used to take weeks now takes minutes, 
                  and our students receive much more detailed feedback."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">DR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Rajesh Kumar</p>
                    <p className="text-sm text-gray-600">Professor, Delhi University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "The consistency and speed of evaluation has improved dramatically. Our coaching center 
                  can now handle 10x more students with the same staff."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">PS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Director, Elite UPSC Academy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "The detailed feedback helps our students understand exactly where they need to improve. 
                  It's like having a personal tutor for every student."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">AM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Amit Mehta</p>
                    <p className="text-sm text-gray-600">Head of Academics, Success Institute</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your institution's needs
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise Solution</CardTitle>
                <CardDescription className="text-lg">
                  Custom pricing based on your institution's requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Unlimited answer sheet processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Custom rubric configuration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Advanced analytics dashboard
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        API integration support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Support & Training:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Dedicated account manager
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Staff training sessions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        24/7 technical support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Custom feature development
                      </li>
                    </ul>
                  </div>
                </div>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Contact Sales Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Evaluation Process?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join thousands of educators who have already revolutionized their grading with GradeSense. 
            Start your free demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Request Free Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your evaluation process? Contact us for a personalized demo.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@gradesense.ai</p>
                    <p className="text-gray-600">support@gradesense.ai</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600">
                      Tech Hub, Sector 62<br />
                      Noida, Uttar Pradesh 201309<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your institution or company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell us about your evaluation needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <GradeSenseLogo 
                  className="h-10 w-10" 
                  textClassName="text-2xl font-bold text-orange-400" 
                />
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing education evaluation with AI-powered technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GradeSense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App