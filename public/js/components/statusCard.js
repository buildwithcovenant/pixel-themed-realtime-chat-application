const statuses = [
    {
        'registration-sucess': {
            variant: 'success', 
            icon: <i class="fa-solid fa-check"></i>,
            title: 'Welcome aboard',
            message: 'Your account has been created',
            primary: {label: 'Continue to login', href: 'login.html'}
        }
    },

    {
        'login-success': {
            variant: 'success',
            icon: <i class="fa-solid fa-check"></i>,
            title: 'Welcome back',
            message: 'You\'re signed in, your friends and conversations are ready when you are',
            primary: {label: 'Open my chats', href: 'dashboard.html'}
        }
    },

    {
        'password-update': {
            variant: 'success',
            icon: <i class="fa-solid fa-check"></i>,
            title: 'Password Update Successful',
            message: 'Your password was changed successfully, signin with your new password',
            primary: {label: 'Go to login', href: 'login.html'}
        }
    },

    {
        'connection-error': {
            variant: 'error',
            icon: <i class="fa-solid fa-x"></i>,
            title: 'Connection Lost',
            message: 'We couldn\'t reach pixel chat, check your internet connection then try again',
            primary: {label: 'Try Again', href: 'login.html'}
        }
    },


]