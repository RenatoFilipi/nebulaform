export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      answers: {
        Row: {
          block_id: string
          created_at: string
          id: string
          submission_id: string
          updated_at: string
          value: string
        }
        Insert: {
          block_id: string
          created_at?: string
          id?: string
          submission_id: string
          updated_at?: string
          value?: string
        }
        Update: {
          block_id?: string
          created_at?: string
          id?: string
          submission_id?: string
          updated_at?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "answers_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      blocks: {
        Row: {
          created_at: string
          description: string | null
          form_id: string
          id: string
          is_identifier: boolean
          max_char: number | null
          max_date: string | null
          max_scale: number | null
          min_char: number | null
          min_date: string | null
          min_scale: number | null
          name: string
          options: string[] | null
          placeholder: string | null
          position: number
          rating: number | null
          required: boolean
          show_char: boolean | null
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          form_id: string
          id?: string
          is_identifier?: boolean
          max_char?: number | null
          max_date?: string | null
          max_scale?: number | null
          min_char?: number | null
          min_date?: string | null
          min_scale?: number | null
          name?: string
          options?: string[] | null
          placeholder?: string | null
          position?: number
          rating?: number | null
          required?: boolean
          show_char?: boolean | null
          type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          form_id?: string
          id?: string
          is_identifier?: boolean
          max_char?: number | null
          max_date?: string | null
          max_scale?: number | null
          min_char?: number | null
          min_date?: string | null
          min_scale?: number | null
          name?: string
          options?: string[] | null
          placeholder?: string | null
          position?: number
          rating?: number | null
          required?: boolean
          show_char?: boolean | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blocks_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "forms"
            referencedColumns: ["id"]
          },
        ]
      }
      feedbacks: {
        Row: {
          created_at: string
          id: string
          mood: string | null
          path: string | null
          user_agent: string | null
          user_id: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          mood?: string | null
          path?: string | null
          user_agent?: string | null
          user_id: string
          value?: string
        }
        Update: {
          created_at?: string
          id?: string
          mood?: string | null
          path?: string | null
          user_agent?: string | null
          user_id?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedbacks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      forms: {
        Row: {
          created_at: string
          description: string | null
          email_notifications: boolean
          email_notifications_to: string[] | null
          id: string
          name: string
          nebulaform_branding: boolean
          new_submission_notification: boolean
          owner_id: string
          public_url: string
          status: string
          submit_text: string
          success_description: string
          success_title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          email_notifications?: boolean
          email_notifications_to?: string[] | null
          id?: string
          name?: string
          nebulaform_branding?: boolean
          new_submission_notification?: boolean
          owner_id?: string
          public_url?: string
          status?: string
          submit_text?: string
          success_description?: string
          success_title?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          email_notifications?: boolean
          email_notifications_to?: string[] | null
          id?: string
          name?: string
          nebulaform_branding?: boolean
          new_submission_notification?: boolean
          owner_id?: string
          public_url?: string
          status?: string
          submit_text?: string
          success_description?: string
          success_title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "forms_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      forms_analytics: {
        Row: {
          avg_completion_rate: number | null
          avg_completion_time: number | null
          created_at: string
          form_id: string
          id: string
          profile_id: string
          total_submissions: number
          total_views: number
          updated_at: string
        }
        Insert: {
          avg_completion_rate?: number | null
          avg_completion_time?: number | null
          created_at?: string
          form_id: string
          id?: string
          profile_id: string
          total_submissions?: number
          total_views?: number
          updated_at?: string
        }
        Update: {
          avg_completion_rate?: number | null
          avg_completion_time?: number | null
          created_at?: string
          form_id?: string
          id?: string
          profile_id?: string
          total_submissions?: number
          total_views?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "forms_analytics_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forms_analytics_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations: {
        Row: {
          active: boolean
          created_at: string
          form_id: string
          gs_api_key: string | null
          gs_data_range: string | null
          gs_id: string | null
          gs_name: string | null
          id: string
          name: string
          profile_id: string
          slack_bot_icon_emoji: string | null
          slack_bot_name: string | null
          slack_channel: string | null
          slack_webhook_url: string | null
          type: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          form_id: string
          gs_api_key?: string | null
          gs_data_range?: string | null
          gs_id?: string | null
          gs_name?: string | null
          id?: string
          name?: string
          profile_id: string
          slack_bot_icon_emoji?: string | null
          slack_bot_name?: string | null
          slack_channel?: string | null
          slack_webhook_url?: string | null
          type?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          form_id?: string
          gs_api_key?: string | null
          gs_data_range?: string | null
          gs_id?: string | null
          gs_name?: string | null
          id?: string
          name?: string
          profile_id?: string
          slack_bot_icon_emoji?: string | null
          slack_bot_name?: string | null
          slack_channel?: string | null
          slack_webhook_url?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "integrations_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number
          created_at: string
          currency: string
          due_date: string | null
          id: string
          invoice_date: string
          payment_method: string | null
          status: string
          subscription_id: string
          transaction_id: string | null
          user_id: string
        }
        Insert: {
          amount?: number
          created_at?: string
          currency?: string
          due_date?: string | null
          id?: string
          invoice_date?: string
          payment_method?: string | null
          status?: string
          subscription_id: string
          transaction_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          due_date?: string | null
          id?: string
          invoice_date?: string
          payment_method?: string | null
          status?: string
          subscription_id?: string
          transaction_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          read_at: string | null
          type: string
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id: string
          read_at?: string | null
          type?: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          read_at?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          name: string
          owner_id: string
          personal: boolean | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string
          owner_id?: string
          personal?: boolean | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          owner_id?: string
          personal?: boolean | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organizations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          first_name: string
          free_trial_due_date: string | null
          full_name: string | null
          id: string
          last_name: string
          role: string
          stripe_customer_id: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string
          free_trial_due_date?: string | null
          full_name?: string | null
          id: string
          last_name?: string
          role?: string
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          first_name?: string
          free_trial_due_date?: string | null
          full_name?: string | null
          id?: string
          last_name?: string
          role?: string
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      profiles_analytics: {
        Row: {
          avg_completion_rate: number | null
          created_at: string
          id: string
          profile_id: string
          total_forms_created: number
          total_forms_responses: number
          total_forms_views: number
          updated_at: string
        }
        Insert: {
          avg_completion_rate?: number | null
          created_at?: string
          id?: string
          profile_id: string
          total_forms_created?: number
          total_forms_responses?: number
          total_forms_views?: number
          updated_at?: string
        }
        Update: {
          avg_completion_rate?: number | null
          created_at?: string
          id?: string
          profile_id?: string
          total_forms_created?: number
          total_forms_responses?: number
          total_forms_views?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_analytics_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      submissions: {
        Row: {
          completion_time: number | null
          created_at: string
          form_id: string
          id: string
          identifier: string
          status: string
          updated_at: string
        }
        Insert: {
          completion_time?: number | null
          created_at?: string
          form_id: string
          id?: string
          identifier?: string
          status?: string
          updated_at?: string
        }
        Update: {
          completion_time?: number | null
          created_at?: string
          form_id?: string
          id?: string
          identifier?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "submissions_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "forms"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          billing_interval: string
          created_at: string
          due_date: string
          id: string
          plan: string
          profile_id: string
          start_date: string
          status: string
          stripe_subscription_id: string | null
          updated_at: string
        }
        Insert: {
          billing_interval?: string
          created_at?: string
          due_date?: string
          id?: string
          plan?: string
          profile_id: string
          start_date?: string
          status?: string
          stripe_subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          billing_interval?: string
          created_at?: string
          due_date?: string
          id?: string
          plan?: string
          profile_id?: string
          start_date?: string
          status?: string
          stripe_subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      templates: {
        Row: {
          category: string
          created_at: string
          id: string
          is_premium: boolean
          is_public: boolean
          name: string
        }
        Insert: {
          category?: string
          created_at: string
          id?: string
          is_premium?: boolean
          is_public?: boolean
          name?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          is_premium?: boolean
          is_public?: boolean
          name?: string
        }
        Relationships: []
      }
      templates_blocks: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_identifier: boolean
          max_char: number | null
          max_date: string | null
          max_scale: number | null
          min_char: number | null
          min_date: string | null
          min_scale: number | null
          name: string
          options: string[] | null
          placeholder: string | null
          position: number
          rating: number | null
          required: boolean
          show_char: boolean | null
          template_id: string
          type: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_identifier?: boolean
          max_char?: number | null
          max_date?: string | null
          max_scale?: number | null
          min_char?: number | null
          min_date?: string | null
          min_scale?: number | null
          name?: string
          options?: string[] | null
          placeholder?: string | null
          position?: number
          rating?: number | null
          required?: boolean
          show_char?: boolean | null
          template_id: string
          type?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_identifier?: boolean
          max_char?: number | null
          max_date?: string | null
          max_scale?: number | null
          min_char?: number | null
          min_date?: string | null
          min_scale?: number | null
          name?: string
          options?: string[] | null
          placeholder?: string | null
          position?: number
          rating?: number | null
          required?: boolean
          show_char?: boolean | null
          template_id?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "templates_blocks_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
        ]
      }
      themes: {
        Row: {
          created_at: string
          custom_primary_color: string
          form_id: string
          id: string
          nebulaform_branding: boolean
          numeric_blocks: boolean
          primary_color: string
          updated_at: string
          uppercase_block_name: boolean
          width: string
        }
        Insert: {
          created_at?: string
          custom_primary_color?: string
          form_id: string
          id?: string
          nebulaform_branding?: boolean
          numeric_blocks?: boolean
          primary_color?: string
          updated_at?: string
          uppercase_block_name?: boolean
          width?: string
        }
        Update: {
          created_at?: string
          custom_primary_color?: string
          form_id?: string
          id?: string
          nebulaform_branding?: boolean
          numeric_blocks?: boolean
          primary_color?: string
          updated_at?: string
          uppercase_block_name?: boolean
          width?: string
        }
        Relationships: [
          {
            foreignKeyName: "themes_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "forms"
            referencedColumns: ["id"]
          },
        ]
      }
      usages: {
        Row: {
          created_at: string
          due_date: string
          forms: number
          id: string
          profile_id: string
          start_date: string
          submissions: number
          subscription_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          due_date?: string
          forms?: number
          id?: string
          profile_id: string
          start_date?: string
          submissions?: number
          subscription_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          due_date?: string
          forms?: number
          id?: string
          profile_id?: string
          start_date?: string
          submissions?: number
          subscription_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "usages_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usages_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
