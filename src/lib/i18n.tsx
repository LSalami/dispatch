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
    theme: "Theme", personal: "Personal", workspace: "Workspace", productivity: "Productivity", administration: "Administration",
    profile: "Profile", preferences: "Preferences", notifications: "Notifications", security: "Security & devices", myInboxes: "My inboxes",
    general: "General", members: "Members", teams: "Teams", roles: "Roles & permissions", inboxes: "Inboxes", labels: "Labels", responses: "Canned responses", signatures: "Signatures", rules: "Rules", integrations: "API & webhooks", billing: "Billing", auditLog: "Audit log", analytics: "Analytics",
    backToInbox: "Back to inbox", compose: "Compose", search: "Search", more: "More", less: "Less", assigned: "Assigned to me", mentions: "Mentions", starred: "Starred", snoozed: "Snoozed", drafts: "Drafts", scheduled: "Scheduled", sent: "Sent", unassigned: "Unassigned", allConversations: "All conversations", closed: "Closed", spam: "Spam", trash: "Trash", light: "Light", dark: "Dark", system: "System", signOut: "Sign out", workspaceSettings: "Workspace settings", instanceAdmin: "Instance admin", workspaces: "Workspaces", createWorkspace: "Create workspace",
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
    theme: "Tema", personal: "Personale", workspace: "Workspace", productivity: "Produttività", administration: "Amministrazione",
    profile: "Profilo", preferences: "Preferenze", notifications: "Notifiche", security: "Sicurezza e dispositivi", myInboxes: "Le mie caselle",
    general: "Generale", members: "Membri", teams: "Team", roles: "Ruoli e permessi", inboxes: "Caselle", labels: "Etichette", responses: "Risposte predefinite", signatures: "Firme", rules: "Regole", integrations: "API e webhook", billing: "Fatturazione", auditLog: "Registro attività", analytics: "Analisi",
    backToInbox: "Torna alla posta", compose: "Scrivi", search: "Cerca", more: "Altro", less: "Meno", assigned: "Assegnate a me", mentions: "Menzioni", starred: "Speciali", snoozed: "Posticipate", drafts: "Bozze", scheduled: "Programmate", sent: "Inviate", unassigned: "Non assegnate", allConversations: "Tutte le conversazioni", closed: "Chiuse", spam: "Spam", trash: "Cestino", light: "Chiaro", dark: "Scuro", system: "Sistema", signOut: "Esci", workspaceSettings: "Impostazioni workspace", instanceAdmin: "Amministrazione istanza", workspaces: "Workspace", createWorkspace: "Crea workspace",
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
