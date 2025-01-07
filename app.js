// Login handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        window.location.href = '/dashboard.html';
    } else {
        alert('Credenciais inválidas!');
    }
});

// Add employee
document.getElementById('addEmployeeBtn')?.addEventListener('click', () => {
    const name = prompt('Nome:');
    const role = prompt('Cargo:');
    const contact = prompt('Contato:');

    if (name && role && contact) {
        fetch('/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, role, contact })
        }).then(() => location.reload());
    }
});
