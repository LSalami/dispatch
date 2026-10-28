"use client"

import { createContext, useContext, useMemo } from "react"

export type Locale = "en" | "it"

const messages = {
  en: {
    signIn: "Sign in",
    welcome: "Welcome back. Let’s get you to your inbox.",
    signInHelp: "Sign in with your password or use a one-time code sent by email.",
    workEmail: "Work email",
    password: "Password",
    continue: "Sign in",
    useCode: "Use a one-time email code instead",
    usePassword: "Use password instead",
    language: "Language",
    english: "English",
    italian: "Italiano",
    languageHelp: "Choose the language used by Dispatch.",
  },
  it: {
    signIn: "Accedi",
    welcome: "Bentornato. Andiamo alla tua casella.",
    signInHelp: "Accedi con la password oppure usa un codice monouso inviato via email.",
    workEmail: "Email di lavoro",
    password: "Password",
    continue: "Accedi",
    useCode: "Usa invece un codice email monouso",
    usePassword: "Usa invece la password",
    language: "Lingua",
    english: "English",
    italian: "Italiano",
    languageHelp: "Scegli la lingua usata da Dispatch.",
  },
} as const

type MessageKey = keyof typeof messages.en
const I18nContext = createContext<{ locale: Locale; t: (key: MessageKey) => string }>({ locale: "en", t: (key) => messages.en[key] })

export function I18nProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const value = useMemo(() => ({ locale, t: (key: MessageKey) => messages[locale][key] }), [locale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
