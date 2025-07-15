// Simple auth simulation - replace with real auth later
export const mockUsers = [
  {
    id: 1,
    email: "demo@example.com",
    password: "password123",
    firstName: "Demo",
    lastName: "User",
  },
]

export function authenticateUser(email: string, password: string) {
  const user = mockUsers.find((u) => u.email === email && u.password === password)
  if (user) {
    // Store user session (in real app, use proper session management)
    localStorage.setItem("currentUser", JSON.stringify(user))
    return user
  }
  return null
}

export function getCurrentUser() {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem("currentUser")
    return userStr ? JSON.parse(userStr) : null
  }
  return null
}

export function signOut() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("currentUser")
    window.location.href = "/"
  }
}
