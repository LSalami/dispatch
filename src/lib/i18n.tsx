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
    general: "General", members: "Members", teams: "Teams", roles: "Roles & permissions", inboxes: "Inboxes", labels: "Labels", responses: "Canned responses", signatures: "Signatures", rules: "Rules", integrations: "API & webhooks", billing: "Billing", auditLog: "Audit log", analytics: "Analytics", status: "Status",
    backToInbox: "Back to inbox", inbox: "Inbox", compose: "Compose", search: "Search", more: "More", less: "Less", assigned: "Assigned to me", mentions: "Mentions", starred: "Starred", snoozed: "Snoozed", drafts: "Drafts", scheduled: "Scheduled", sent: "Sent", unassigned: "Unassigned", allConversations: "All conversations", closed: "Closed", spam: "Spam", trash: "Trash", reply: "Reply", replyAll: "Reply all", forward: "Forward", draft: "Draft", comment: "Comment", internalComment: "Internal comment", message: "Message", writeReply: "Write an email reply", checkEmail: "Check your email", codeHelp: "Enter the 6-digit code from it below or click the sign-in link.", emailNotConfigured: "Email delivery isn’t configured yet. Your sign-in link and code will be printed to the server logs", signingIn: "Signing you in…", useDifferentEmail: "Use a different email", resendCode: "Resend code", resendIn: "Resend code in", sendCode: "Send sign-in code", continueWithEmail: "Continue with email", continueWithGoogle: "Continue with Google", continueWithMicrosoft: "Continue with Microsoft", appearance: "Appearance", density: "Density", comfortable: "Comfortable", compact: "Compact", sendingReading: "Sending & reading", undoSend: "Undo send", sendArchive: "Send & archive", remoteImages: "Remote images", keyboardShortcuts: "Keyboard shortcuts", off: "Off", defaultWorkspace: "Workspace default", seconds: "seconds", close: "Close", reopen: "Reopen", assign: "Assign", labelsAction: "Labels", snooze: "Snooze", star: "Star", unstar: "Unstar", unassignMe: "Unassign me", assignMe: "Assign to me", moveToTeam: "Move to team", markUnread: "Mark as unread", copyLink: "Copy link", showDetails: "Show details", hideDetails: "Hide details", restore: "Restore", moveToTrash: "Move to trash", deleteForever: "Delete permanently", priority: "Priority", light: "Light", dark: "Dark", system: "System", signOut: "Sign out", workspaceSettings: "Workspace settings", instanceAdmin: "Instance admin", workspaces: "Workspaces", createWorkspace: "Create workspace", markAllRead: "Mark all read", enableDesktopNotifications: "Enable desktop notifications for mentions and assignments.", allCaughtUp: "You’re all caught up", notificationHelp: "Mentions, assignments and replies show up here.", loading: "Loading…", loadMore: "Load more", details: "Details", contact: "Contact", alsoInConversation: "Also in this conversation", tasks: "Tasks", conversation: "Conversation", activity: "Activity", number: "Number", open: "Open", created: "Created", messages: "Messages", comments: "Comments", firstReply: "First reply", assignees: "Assignees", formerMember: "Former member", emailCopied: "Email copied", moveBetweenConversations: "Move between conversations", searchAndCommands: "Search and commands", newMessage: "New message", allShortcuts: "All shortcuts", selectConversation: "Select a conversation", toGetStarted: "to get started", keyboardInboxHint: "Use the keyboard to fly through your inbox.", newChat: "New chat", newChatDescription: "Pick one teammate for a direct message, or several for a group chat.", searchTeammates: "Search teammates…", noTeammatesFound: "No teammates found.", groupName: "Group name", optional: "optional", cancel: "Cancel", createGroupChat: "Create group chat", openDirectMessage: "Open direct message", selectedTeammates: "Selected teammates", couldNotStartChat: "Could not start the chat",
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
    general: "Generale", members: "Membri", teams: "Team", roles: "Ruoli e permessi", inboxes: "Caselle", labels: "Etichette", responses: "Risposte predefinite", signatures: "Firme", rules: "Regole", integrations: "API e webhook", billing: "Fatturazione", auditLog: "Registro attività", analytics: "Analisi", status: "Stato",
    backToInbox: "Torna alla posta", inbox: "Posta in arrivo", compose: "Scrivi", search: "Cerca", more: "Altro", less: "Meno", assigned: "Assegnate a me", mentions: "Menzioni", starred: "Speciali", snoozed: "Posticipate", drafts: "Bozze", scheduled: "Programmate", sent: "Inviate", unassigned: "Non assegnate", allConversations: "Tutte le conversazioni", closed: "Chiuse", spam: "Spam", trash: "Cestino", reply: "Rispondi", replyAll: "Rispondi a tutti", forward: "Inoltra", draft: "Bozza", comment: "Commento", internalComment: "Commento interno", message: "Messaggio", writeReply: "Scrivi una risposta email", checkEmail: "Controlla la tua email", codeHelp: "Inserisci qui sotto il codice a 6 cifre oppure fai clic sul link di accesso.", emailNotConfigured: "La consegna email non è ancora configurata. Il link e il codice verranno stampati nei log del server", signingIn: "Accesso in corso…", useDifferentEmail: "Usa un’altra email", resendCode: "Invia di nuovo il codice", resendIn: "Invia di nuovo il codice tra", sendCode: "Invia codice di accesso", continueWithEmail: "Continua con l’email", continueWithGoogle: "Continua con Google", continueWithMicrosoft: "Continua con Microsoft", appearance: "Aspetto", density: "Densità", comfortable: "Confortevole", compact: "Compatta", sendingReading: "Invio e lettura", undoSend: "Annulla invio", sendArchive: "Invia e archivia", remoteImages: "Immagini remote", keyboardShortcuts: "Scorciatoie da tastiera", off: "Disattivate", defaultWorkspace: "Predefinito del workspace", seconds: "secondi", close: "Chiudi", reopen: "Riapri", assign: "Assegna", labelsAction: "Etichette", snooze: "Posticipa", star: "Segna speciale", unstar: "Rimuovi speciale", unassignMe: "Rimuovi assegnazione", assignMe: "Assegna a me", moveToTeam: "Sposta nel team", markUnread: "Segna come non letta", copyLink: "Copia link", showDetails: "Mostra dettagli", hideDetails: "Nascondi dettagli", restore: "Ripristina", moveToTrash: "Sposta nel cestino", deleteForever: "Elimina definitivamente", priority: "Priorità", light: "Chiaro", dark: "Scuro", system: "Sistema", signOut: "Esci", workspaceSettings: "Impostazioni workspace", instanceAdmin: "Amministrazione istanza", workspaces: "Workspace", createWorkspace: "Crea workspace", markAllRead: "Segna tutte come lette", enableDesktopNotifications: "Attiva le notifiche desktop per menzioni e assegnazioni.", allCaughtUp: "È tutto aggiornato", notificationHelp: "Menzioni, assegnazioni e risposte compariranno qui.", loading: "Caricamento…", loadMore: "Carica altro", details: "Dettagli", contact: "Contatto", alsoInConversation: "Altri partecipanti", tasks: "Attività", conversation: "Conversazione", activity: "Attività recenti", number: "Numero", open: "Aperta", created: "Creata", messages: "Messaggi", comments: "Commenti", firstReply: "Prima risposta", assignees: "Assegnatari", formerMember: "Ex membro", emailCopied: "Email copiata", moveBetweenConversations: "Spostati tra le conversazioni", searchAndCommands: "Cerca e comandi", newMessage: "Nuovo messaggio", allShortcuts: "Tutte le scorciatoie", selectConversation: "Seleziona una conversazione", toGetStarted: "per iniziare", keyboardInboxHint: "Usa la tastiera per muoverti rapidamente nella posta.", newChat: "Nuova chat", newChatDescription: "Scegli una persona per un messaggio diretto o più persone per una chat di gruppo.", searchTeammates: "Cerca colleghi…", noTeammatesFound: "Nessun collega trovato.", groupName: "Nome del gruppo", optional: "facoltativo", cancel: "Annulla", createGroupChat: "Crea chat di gruppo", openDirectMessage: "Apri messaggio diretto", selectedTeammates: "Colleghi selezionati", couldNotStartChat: "Impossibile avviare la chat",
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
