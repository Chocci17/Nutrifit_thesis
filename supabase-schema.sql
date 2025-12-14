-- NutriFit Database Schema
-- Run this in your Supabase SQL Editor

-- Create profiles table for user information
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    first_name TEXT,
    last_name TEXT,
    display_name TEXT,
    age INTEGER,
    gender TEXT,
    height TEXT,
    weight TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meal_logs table
CREATE TABLE IF NOT EXISTS public.meal_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    meal_name TEXT NOT NULL,
    remarks TEXT,
    protein NUMERIC(10, 2) DEFAULT 0,
    carbs NUMERIC(10, 2) DEFAULT 0,
    fat NUMERIC(10, 2) DEFAULT 0,
    calories NUMERIC(10, 2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create macro_targets table
CREATE TABLE IF NOT EXISTS public.macro_targets (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    protein NUMERIC(10, 2) DEFAULT 120,
    carbs NUMERIC(10, 2) DEFAULT 250,
    fat NUMERIC(10, 2) DEFAULT 70,
    calories NUMERIC(10, 2) DEFAULT 2200,
    fitness_goal TEXT DEFAULT 'balanced',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_meal_logs_user_id ON public.meal_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_meal_logs_date ON public.meal_logs(date);
CREATE INDEX IF NOT EXISTS idx_meal_logs_user_date ON public.meal_logs(user_id, date);
CREATE INDEX IF NOT EXISTS idx_macro_targets_user_id ON public.macro_targets(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meal_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.macro_targets ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

DROP POLICY IF EXISTS "Users can view their own meal logs" ON public.meal_logs;
DROP POLICY IF EXISTS "Users can insert their own meal logs" ON public.meal_logs;
DROP POLICY IF EXISTS "Users can update their own meal logs" ON public.meal_logs;
DROP POLICY IF EXISTS "Users can delete their own meal logs" ON public.meal_logs;

DROP POLICY IF EXISTS "Users can view their own macro targets" ON public.macro_targets;
DROP POLICY IF EXISTS "Users can insert their own macro targets" ON public.macro_targets;
DROP POLICY IF EXISTS "Users can update their own macro targets" ON public.macro_targets;
DROP POLICY IF EXISTS "Users can delete their own macro targets" ON public.macro_targets;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
    ON public.profiles FOR INSERT
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

-- Create RLS policies for meal_logs
CREATE POLICY "Users can view their own meal logs"
    ON public.meal_logs FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own meal logs"
    ON public.meal_logs FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own meal logs"
    ON public.meal_logs FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own meal logs"
    ON public.meal_logs FOR DELETE
    USING (auth.uid() = user_id);

-- Create RLS policies for macro_targets
CREATE POLICY "Users can view their own macro targets"
    ON public.macro_targets FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own macro targets"
    ON public.macro_targets FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own macro targets"
    ON public.macro_targets FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own macro targets"
    ON public.macro_targets FOR DELETE
    USING (auth.uid() = user_id);

-- Grant permissions
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.meal_logs TO authenticated;
GRANT ALL ON public.macro_targets TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE meal_logs_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE macro_targets_id_seq TO authenticated;

-- Create trigger to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, email, first_name, last_name)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'first_name',
        NEW.raw_user_meta_data->>'last_name'
    );
    RETURN NEW;
EXCEPTION WHEN OTHERS THEN
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists and create new one
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
