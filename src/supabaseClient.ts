import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores con los de tu proyecto Supabase:
const supabaseUrl = 'https://TU_URL.supabase.co'; // <-- Cambia esto
const supabaseAnonKey = 'TU_ANON_KEY'; // <-- Cambia esto

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
