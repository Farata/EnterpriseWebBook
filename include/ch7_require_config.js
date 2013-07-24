require.config({        // <1>
    paths: {            // <2>
        'login': 'modules/login',
        'donation': 'modules/donation',
        'svg-pie-chart': 'modules/svg-pie-chart',
        'campaigns-map': 'modules/campaigns-map',
        'showHideDiv': 'modules/utils/show-hide-div',
        'loadHtmlContent': 'modules/utils/load-html-content',
        'newContentLoader': 'modules/utils/new-content-loader',
        'who-we-are': 'modules/who-we-are',
        'what-we-do': 'modules/what-we-do',
        'where-we-work': 'modules/where-we-work',
        'way-to-give': 'modules/way-to-give',
        'components': '../components',
        'jquery': '../components/jquery/jquery',
        'main': 'main',
        'GoogleMap': '../components/GoogleMap/dist/GoogleMap'
    }
});

require(['main'], function() {}); // <3>