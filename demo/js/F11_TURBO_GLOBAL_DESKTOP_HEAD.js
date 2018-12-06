// F11_TURBO_GLOBAL_DESKTOP_HEAD.js --- GLOBAL <HEAD> JS

// AutoCanada Global GTM Container  
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMWNWM');


// VISUAL WEBSITE OPTIMIZER ASYNCHRONOUS CODE

var _vwo_code=(function(){
var account_id=294533, settings_tolerance=2000, library_tolerance=2500, use_existing_jquery=true, f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();


// END VISUAL WEBSITE OPTIMIZER ASYNCHRONOUS CODE




// REDIRECT FOR FILTERING LISTINGS WIDGET ON NATIONAL OFFERS LP 

(function(){
    
    const currentUrl = window.location.pathname;

    const chryslerNationalOffers = [{
            'landingPageUrl': '/promo/national-offers-chrysler.htm',
            'searchParam': '?search=&compositeType=new&year=2018&make=Chrysler&model=Pacifica'
        }, {
            'landingPageUrl': '/promo/national-offers-dodge.htm',
            'searchParam': '?search=&compositeType=new&year=2018&make=Dodge&model=Grand+Caravan'
        }, {
            'landingPageUrl': '/promo/national-offers-jeep.htm',
            'searchParam': '?search=&compositeType=new&year=2018&make=Jeep&model=Grand+Cherokee'
        }, {
            'landingPageUrl': '/promo/national-offers-ram.htm',
            'searchParam': '?search=&compositeType=new&year=2018&make=Ram&model=1500'
        }
    ];


    let searchParam;

    chryslerNationalOffers.some(function(offer){

        if (offer.landingPageUrl === currentUrl){

            searchParam = offer.searchParam;
            
            filterListings(currentUrl, searchParam);

            return;

        }
    
}); 



function filterListings (url, searchParam) {
    
    let protocol = window.location.protocol;
    let domain = window.location.hostname;
    
            if (window.location.href === protocol + '//' + domain + url) {
              window.location.href = protocol + '//' + domain + url + searchParam;
            }
        
}
    
}());
