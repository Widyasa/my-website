// "use client"

// import type React from "react"
// import { useState } from "react"
// import AppHeader from "@/components/app-header"
// import AnimatedSection from "@/components/animated-section"
// import ParticleBackground from "@/components/particle-background"

// interface FormData {
//   name: string
//   email: string
//   message: string
// }

// export default function Contact() {
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     // Reset form
//     setForm({ name: "", email: "", message: "" })
//     setIsSubmitting(false)

//     // You can add actual form submission logic here
//     alert("Message sent successfully!")
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   return (
//     <div className="relative">
//       <ParticleBackground />
//       <AppHeader />

//       <main className="pt-20 pb-16 relative z-10">
//         <div className="max-w-4xl mx-auto px-6">
//           <AnimatedSection>
//             <div className="mb-12">
//               <h1 className="text-4xl font-bold mb-4">Contact</h1>
//               <p className="text-muted-foreground text-lg">Let's get in touch and work together</p>
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 gap-12">
//             <AnimatedSection delay={0.2}>
//               <div>
//                 <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
//                       <span className="text-foreground">📧</span>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Email</h3>
//                       <a
//                         href="mailto:john@example.com"
//                         className="text-muted-foreground hover:text-foreground transition-colors"
//                       >
//                         john@example.com
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
//                       <span className="text-foreground">💬</span>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Twitter</h3>
//                       <a
//                         href="https://twitter.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-muted-foreground hover:text-foreground transition-colors"
//                       >
//                         @johndoe
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
//                       <span className="text-foreground">💼</span>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">LinkedIn</h3>
//                       <a
//                         href="https://linkedin.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-muted-foreground hover:text-foreground transition-colors"
//                       >
//                         /in/johndoe
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={0.4}>
//               <div>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">
//                       Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={form.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent outline-hidden transition-colors"
//                       placeholder="Your name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent outline-hidden transition-colors"
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={5}
//                       required
//                       value={form.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent outline-hidden transition-colors resize-none"
//                       placeholder="Your message..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted px-6 py-3 rounded-lg font-medium transition-colors duration-200"
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </button>
//                 </form>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
