export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      members: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          city: string | null;
          age_range: string | null;
          motivation: string | null;
          status: "pending" | "active" | "inactive";
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone: string;
          city?: string | null;
          age_range?: string | null;
          motivation?: string | null;
          status?: "pending" | "active" | "inactive";
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["members"]["Insert"]>;
      };
      event_registrations: {
        Row: {
          id: string;
          event_id: string;
          event_title: string;
          full_name: string;
          email: string;
          phone: string;
          organization: string | null;
          ticket_type: "standard" | "vip" | "student";
          quantity: number;
          attended: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          event_title: string;
          full_name: string;
          email: string;
          phone: string;
          organization?: string | null;
          ticket_type?: "standard" | "vip" | "student";
          quantity?: number;
          attended?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["event_registrations"]["Insert"]>;
      };
      news_subscribers: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          source: string | null;
          confirmed: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          source?: string | null;
          confirmed?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["news_subscribers"]["Insert"]>;
      };
    };
  };
}

export type Member = Database["public"]["Tables"]["members"]["Row"];
export type EventRegistration = Database["public"]["Tables"]["event_registrations"]["Row"];
export type NewsSubscriber = Database["public"]["Tables"]["news_subscribers"]["Row"];