-- Insert admin role for the user
INSERT INTO public.user_roles (user_id, role)
VALUES ('cf7c2289-bd1e-4db5-8798-101563bfdaa0', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;