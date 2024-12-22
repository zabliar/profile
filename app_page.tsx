import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileCode, Globe, PenTool, Cpu, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Resume() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <header className="relative flex justify-between items-start mb-8">
        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold">劉曜瑋</h1>
          <p className="text-xl text-muted-foreground">Master student</p>
          <Link 
            href="https://drive.google.com/your-transcript-link" 
            target="_blank"
            className="inline-flex items-center text-sm text-primary hover:underline mt-2"
          >
            View Academic Transcripts <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="absolute right-0 top-0">
          <Image
            src="/M11315090.jpg"
            alt="Profile photo"
            width={120}
            height={120}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Education Background</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold">National Pingtung University, from 2020 to 2024</h3>
          <h3 className="font-semibold">National Taiwan University of Science and Technology, from 2024</h3>
          <br/>
          <p>Department of Computer Science & Information Engineering</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "C++", icon: Code },
            { name: "Dialogflow", icon: FileCode },
            { name: "Python", icon: Code },
            { name: "JavaScript", icon: Code },
            { name: "HTML/CSS", icon: PenTool },
            { name: "TensorFlow", icon: Cpu },
            { name: "Firebase", icon: Globe },
          ].map((skill) => (
            <div key={skill.name} className="flex items-center space-x-2">
              <skill.icon className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Senior Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Line Bot Interface"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold">Campus Information Q&A Line Bot Built Based on Dialogflow</h3>
              <p className="mt-2 mb-4">
                This topic is mainly to solve the academic doubts of current students. Students can ask questions anytime and anywhere through the chat room on line bot.
              </p>
              <div className="space-y-2 mb-4">
                <p className="font-medium">Example queries:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>What courses does teacher xxx offer</li>
                  <li>Where is the classroom with the data structure</li>
                  <li>Who are the professors in the department of computer science</li>
                </ol>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>Dialogflow</Badge>
                <Badge>Firebase</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Side Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Product Matching Demo"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold">Product Matching</h3>
              <p>Use and combine different methods such as NER model, semantic model, CLIP model, etc. to achieve matching of products on two different e-commerce platforms. The purpose is to allow users to avoid rights issues caused by information gaps.</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Hugging Face</Badge>
                <Badge>Python</Badge>
                <Badge>PyTorch</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="TAIDE Project Demo"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold">Use TAIDE Model in Artificial Intelligence</h3>
              <p>Using the TAIDE model, fine tuning through the LORA model, and prompts, etc. The model can be guided by my project. The main content of my project is to help tourists who come to Taipei plan their one-day itinerary.</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Flask</Badge>
                <Badge>LoRa</Badge>
                <Badge>Hugging Face</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Malware Analysis Demo"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold">Malware Analysis</h3>
              <p>Take the malicious virus to cuckoo sandbox for virus analysis, convert the generated txt and pcap files into pictures, get our model to classify the malicious virus, and establish its label.</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Federated Learning</Badge>
                <Badge>Linux</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Master Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Course</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Big Data Analysis</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Artificial Intelligence</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Cybersecurity Threat Analysis and Secure AI</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Queueing Theory</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Undergrad Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Course</th>
                <th className="text-right py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Data Structure</td>
                <td className="text-right">A</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Machine Learning</td>
                <td className="text-right">B</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Graphics</td>
                <td className="text-right">A</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Operating System</td>
                <td className="text-right">A</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

