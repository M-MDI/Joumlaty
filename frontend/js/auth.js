document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    loginBtn.addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, role })
            });

            if (response.ok) {
                window.location.href = role === 'seller' 
                    ? '/seller-dashboard.html' 
                    : '/index.html';
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    });

    signupBtn.addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, role })
            });

            if (response.ok) {
                alert('Registration successful');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    });
});