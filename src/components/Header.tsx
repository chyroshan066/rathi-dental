export const Header = () => {
    return <>
        <header class="header">

            <div class="header-top">
                <div class="container">

                    <ul class="contact-list">

                        <li class="contact-item">
                            <ion-icon name="mail-outline"></ion-icon>

                            <a href="mailto:info@example.com" class="contact-link">info@example.com</a>
                        </li>

                        <li class="contact-item">
                            <ion-icon name="call-outline"></ion-icon>

                            <a href="tel:+917052101786" class="contact-link">+91-7052-101-786</a>
                        </li>

                    </ul>

                    <ul class="social-list">

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>

            <div class="header-bottom" data-header>
                <div class="container">

                    <a href="#" class="logo">Dentelo.</a>

                    <nav class="navbar container" data-navbar>
                        <ul class="navbar-list">

                            <li>
                                <a href="#home" class="navbar-link" data-nav-link>Home</a>
                            </li>

                            <li>
                                <a href="#service" class="navbar-link" data-nav-link>Services</a>
                            </li>

                            <li>
                                <a href="#about" class="navbar-link" data-nav-link>About Us</a>
                            </li>

                            <li>
                                <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
                            </li>

                            <li>
                                <a href="#" class="navbar-link" data-nav-link>Contact</a>
                            </li>

                        </ul>
                    </nav>

                    <a href="#" class="btn">Book appointment</a>

                    <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
                        <ion-icon name="menu-sharp" aria-hidden="true" class="menu-icon"></ion-icon>
                        <ion-icon name="close-sharp" aria-hidden="true" class="close-icon"></ion-icon>
                    </button>

                </div>
            </div>

        </header>
    </>;
}