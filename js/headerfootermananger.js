class SpecialHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
         <header id="header" class="header sticky-header">

        <div class="top-header bg-dark">
            <div class="container">
                <div class="col-md-6">
                    <ul class="top-info">
                        <li><a href="tel:07011880850"><i class="ti-mobile"></i>+91-7011880850 </a></li>
                        <li><a href="mailto:headlinesbihar18@gmail.com"><i
                                    class="ti-email"></i>headlinesbihar18@gmail.com</a></li>
                    </ul>
                </div>
                <div class="col-md-6 text-right sm-text-left">
                    <ul class="top-social">
                        <li><a href="https://www.facebook.com/headlinesbihar"><i class="ti-facebook"></i></a></li>
                        <li><a href="https://x.com/headlinesbihar"><i class="ti-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/@headlinesbihar"><i class="ti-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/headlines.bihar/"><i class="ti-instagram"></i></a></li>
                        <li class="fz-13"> Agust , 2024</li>

                    </ul>
                </div>
            </div>
        </div><!-- /.top-header -->

        <div class="mid-header">
            <div class="container">
                <div class="site-branding full-left">
                    <a href=""><img src="img/logo/Headlines-Nation-news.png" style="max-width: 162px;"
                            class="img-responsive" alt="headlinesnation"></a>
                </div><!-- /.site-branding -->
                <div class="banner pull-right">
                    <a href="#"><img src="img/banner.jpg" alt="News24 Banner"></a>
                </div><!-- /.banner -->
            </div>
        </div><!-- /.mid-header -->

        <div class="mainmenu-wrap bg-red">
            <div class="container">
                <div class="col-md-9 col-xs-6">
                    <div class="menu-wrap mean-menu">
                        <nav class="mainmenu">
                            <ul id="navi-menu">
                                <!-- <li class="current_page_item"><a href="index.html"> न्यूज़</a></li> -->
                                <li><a href="#">राज्य</a>
                                    <ul>
                                        <li><a href="#!">बिहार</a></li>
                                    </ul>
                                </li>
                                <li><a href="politics.html">पॉलिटिक्स</a></li>
                                <li><a href="#!">राष्ट्रीय</a></li>
                                <li><a href="crime.html">क्राइम</a></li>
                                <li><a href="#!">हेल्थ</a></li>
                                <li><a href="#!">मनोरंजन</a></li>
                                <li><a href="sports.html">खेल</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <form action="#" class="search-form">
                        <input type="text" placeholder="Search news..">
                        <button class="submit" type="submit"><i class="ti-search"></i></button>
                    </form>
                </div>
                <div class="mobile-menu"></div>
            </div>
        </div><!-- /.mainmenu-wrap -->

    </header><!-- /.header -->
        
        `
    }
}

customElements.define('special-header', SpecialHeader)





