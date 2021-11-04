var emailVerification = (user) => {
    user.sendEmailVerification().then(() => {
        Materialize.toast("Correo de verificación enviado", 3000, 'purple')
        setseenvview()
    })
}