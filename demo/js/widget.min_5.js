"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}();!function(e){function a(){function a(e,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,a.bubbles,a.cancelable,a.detail),n}return"function"==typeof e.CustomEvent?!1:(a.prototype=e.Event.prototype,void(e.CustomEvent=a))}var n=function(){function a(){_classCallCheck(this,a),this.formNameMap={adw_showroom_lead:"showroom-adw-lead",agent_search:"agent-search",blacklabel:"blacklabel-lead",blog_lead_default:"blog-lead",blog_lead_email:"blog-lead-email-friend",blog_search:"blog-search",bodyshop_lead:"bodyshop-lead",build_and_price_lead:"build-and-price-lead",calculator_affordability:"calculator-affordability",calculator_mortgage_affordability:"calculator-mortgage-affordability",calculator_payment_dealertrack_lead:"calculator-payment-dealertrack-lead",calculator_payment_dealertrack_lead_digital_retailing:"calculator-payment-dealertrack-lead-digital-retailing",carproof:"inventory-lead-carproof",comments:"comments",contact:"contact","contact-on-deposit":"contact-on-deposit",design:"design",directions:"directions",directions_footer:"directions-footer",employment:"employment",eprice:"inventory-eprice",evaluation:"evaluation",finance:"finance",finance_driver_application:"finance-driver-application",finance_lead:"finance-lead",finance_lead_mx:"finance-lead-mx",finance_mx:"finance-mx",finance_on_deposit:"finance-on-deposit",incentives:"incentives",incentives_lead:"incentives-lead",incentives_lead_mobile:"incentives-lead-mobile",incentives_listing_lead:"incentives-listing-lead",inventory_finder:"inventory-finder-lead",inventory_lead:"inventory-lead",inventory_lead_email:"inventory-lead-email",inventory_lead_eprice:"inventory-lead-eprice",inventory_lead_instant_eprice:"inventory-lead-instant-eprice",inventory_lead_offer:"inventory-lead-offer",inventory_lead_schedule:"inventory-lead-schedule",inventory_lead_tradein:"inventory-lead-trade-in",inventory_offer:"inventory-offer",inventory_search:"inventory-search",inventory_search_forward_contact:"inventory-search-forward-contact",inventory_search_lead:"inventory-search-lead",inventory_trade_in:"inventory-trade-in",model_specific_landing_lead:"model-specific-landing-lead",mxprofile_service_lead:"service-lead-mx",mycarscontact:"mycars-contact",nav_forward_contact:"contact",navbar_contact:"contact-navbar",parts_lead:"parts-lead",payment_calculator:"calculator-payment",quick_quote:"quick-quote",rental:"rental",rewards_contact:"rewards-more-info",rewards_smarttech_reward_modal:"rewards-smarttech-rewards-modal",rewards_smarttech_rewards:"rewards-smarttech-rewards",route_one_finance:"finance-route-one",service_lead:"service-lead",service_lead_intro:"service-lead-intro",service_tirerack_lead:"service-tirerack-lead",short_finance:"finance-short",showroom_lead:"showroom-lead",showroom_lead_email:"showroom-lead-email-friend",specials_lead:"specials-lead",specials_lead_email:"specials-lead-email-friend",staff:"staff",test:"test",vehicle_protection:"protection-driver"},this.nameKeys=Object.keys(this.formNameMap).sort(function(e,a){return a.length-e.length})}return _createClass(a,[{key:"getFormTrackingName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=this.formNameMap[e]||this.formNameMap[this.getKeyMatch(e)]||"other";return a}},{key:"getKeyMatch",value:function(e){var a="",n=this.nameKeys;for(var t in n){var r=n[t];if(e.indexOf(r)>-1){a=r;break}}return a}},{key:"trackAjaxFormEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pushPixallEvent(e)}},{key:"trackFormEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o={type:"event",eventType:"formSubmission",formType:n,formEventId:a};return""!==t&&(o.vin=t),""!==r&&(o.stockNumber=r),""!==i&&(o.exteriorColor=i),""===n&&(e=e.replace(new RegExp("-","g"),"_"),o.formType=this.getFormTrackingName(e)),this.pushPixallEvent(o),!0}},{key:"pushPixallEvent",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e._pxam="undefined"!=typeof e._pxam&&e._pxam||[],e._pxam.push(a)}}]),a}();e.DDC=e.DDC||{},DDC.Widgets=DDC.Widgets||{},DDC.Widgets.Tracking=DDC.Widgets.Tracking||{},DDC.Widgets.Tracking.FormTracking=new n;try{DDC.Widgets.Tracking.FormTracking.Available=new Event("DDC.Widgets.Tracking.FormTracking.Available")}catch(t){a(),DDC.Widgets.Tracking.FormTracking.Available=new CustomEvent("DDC.Widgets.Tracking.FormTracking.Available")}e.dispatchEvent(DDC.Widgets.Tracking.FormTracking.Available)}(window);