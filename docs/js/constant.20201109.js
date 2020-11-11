function header(path) {
    const HEADER = '\
<header class="top-header border">\
    <div class="container">\
        <div class="row header">\
            <!-- ########## begin: logo ########## -->\
            <div class="col-md-2 col-sm-4 col-xs-4 logo">\
                <a href="home.html">\
                    <img src="'+path+'/img/logos/logo-emorynlp.png" style="height:60px;margin-top:-20px;" alt="Emory NLP"/>\
                </a>\
            </div>\
            <!-- ########## end: logo ########## -->\
\
            <!-- ########## begin: navigation ########## -->\
            <div class="col-md-10">\
                <div class="mobile-menu-button">\
                    <i class="icon-reorder"></i>\
                </div>\
\
                <nav>\
                    <ul class="navigation">\
                        <li>\
                            <a href="'+path+'/home.html">Home</a>\
                        </li>\
                        <li>\
                            <a href="https://www.linkedin.com/company/emorynlp/" target="_blank">Blog</a>\
                        </li>\
                        <li>\
                            <a href="'+path+'/members.html">People</a>\
                            <ul>\
                                <li>\
                                    <a href="'+path+'/members.html">Members</a>\
                                </li>\
                                <li>\
                                    <a href="'+path+'/alumni.html">Alumni</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li>\
                            <a href="">Projects</a>\
                            <ul>\
                                <li>\
                                    <a href="https://github.com/emorynlp/character-mining" target="_blank">Character Mining</a>\
                                </li>\
                                <li>\
                                    <a href="https://elit.readthedocs.io" target="_blank">ELIT: NLP Toolkit</a>\
                                </li>\
                                <li>\
                                    <a href="'+path+'/emora/emora.html">Emora: Social Chatbot</a>\
                                </li>\
                                <li>\
                                    <a href="https://github.com/emorynlp/StreamSide" target="_blank">Semantic Networks</a>\
                                </li>\
                                <li>\
                                    <a href="">Biomedical NLP</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li>\
                            <a href="publications.html">Resources</a>\
                            <ul>\
                                <li>\
                                    <a href="'+path+'/publications.html">Publications</a>\
                                </li>\
                                <li>\
                                    <a href="'+path+'/tools-datasets.html">Tools & Datasets</a>\
                                </li>\
                            </ul>\
                        </li>\
                        <li>\
                            <a href="meetings/">Events</a>\
                            <ul>\
                                <li>\
                                    <a href="'+path+'/meetings/index.html">Emory NLP Weekly</a>\
                                </li>\
                                <li>\
                                    <a href="'+path+'/naclo/naclo.html">NACLO 2020</a>\
                                </li>\
                                <li>\
                                    <a href="https://github.com/emorynlp/semeval-2018-task4" target="_blank">SemEval 2018 Task 4</a>\
                                </li>\
                            </ul>\
                        </li>\
                    </ul>\
                </nav>\
\
                <!-- Mobile Nav. Container -->\
                <ul class="mobile-nav">\
                    <li class="responsive-searchbox">\
                    </li>\
                </ul>\
            </div>\
            <!-- ########## end: navigation ########## -->\
        </div>\
    </div>\
</header>\
    ';

    document.write(HEADER);
}

const FOOTER = '\
<footer>\
    <div class="footer">\
        <div class="container">\
            <div class="footer-wrapper">\
                <div class="row">\
                    <div class="col-md-3 col-sm-3 footer-col">\
                        <div class="footer-title">\
                            About Us\
                        </div>\
                        <div class="footer-content">\
                            <div class="footer-content-text">\
                                Director: Jinho D. Choi<br>\
                                Laboratory: MSC W302<br>\
                                Phone: (404) 712-5694<br>\
                                Fax: (404) 727-5611<br>\
                                Email: jinho.choi@emory.***\
                            </div>\
                        </div>\
                    </div>\
\
                    <div class="col-md-3 col-sm-3 footer-col">\
                        <div class="footer-title">\
                            Mailing Address\
                        </div>\
                        <div class="footer-content">\
                            <div class="footer-content-text">\
                                Mathematics & Science Center<br>\
                                Suite W401<br>\
                                400 Dowman Drive<br>\
                                Atlanta, Georgia 30322<br>\
                                United States\
                            </div>\
                        </div>\
                    </div>\
\
                    <div class="col-md-6 col-sm-6 footer-col">\
                        <div class="footer-title">\
                            Location\
                        </div>\
                        <div class="footer-content">\
                            <iframe width="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPTAVz_EG9YgRhc7Y8ReQkaQ&key=AIzaSyCMxUqwjjL8sS3FgPUGxQLjMZwVZkvqiEU" allowfullscreen></iframe>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="copyright">\
            <div class="container">\
                <div class="row">\
                    <div class="col-md-12 col-sm-12" align="center">\
                        <div class="copyright-text">&copy;2014 - '+new Date().getFullYear()+' Emory NLP. All rights reserved.</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</footer>\
';

function write_sidebar_menu(menu)
{
    var path = window.location.pathname;
    var url = path.split('/').pop();
    var s = '';

    for (i=0; i<menu.length; i++)
    {
        s += '<li class="menu-item';
        if (url == menu[i][0]) s += ' current-menu-item';
        s += '"><a href="'+menu[i][0]+'">'+menu[i][1]+'</a></li>';
    }

    document.write(s);
}

function meetings_menu()
{
    var TASKS = [
        ['meetings-fall-2020.html', 'Fall 2020']
    ];
    
    write_sidebar_menu(TASKS);
}

function character_mining_menu()
{
    var TASKS = [
        ['character-mining.html', 'Overview'],
        ['character-identification.html', 'Character Identification'],
        ['emotion-detection.html', 'Emotion Detection'],
        ['reading-comprehension.html', 'Reading Comprehension'],
    ];
    
    write_sidebar_menu(TASKS);
}

function emora_menu()
{
    var TASKS = [
        ['emora.html', 'Overview'],
        ['alexa-prize-4.html', 'Alexa Prize 4'],
        ['alexa-prize-3.html', 'Alexa Prize 3'],
    ];
    
    write_sidebar_menu(TASKS);
}

function elit_menu()
{
    var TASKS = [
        ['elit.html', 'Overview'],
        ['getting-started.html', 'Getting Started'],
        ['models.html', 'Available Models'],
        ['datasets.html', 'Training Datasets'],
        ['formats.html', 'Formats'],
    ];
    
    write_sidebar_menu(TASKS);
}

function comstruct_menu()
{
    var TASKS = [
        ['wisen.html', 'Semantic Networks'],
        ['previous.html', 'Previous Projects'],
    ];
    
    write_sidebar_menu(TASKS);
}
