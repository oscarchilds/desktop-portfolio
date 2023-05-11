import type { Component } from "vue"

export interface LineItem {
  component: Component
  userInput?: string
}

export interface Command {
  component: Component
  name?: string,
  description?: string
}
