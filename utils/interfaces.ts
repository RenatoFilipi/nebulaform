import type { JSX } from "react";
import { EBlock, EForm, ETheme } from "./entities";
import {
  TBlock,
  TBrand,
  TColor,
  TFilterSort,
  TFormStatus,
  TFormStatusExtended,
  TIntegrationCategory,
  TIntegrations,
  TPlan,
  TTemplateCategory,
} from "./types";

export interface IDesign {
  label: TColor;
  tw_class: string;
}
export interface IBrand {
  className?: string;
  type: TBrand;
}
export interface IBlockData {
  type: TBlock;
  name: string;
  icon: JSX.Element | null;
  enabled: boolean;
  description: string;
  category: string;
}
export interface IFormStatus {
  status: TFormStatus;
  label: string;
  description: string;
  icon: JSX.Element | null;
}
export interface IFormFilters {
  from: string;
  to: string;
  status: TFormStatusExtended;
  sort: TFilterSort;
}
export interface IIntegration {
  name: string;
  description: string;
  type: TIntegrations;
  enabled: boolean;
  pro: boolean;
  category: TIntegrationCategory;
}
export interface IPagination {
  from: number;
  to: number;
}
export interface IFormTemplate {
  id: string;
  enabled: boolean;
  category: TTemplateCategory;
  name: string;
  description: string;
  form: EForm;
  theme: ETheme;
  blocks: EBlock[];
  pro: boolean;
}
export interface ISubmissionsByForm {
  formId: string;
  name: string;
  count: number;
}

export interface IPlan {
  name: string;
  price: number;
  type: TPlan;
  isMostPopular: boolean;
  freeTrialDuration: number | null;
  features: IPlanFeatures[];
  ctaButton: string;
}
export interface IPlanFeatures {
  description: string;
  comingSoon: boolean;
}
export interface IBlockViewSettings {
  block: TBlock;
  showIsIdentifier: boolean;
  showName: boolean;
  showDescription: boolean;
  showPlaceholder: boolean;
  showMaxChar: boolean;
  showMinChar: boolean;
  showMaxDate: boolean;
  showMinDate: boolean;
  showMaxScale: boolean;
  showMinScale: boolean;
  showOptions: boolean;
  showPosition: boolean;
  showRating: boolean;
  showRequired: boolean;
  showChar: boolean;
}
