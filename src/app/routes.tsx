import { createBrowserRouter } from "react-router";
import { Splash } from "./components/Splash";
import { Onboarding } from "./components/Onboarding";
import { ProfileSetup } from "./components/ProfileSetup";
import { MainLayout } from "./components/MainLayout";
import { Home } from "./components/Home";
import { CycleTracker } from "./components/CycleTracker";
import { AIHub } from "./components/AIHub";
import { Reports } from "./components/Reports";
import { Profile } from "./components/Profile";
import { DoctorReportPreview } from "./components/DoctorReportPreview";
import { AIChat } from "./components/AIChat";
import { HormonalFingerprint } from "./components/HormonalFingerprint";
import { HormonalForecast } from "./components/HormonalForecast";
import { TwinMatch } from "./components/TwinMatch";
import { LutealDashboard } from "./components/LutealDashboard";
import { DoctorReportGeneration } from "./components/DoctorReportGeneration";
import { PremiumUpgrade } from "./components/PremiumUpgrade";
import { NotificationCenter } from "./components/NotificationCenter";
import { ReminderSettings } from "./components/ReminderSettings";
import { DoctorHub } from "./components/DoctorHub";
import { AddDoctor } from "./components/AddDoctor";
import { ReportSent } from "./components/ReportSent";
import { PrivacySecurity } from "./components/PrivacySecurity";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { DoctorInbox } from "./components/DoctorInbox";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/inbox",
    Component: DoctorInbox,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/setup",
    Component: ProfileSetup,
  },
  {
    path: "/app",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "cycle", Component: CycleTracker },
      { path: "ai", Component: AIHub },
      { path: "reports", Component: Reports },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "/ai-chat",
    Component: AIChat,
  },
  {
    path: "/fingerprint",
    Component: HormonalFingerprint,
  },
  {
    path: "/forecast",
    Component: HormonalForecast,
  },
  {
    path: "/twin-match",
    Component: TwinMatch,
  },
  {
    path: "/luteal-dashboard",
    Component: LutealDashboard,
  },
  {
    path: "/doctor-report-gen",
    Component: DoctorReportGeneration,
  },
  {
    path: "/doctor-report",
    Component: DoctorReportPreview,
  },
  {
    path: "/premium",
    Component: PremiumUpgrade,
  },
  {
    path: "/notifications",
    Component: NotificationCenter,
  },
  {
    path: "/reminder-settings",
    Component: ReminderSettings,
  },
  {
    path: "/doctor-hub",
    Component: DoctorHub,
  },
  {
    path: "/add-doctor",
    Component: AddDoctor,
  },
  {
    path: "/report-sent",
    Component: ReportSent,
  },
  {
    path: "/privacy",
    Component: PrivacySecurity,
  }
]);