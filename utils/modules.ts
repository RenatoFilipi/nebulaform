import type { JSX } from "react";
import { formStatus, submissionStatus } from "./types";

export interface FormProps {
  id: string;
  name: string;
  status: formStatus;
  views: number;
  submissions: number;
}
export interface SubmissionProps {
  id: string;
  form_id: string;
  sender: string;
  submitted_at: string;
  status: submissionStatus;
}
export interface AnalyticsProps {
  icon: JSX.Element;
  label: string;
  value: string;
}
export interface AnalyticsProgressProps {
  id: string;
  name: string;
  submissions: number;
}
export interface SubmissionSegmentProps {
  question: string;
  answer: string;
}
