<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <div class="form-container">
            <h1>Faça seu Login<span>.</span></h1>
            <form action="processa_login.php" method="POST">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" required>
                
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required>
                
                <a href="#" class="link">Esqueci minha senha</a>
                <button type="submit" class="btn">Entrar</button>
            </form>
            <a href="#" class="link">Ainda não tenho uma conta</a>
        </div>
        <div class="image-container">
            <div class="overlay"></div>
        </div>
    </div>
    <footer>
        <p>2023 | Desenvolvido por <a href="#">Leonardo Diman</a></p>
    </footer>
</body>
</html>
