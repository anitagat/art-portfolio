"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const inquiryType = formData.get("inquiryType") as string

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // In a real application, you would:
  // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
  // 2. Save the inquiry to a database
  // 3. Send confirmation emails to both the client and artist

  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    inquiryType,
    timestamp: new Date().toISOString(),
  })

  return {
    success: true,
    message: `Thank you ${name}! Your ${inquiryType.toLowerCase()} inquiry has been received. I'll get back to you within 24-48 hours.`,
  }
}
