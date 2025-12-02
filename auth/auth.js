// ============================================
// CLASSICALIA - AUTHENTICATION FUNCTIONS
// ============================================
// This file contains functions used across the site for login/logout/etc.
// Include this file on any page that needs to know if a user is logged in.

// ============================================
// CHECK IF USER IS LOGGED IN
// ============================================
// Returns the current user if logged in, or null if not
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// ============================================
// GET USER PROFILE (includes role: student/teacher)
// ============================================
// Returns the user's profile from our users table
async function getUserProfile() {
    const user = await getCurrentUser();
    if (!user) return null;
    
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
    
    if (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
    return data;
}

// ============================================
// SIGN UP A NEW USER
// ============================================
// Creates a new account with email, password, name, and role
async function signUp(email, password, fullName, role) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                full_name: fullName,
                role: role
            }
        }
    });
    
    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true, data: data };
}

// ============================================
// LOG IN AN EXISTING USER
// ============================================
// Signs in with email and password
async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    
    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true, data: data };
}

// ============================================
// LOG OUT
// ============================================
// Signs out the current user
async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}

// ============================================
// REDIRECT BASED ON LOGIN STATUS
// ============================================
// Use this on protected pages to redirect non-logged-in users
async function requireAuth(redirectUrl) {
    if (!redirectUrl) {
        redirectUrl = '/auth/login.html';
    }
    const user = await getCurrentUser();
    if (!user) {
        window.location.href = redirectUrl;
        return null;
    }
    return user;
}

// ============================================
// REDIRECT LOGGED-IN USERS AWAY FROM LOGIN PAGE
// ============================================
// Use this on login/register pages to redirect already-logged-in users
async function redirectIfLoggedIn() {
    const user = await getCurrentUser();
    if (user) {
        const profile = await getUserProfile();
        if (profile && profile.role === 'teacher') {
            window.location.href = '/dashboard/teacher.html';
            return true;
        } else if (profile && profile.role === 'student') {
            window.location.href = '/dashboard/student-hub.html';
            return true;
        }
        // If no profile or unknown role, stay on the page
    }
    return false;
}

// ============================================
// REQUEST PASSWORD RESET
// ============================================
// Sends a password reset email to the user
async function requestPasswordReset(email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/auth/reset-password.html'
    });

    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}

// ============================================
// UPDATE PASSWORD
// ============================================
// Updates the user's password (used after clicking reset link)
async function updatePassword(newPassword) {
    const { error } = await supabase.auth.updateUser({
        password: newPassword
    });

    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}
