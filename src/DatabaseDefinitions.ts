export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          unsubscribed: boolean | null;
          // Add other fields as needed
        };
        Insert: {
          id: string;
          unsubscribed?: boolean | null;
          // Add other fields as needed
        };
        Update: {
          id?: string;
          unsubscribed?: boolean | null;
          // Add other fields as needed
        };
      };
      // Add other tables as needed
    };
  };
}; 