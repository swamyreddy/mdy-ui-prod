(self["webpackChunkhpa_angular"] = self["webpackChunkhpa_angular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.component */ 980);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _helpers_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/page-not-found/page-not-found.component */ 9964);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/properties.component */ 6889);
/* harmony import */ var _properties_property_details_amenities_amenities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/property-details/amenities/amenities.component */ 8343);
/* harmony import */ var _properties_property_details_floor_plans_pricing_floor_plans_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/property-details/floor-plans-pricing/floor-plans-pricing.component */ 4370);
/* harmony import */ var _properties_property_details_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/property-details/gallery/gallery.component */ 8226);
/* harmony import */ var _properties_property_details_information_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/property-details/information/information.component */ 8670);
/* harmony import */ var _properties_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./properties/property-details/property-details.component */ 8963);
/* harmony import */ var _seller_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seller/create-property/create-property.component */ 8930);
/* harmony import */ var _seller_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seller/edit-property/edit-property.component */ 5102);
/* harmony import */ var _seller_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seller/my-properties/my-properties.component */ 4047);
/* harmony import */ var _seller_seller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./seller/seller.component */ 9625);
/* harmony import */ var _search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-properties/search-properties.component */ 120);
/* harmony import */ var _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/profile/profile.component */ 6499);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);




















const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__.AboutComponent },
    { path: 'search', component: _search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_14__.SearchPropertiesComponent },
    { path: 'properties', component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesComponent },
    {
        path: 'property/:id',
        component: _properties_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_9__.PropertyDetailsComponent,
        children: [
            { path: '', redirectTo: 'information', pathMatch: 'full' },
            { path: 'information', component: _properties_property_details_information_information_component__WEBPACK_IMPORTED_MODULE_8__.InformationComponent },
            { path: 'floor-plans-pricing', component: _properties_property_details_floor_plans_pricing_floor_plans_pricing_component__WEBPACK_IMPORTED_MODULE_6__.FloorPlansPricingComponent },
            { path: 'amenities', component: _properties_property_details_amenities_amenities_component__WEBPACK_IMPORTED_MODULE_5__.AmenitiesComponent },
            { path: 'gallery', component: _properties_property_details_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__.GalleryComponent },
        ],
    },
    {
        path: 'seller',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _seller_seller_component__WEBPACK_IMPORTED_MODULE_13__.SellerComponent,
        children: [
            { path: '', redirectTo: 'create-property', pathMatch: 'full' },
            { path: 'my-properties', component: _seller_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_12__.MyPropertiesComponent },
            { path: 'create-property', component: _seller_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_10__.CreatePropertyComponent },
            { path: 'edit-property/:id/edit', component: _seller_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__.EditPropertyComponent },
        ],
    },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent },
    { path: 'signup', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent },
    { path: 'profile', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard], component: _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__.ProfileComponent },
    { path: 'page-not-found', component: _helpers_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__.PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(appRoutes, {
                initialNavigation: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_browser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/browser.service */ 8104);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/alert/alert.component */ 8549);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/modals/gobal-modal/gobal-modal.component */ 869);









function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "property-type": "villa" }; };
const _c1 = function () { return { "property-type": "apartment" }; };
const _c2 = function () { return { "property-type": "commercial" }; };
const _c3 = function () { return { "property-type": "plot" }; };
const _c4 = function () { return { "property-type": "form-land" }; };
class AppComponent {
    constructor(broswerService, authService, router) {
        this.broswerService = broswerService;
        this.authService = authService;
        this.router = router;
        this.title = 'HPA Hyd';
        this.loadedPageType = 'buyer';
    }
    ngOnInit() { }
    onPageTypeSelected(pageType) {
        this.loadedPageType = pageType;
    }
    goToSearch(filters) {
        this.router.navigate(['/search'], { queryParams: filters });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_browser_service__WEBPACK_IMPORTED_MODULE_0__.BrowserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 72, vars: 17, consts: [[3, "pageTypeSelected"], [4, "ngIf"], [1, "dark-section", "text-white", "pt-4", "mt-2"], [1, "container"], [1, "row", "g-5"], [1, "col-lg-4"], [1, "text-gray-400", "text-sm", "mb-4"], [1, "font-semibold", "mb-3"], [1, "d-flex"], ["type", "email", "placeholder", "Your Email", 1, "form-control", "form-control-sm", "me-2", "bg-gray-700", "border-0", "text-white", "rounded-pill"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "rounded-pill", "px-3", 2, "background-color", "#6366f1", "border-color", "#6366f1"], [1, "fas", "fa-paper-plane"], [1, "col-6", "col-lg-2"], [1, "list-unstyled", "text-sm"], [1, "mb-2"], [1, "text-gray-400", "hover:text-white", "text-decoration-none", 3, "routerLink"], ["href", "#", 1, "text-gray-400", "hover:text-white", "text-decoration-none"], [1, "text-gray-400", "hover:text-white", "text-decoration-none", 3, "routerLink", "queryParams"], [1, "mb-2", "text-gray-400"], [1, "fas", "fa-envelope", "me-2", "text-indigo-400"], [1, "mt-4"], ["href", "#", 1, "text-white", "me-3", "hover:text-indigo-400"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], ["href", "#", 1, "text-white", "hover:text-indigo-400"], [1, "fab", "fa-linkedin-in"], [1, "border-top", "border-gray-700", "mt-3", "mb-3", "pt-3", "pt-3", "text-center"], [1, "text-sm", "text-gray-500", "mb-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageTypeSelected", function AppComponent_Template_app_header_pageTypeSelected_0_listener($event) { return ctx.onPageTypeSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Are you a property Expert? Join our team to manage exclusive properties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Get Latest Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Luxury Villas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Apartments");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Commercial");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Plots");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Form Lands");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Got Queries?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "info@mydreamyards.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " \u00A9 2026 My Dream Yards. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "app-gobal-modal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadedPageType === "buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/search")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/search")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/search")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/search")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/search")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c4));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _shared_modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_4__.GlobalModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: [".hero-bg[_ngcontent-%COMP%] {\r\n  background: url(\"https://placehold.co/1920x800/20344b/white?text=Modern+Villa+Background\")\r\n    no-repeat center center;\r\n  background-size: cover;\r\n  min-height: 70vh;\r\n  position: relative;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.4); \r\n}\r\n.card-property[_ngcontent-%COMP%] {\r\n  transition:\r\n    transform 0.3s ease,\r\n    box-shadow 0.3s ease;\r\n}\r\n.card-property[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\r\n}\r\n.dark-section[_ngcontent-%COMP%] {\r\n  background-color: #1f2937; \r\n}\r\n.dark-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.bg_image[_ngcontent-%COMP%] {\r\n  background: #f6f7f9;\r\n  \r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7MkJBQ3lCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQyxFQUFFLGlCQUFpQjtBQUN6RDtBQUNBO0VBQ0U7O3dCQUVzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UseUJBQXlCLEVBQUUseUJBQXlCO0FBQ3REO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQjs7Ozs7TUFLSTtBQUNOO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tYmcge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vcGxhY2Vob2xkLmNvLzE5MjB4ODAwLzIwMzQ0Yi93aGl0ZT90ZXh0PU1vZGVybitWaWxsYStCYWNrZ3JvdW5kXCIpXHJcbiAgICBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogRGFyayBvdmVybGF5ICovXHJcbn1cclxuLmNhcmQtcHJvcGVydHkge1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxyXG4gICAgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbn1cclxuLmNhcmQtcHJvcGVydHk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KSAhaW1wb3J0YW50O1xyXG59XHJcbi5kYXJrLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7IC8qIFZlcnkgZGFyayBncmF5L2JsYWNrICovXHJcbn1cclxuLmRhcmstc2VjdGlvbiBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYmdfaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY3Zjk7XHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTgwZGVnLFxyXG4gICAgcmdiYSgxMjAsIDE1MywgMTg1LCAxKSAwJSxcclxuICAgIHJnYmEoMjE3LCAyMjEsIDIyMiwgMSkgNTAlLFxyXG4gICAgcmdiYSgyMTcsIDIyMSwgMjIyLCAxKSAxMDAlXHJcbiAgKTsgKi9cclxufVxyXG5mb290ZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_locales_global_en_IN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/global/en-IN */ 1145);
/* harmony import */ var _angular_common_locales_global_en_IN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_global_en_IN__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/properties.component */ 6889);
/* harmony import */ var _properties_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/property-list/property-list.component */ 6396);
/* harmony import */ var _properties_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/property-details/property-details.component */ 8963);
/* harmony import */ var _properties_property_list_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/property-list/property-item/property-item.component */ 5887);
/* harmony import */ var _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seller/seller.component */ 9625);
/* harmony import */ var _seller_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seller/create-property/create-property.component */ 8930);
/* harmony import */ var _seller_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seller/edit-property/edit-property.component */ 5102);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dropdown.directive */ 1300);
/* harmony import */ var _seller_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seller/my-properties/my-properties.component */ 4047);
/* harmony import */ var _shared_property_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/property.service */ 5998);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _properties_property_details_floor_plans_pricing_floor_plans_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./properties/property-details/floor-plans-pricing/floor-plans-pricing.component */ 4370);
/* harmony import */ var _properties_property_details_amenities_amenities_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./properties/property-details/amenities/amenities.component */ 8343);
/* harmony import */ var _properties_property_details_information_information_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./properties/property-details/information/information.component */ 8670);
/* harmony import */ var _properties_property_details_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./properties/property-details/gallery/gallery.component */ 8226);
/* harmony import */ var _helpers_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/page-not-found/page-not-found.component */ 9964);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.component */ 980);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/loading/loading.component */ 3617);
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.interceptor.service */ 1966);
/* harmony import */ var _leads_leads_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./leads/leads.component */ 3661);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search-properties/search-properties.component */ 120);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _auth_auth_init__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/auth.init */ 3724);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth.service */ 384);
/* harmony import */ var _seller_seller_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./seller/seller.module */ 7129);
/* harmony import */ var _seller_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./seller/manage-units/manage-units.component */ 1437);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _core_services_browser_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./core/services/browser.service */ 8104);










































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [
        _shared_property_service__WEBPACK_IMPORTED_MODULE_13__.PropertyService,
        _core_services_browser_service__WEBPACK_IMPORTED_MODULE_32__.BrowserService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS,
            useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__.AuthInterceptorService,
            multi: true,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_33__.APP_INITIALIZER,
            useFactory: _auth_auth_init__WEBPACK_IMPORTED_MODULE_27__.authInitializer,
            deps: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_28__.AuthService],
            multi: true,
        },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_33__.LOCALE_ID, useValue: 'en-IN' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__.LayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__.SharedModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_39__.FontAwesomeModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_26__.AuthModule,
            _seller_seller_module__WEBPACK_IMPORTED_MODULE_29__.SellerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_14__.HomeComponent,
        _properties_properties_component__WEBPACK_IMPORTED_MODULE_3__.PropertiesComponent,
        _properties_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_4__.PropertyListComponent,
        _properties_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_5__.PropertyDetailsComponent,
        _properties_property_list_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_6__.PropertyItemComponent,
        _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__.SellerComponent,
        _seller_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_8__.CreatePropertyComponent,
        _seller_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_9__.EditPropertyComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent,
        _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__.DropdownDirective,
        _seller_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_12__.MyPropertiesComponent,
        _properties_property_details_floor_plans_pricing_floor_plans_pricing_component__WEBPACK_IMPORTED_MODULE_15__.FloorPlansPricingComponent,
        _properties_property_details_amenities_amenities_component__WEBPACK_IMPORTED_MODULE_16__.AmenitiesComponent,
        _properties_property_details_information_information_component__WEBPACK_IMPORTED_MODULE_17__.InformationComponent,
        _properties_property_details_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__.GalleryComponent,
        _helpers_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__.PageNotFoundComponent,
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__.AuthComponent,
        _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__.LoadingComponent,
        _leads_leads_component__WEBPACK_IMPORTED_MODULE_24__.LeadsComponent,
        _search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_25__.SearchPropertiesComponent,
        _seller_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_30__.ManageUnitsComponent,
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_31__.AboutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__.LayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__.SharedModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_39__.FontAwesomeModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_26__.AuthModule,
        _seller_seller_module__WEBPACK_IMPORTED_MODULE_29__.SellerModule] }); })();


/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/alert/alert.service */ 301);
/* harmony import */ var _shared_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modal.service */ 7583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loading/loading.component */ 3617);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);








function AuthComponent_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthComponent_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthComponent_app_loading_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading");
} }
function AuthComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthComponent_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AuthComponent_div_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onSubmit(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthComponent_div_9_div_3_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AuthComponent_div_9_div_8_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r6.valid);
} }
function AuthComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_div_10_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.isLogin = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_div_11_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.isLogin = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor(router, authService, alertService, modalService) {
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.isLogin = true;
        this.isLoading = false;
    }
    ngOnInit() {
        // this.authService.logout();
        // if (this.authService.isLoggedIn()) this.router.navigateByUrl('home');
        this.authService.autoLogin();
        if (this.router.url == '/login')
            this.isLogin = true;
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        this.isLoading = true;
        if (this.isLogin) {
            this.authService.signin(form.value).subscribe((result) => {
                this.alertService.success('Login Success!');
                this.router.navigateByUrl('/home');
                this.isLoading = false;
                this.modalService.close();
            }, (err) => {
                this.alertService.error(err);
                this.isLoading = false;
            });
        }
        else {
            this.authService.signup(form.value).subscribe((result) => {
                this.alertService.success('User Registered!');
                this.isLoading = false;
                this.modalService.close();
            }, (err) => {
                var _a, _b;
                const errorMsg = ((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.msg) || 'Something went wrong!!';
                this.alertService.error(errorMsg);
                this.isLoading = false;
                console.log(err, 'err+++');
            });
        }
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 12, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "relative", "mt-5", "mb-5"], [1, "col-md-12", "col-md-offset-3"], [4, "ngIf"], [3, "ngSubmit"], ["authForm", "ngForm"], ["class", "form-group mb-3", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "email"], ["type", "text", "id", "email", "ngModel", "", "required", "", "name", "email", "minlength", "5", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "minlength", "6", "required", "", "name", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["for", "name"], ["type", "text", "id", "name", "ngModel", "", "required", "", "name", "name", 1, "form-control"], ["for", "phone"], ["type", "text", "id", "phone", "ngModel", "", "required", "", "name", "phone", "minlength", "5", 1, "form-control"], ["href", "javascript:void()", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AuthComponent_h2_6_Template, 2, 0, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AuthComponent_h2_7_Template, 2, 0, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AuthComponent_app_loading_8_Template, 1, 0, "app-loading", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AuthComponent_div_9_Template, 16, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AuthComponent_div_10_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AuthComponent_div_11_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            const isAuth = !!user;
            console.log('AuthGuard: User authentication status:', isAuth);
            if (isAuth) {
                return true;
            }
            this.router.navigate(['/']);
            return false;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3724:
/*!***********************************!*\
  !*** ./src/app/auth/auth.init.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authInitializer": () => (/* binding */ authInitializer)
/* harmony export */ });
function authInitializer(authService) {
    return () => authService.autoLogin();
}


/***/ }),

/***/ 1966:
/*!**************************************************!*\
  !*** ./src/app/auth/auth.interceptor.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



class AuthInterceptorService {
    constructor(platformId) {
        this.platformId = platformId;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    }
    intercept(req, next) {
        let apiReq = req;
        // ✅ Prefix base URL for relative APIs
        if (!req.url.startsWith('http')) {
            apiReq = req.clone({
                url: `${this.baseUrl}${req.url}`,
            });
        }
        console.log('Hello TOken BEFORE');
        // ✅ Only enable credentials in browser (important for SSR)
        // if (isPlatformBrowser(this.platformId)) {
        // }
        apiReq = apiReq.clone({
            withCredentials: true,
        });
        return next.handle(apiReq);
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 6499);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);









class AuthService {
    constructor(http, router, platformId) {
        this.http = http;
        this.router = router;
        this.platformId = platformId;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
    }
    isLoggedIn() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            const userJson = localStorage.getItem('userDetails');
            const currentUser = userJson !== null ? JSON.parse(userJson) : {};
            if (!currentUser) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    signup(data) {
        return this.http
            .post(this.baseUrl + '/auth/register', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
            this.handleAuthentication(res);
        }));
    }
    signin(data) {
        return this.http
            .post(this.baseUrl + '/auth/login', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
            this.handleAuthentication(res);
        }));
    }
    handleError(errRes) {
        let errMessage = 'Unknown error occured';
        if (!errRes.error || !errRes.error.error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errMessage);
        }
        switch (errRes.error.error.type) {
            case 'EMAIL_DOES_NOT_EXISTS':
                errMessage = errRes.error.error.msg;
                break;
            case 'INVALID_DETAILS':
                errMessage = errRes.error.error.msg;
                break;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errMessage);
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/']);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            localStorage.removeItem('userDetails');
        }
    }
    autoLogin() {
        console.log((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId), 'Is platform browser?');
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            const userJson = localStorage.getItem('userDetails');
            const currentUser = userJson !== null ? JSON.parse(userJson) : {};
            if (!currentUser) {
                return;
            }
            const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(currentUser.name, currentUser.email, currentUser.phone, currentUser.id, currentUser._token, new Date(currentUser._tokenExpirationDate));
            if (currentUser._token) {
                this.user.next(loadedUser);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    getUserDetails() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            const userJson = localStorage.getItem('userDetails');
            return userJson !== null ? JSON.parse(userJson) : {};
        }
        return {};
    }
    updateUserDetails(updatedDetails) {
        return this.http
            .put(this.baseUrl + '/auth/update-profile', updatedDetails)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
            this.handleAuthentication(res);
        }));
    }
    handleAuthentication(response) {
        const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            localStorage.setItem('userDetails', JSON.stringify({
                name: response.name,
                email: response.email,
                phone: response.phone,
                id: response.id,
                _token: response.token,
                _tokenExpirationDate: expirationDate,
            }));
        }
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(response.name, response.email, response.phone, response.id, response.token, expirationDate);
        this.user.next(user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6499:
/*!***************************************************!*\
  !*** ./src/app/auth/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 384);
/* harmony import */ var src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/alert/alert.service */ 301);







class ProfileComponent {
    constructor(authService, platformId, alertService) {
        this.authService = authService;
        this.platformId = platformId;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]{10}$'),
            ]),
        });
        this.bindProfileData();
    }
    bindProfileData() {
        const userDetails = this.authService.getUserDetails();
        this.profileForm.setValue({
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
        });
        this.profileForm.disable();
    }
    onSubmit() {
        // Logic to handle form submission
        const updatedDetails = {
            name: this.profileForm.value.name,
            email: this.profileForm.value.email,
            phone: this.profileForm.value.phone,
        };
        // Update user details in localStorage or send to backend
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            const existingUserDetails = this.authService.getUserDetails();
            const updatedUserDetails = Object.assign(Object.assign({}, existingUserDetails), updatedDetails);
            localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails));
            this.authService
                .updateUserDetails(updatedUserDetails)
                .subscribe((data) => {
                this.alertService.success('Profile updated successfully!');
            });
        }
    }
    editProfile() {
        this.profileForm.enable();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 25, vars: 2, consts: [[1, "container"], [1, "page-header"], [1, "edit-profile-button"], [1, "btn", "btn-secondary", 3, "click"], [1, "row"], [1, "col-md-12"], [1, "user-profile-form"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phone"], ["type", "text", "id", "phone", "formControlName", "phone", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_5_listener() { return ctx.editProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Update Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.profileForm.invalid || ctx.profileForm.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3935:
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(name, email, phone, id, _token, _tokenExpirationDate) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ 8104:
/*!**************************************************!*\
  !*** ./src/app/core/services/browser.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserService": () => (/* binding */ BrowserService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class BrowserService {
    constructor(platformId) {
        this.platformId = platformId;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId);
    }
    get isBrowserEnvironment() {
        return this.isBrowser;
    }
    get window() {
        return this.isBrowser ? window : null;
    }
    get document() {
        return this.isBrowser ? document : null;
    }
}
BrowserService.ɵfac = function BrowserService_Factory(t) { return new (t || BrowserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
BrowserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowserService, factory: BrowserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.component */ 980);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _shared_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property.service */ 5998);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modal.service */ 7583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/search/search.component */ 3437);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);










function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const type_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.goToSearch({ "property-type": type_r7.short_name }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r7.name);
} }
function HeaderComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_20_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const range_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.goToSearch({ "price-range": range_r10.short_name }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const range_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](range_r10.label);
} }
function HeaderComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Sell a Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.openLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Sell a Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.openLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ul_29_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, propertyService, router, modalService) {
        this.authService = authService;
        this.propertyService = propertyService;
        this.router = router;
        this.modalService = modalService;
        this.collapsed = true;
        this.pageTypeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isAuthenticated = false;
        this.canBreadCrumbsVisible = true;
        this.propertyTypes = [
            { id: 0, short_name: 'project_type', name: 'Project Type' },
        ];
        this.priceRanges = [
            { label: 'Upto 25 Lakhs', short_name: '0-25L', value: '0-25L' },
            { label: '25 Lakhs - 50 Lakhs', short_name: '25L-50L', value: '25L-50L' },
            { label: '50 Lakhs - 1Cr', short_name: '50L-1Cr', value: '50L-1Cr' },
            { label: '1 Crore - 2 Crore', short_name: '1Cr-2Cr', value: '1Cr-2Cr' },
            { label: 'Above 2 Crore', short_name: '2Cr+', value: '2Cr+' }, // Use '0' as infinity/Max
        ];
    }
    ngOnInit() {
        this.canBreadCrumbsVisible = this.router.url !== '/home';
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
        });
        this.getPropertyTypes();
    }
    logout() {
        this.authService.logout();
    }
    goToSearch(filters) {
        this.router.navigate(['/search'], { queryParams: filters });
    }
    getPropertyTypes() {
        this.propertyTypes = this.propertyService.getPropertyTypes();
        // this.propertyTypes.unshift({ id: 0, name: 'Project Type' });
    }
    onClickMenuItem(type) {
        this.pageTypeSelected.emit(type);
    }
    onSelectionChange(evt) {
        console.log(evt);
    }
    openLogin() {
        this.modalService.open(_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_property_service__WEBPACK_IMPORTED_MODULE_2__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { pageTypeSelected: "pageTypeSelected" }, decls: 30, vars: 9, consts: [[1, "header"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["routerLink", "/home", 1, "navbar-brand", "font-bold", "text-xl", "p-0", "me-4", "mt-1"], ["src", "../../assets/images/logos/logo_white.png", "width", "100px"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mainNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item", "dropdown", "px-4", 2, "padding-left", "0 !important"], ["href", "#", "id", "propertyTypeDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "p-0", "hover:text-indigo-400", "text-white"], [1, "fas", "fa-angle-down", "ms-2", "text-indigo-400"], ["aria-labelledby", "propertyTypeDropdown", 1, "dropdown-menu", "dropdown-menu-light", "rounded-xl", "shadow-lg"], [4, "ngFor", "ngForOf"], [1, "nav-item", "dropdown", "px-4"], ["href", "#", "id", "priceRangeDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "p-0", "hover:text-indigo-400", "text-white"], ["aria-labelledby", "priceRangeDropdown", 1, "dropdown-menu", "dropdown-menu-light", "rounded-xl", "shadow-lg"], ["ngModel", "selectedOption", "name", "selectedOption", "ngDefaultControl", "", 3, "placeholder", "onlyInputSearch", "selectionChange"], [1, "d-flex", "gap-2"], ["class", "btn btn-bordered", "href", "javascript:void()", "routerLink", "/seller", "routerLinkActive", "active", 4, "ngIf"], ["class", "btn btn-bordered", "href", "javascript:void()", 3, "click", 4, "ngIf"], [1, "d-flex", "gap-2", "position-relative"], ["class", "btn btn-border text-white", "href", "javascript:void()", 3, "click", 4, "ngIf"], ["class", "btn btn-border text-white", "id", "userDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 4, "ngIf"], ["class", "dropdown-menu dropdown-menu-light rounded-xl shadow-lg", "aria-labelledby", "locationDropdown", 4, "ngIf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], ["href", "javascript:void()", "routerLink", "/seller", "routerLinkActive", "active", 1, "btn", "btn-bordered"], ["href", "javascript:void()", 1, "btn", "btn-bordered", 3, "click"], ["href", "javascript:void()", 1, "btn", "btn-border", "text-white", 3, "click"], ["id", "userDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-border", "text-white"], [1, "fas", "fa-user"], ["aria-labelledby", "locationDropdown", 1, "dropdown-menu", "dropdown-menu-light", "rounded-xl", "shadow-lg"], [1, "dropdown-item"], ["routerLink", "/profile", 1, "nav-link"], ["href", "javascript:void()", 1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Property Types ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Price Range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, HeaderComponent_li_20_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "app-search", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function HeaderComponent_Template_app_search_selectionChange_22_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, HeaderComponent_a_24_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HeaderComponent_a_25_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, HeaderComponent_a_27_Template, 2, 0, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, HeaderComponent_a_28_Template, 2, 0, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, HeaderComponent_ul_29_Template, 7, 0, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.propertyTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.priceRanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "Search")("onlyInputSearch", "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive], styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-height: 50px;\r\n  position: relative;\r\n  top: -5px;\r\n}\r\n.header-menu[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 75px;\r\n  width: 100%;\r\n}\r\n.bg-menu[_ngcontent-%COMP%] {\r\n  background: #1f2937 !important;\r\n}\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n  display: none !important;\r\n}\r\n.logo-text[_ngcontent-%COMP%] {\r\n  font-family: \"ROBOTO\";\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  position: relative;\r\n  background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);\r\n}\r\n.navbar-expand-lg[_ngcontent-%COMP%] {\r\n  padding: 4px 0px;\r\n}\r\nli.nav-item[_ngcontent-%COMP%] {\r\n  line-height: 34px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDREQUE0RDtBQUM5RDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNXB4O1xyXG59XHJcbi5oZWFkZXItbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmctbWVudSB7XHJcbiAgYmFja2dyb3VuZDogIzFmMjkzNyAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJPQk9UT1wiO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZjNDY2YiAwJSwgIzNmNWVmYiAxMDAlKTtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtbGcge1xyXG4gIHBhZGRpbmc6IDRweCAwcHg7XHJcbn1cclxubGkubmF2LWl0ZW0ge1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9964:
/*!********************************************************************!*\
  !*** ./src/app/helpers/page-not-found/page-not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7815:
/*!**********************************************************!*\
  !*** ./src/app/helpers/validations/custom-validators.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidators": () => (/* binding */ CustomValidators)
/* harmony export */ });
class CustomValidators {
    static numberValidation(control) {
        if (isNaN(control.value)) {
            return { 'invalidNumber': true };
        }
        return null;
    }
    static stringLengthValidation(control) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value.length > 10) {
                    resolve({ 'maximumLengthReached': true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    }
}


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/search/search.component */ 3437);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties/properties.component */ 6889);





class HomeComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    loadProperties() {
        this.router.navigate(['/properties']);
    }
    onSelectionChange(evt) {
        console.log(evt);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 2, consts: [[1, "homepage-content"], [1, "homepage-banner"], [1, "container"], [1, "wpb_wrapper"], ["data-wow-delay", "100ms", "data-wow-offset", "70", 1, "section-title", "wow", "fadeInUp"], [1, "search-bar-inhome"], ["ngModel", "selectedOption", "name", "selectedOption", "ngDefaultControl", "", 3, "placeholder", "onlyInputSearch", "selectionChange"], [1, "properties_list", "mb-5"], [1, "mt-3", "mb-5", "border-radius-none"], [1, "row"], [1, "col-md-8"], [1, "text-2xl", "font-bold", "text-foreground", "sm:text-3xl"], [1, "mt-1", "text-sm", "text-muted-foreground"], [1, "col-md-4", "text-md-end", "mt-3", "mt-md-0"], ["href", "/search", 1, "btn", "btn-sm", "btn-danger"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-right", "h-4", "w-4"], ["d", "M5 12h14"], ["d", "m12 5 7 7-7 7"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Offering the whole range of properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "What are you looking for? We have it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function HomeComponent_Template_app_search_selectionChange_10_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Featured Listings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Hand-picked properties for you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "View all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "app-properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", "Search")("onlyInputSearch", "no");
    } }, directives: [_shared_search_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _properties_properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent], styles: ["[_ngcontent-%COMP%]:root {\r\n  --ecoyap-primary: #008080; \r\n  --ecoyap-accent: #28a745; \r\n}\r\n\r\n\r\n\r\n.text-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%] {\r\n  --bs-primary: #008080;\r\n}\r\n\r\n\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #fff !important;\r\n}\r\n\r\n\r\n\r\n.hero-bg-image[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.nav-tabs-style[_ngcontent-%COMP%]   .btn-tab[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border-bottom: 2px solid transparent;\r\n  color: #333;\r\n  padding: 0.5rem 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-tabs-style[_ngcontent-%COMP%]   .btn-tab.active[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #008080;\r\n}\r\n\r\n@keyframes fadeLoop {\r\n  0% {\r\n    \r\n    transform: translateY(-5px);\r\n  }\r\n  50% {\r\n    \r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    \r\n    transform: translateY(-5px);\r\n  }\r\n}\r\n\r\n.homepage-banner[_ngcontent-%COMP%] {\r\n  background-image: url('homepage_banner.png');\r\n  background-position: center;\r\n  background-size: cover;\r\n  padding: 0 20px 20px !important;\r\n  position: relative;\r\n\r\n  min-height: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  z-index: 0;\r\n}\r\n\r\n.homepage-banner[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5); \r\n  z-index: 0;\r\n}\r\n\r\n.search-bar-inhome[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 900px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100vh;\r\n  min-height: 650px;\r\n  background:\r\n    linear-gradient(to right, rgba(26, 32, 44, 0.92), rgba(45, 55, 72, 0.85)),\r\n    url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"><rect fill=\"%231a202c\" width=\"1200\" height=\"800\"/></svg>');\r\n  background-size: cover;\r\n  background-position: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content-wrapper[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  padding: 0 20px;\r\n}\r\n\r\n.hero-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n  font-size: clamp(3rem, 6vw, 5.5rem);\r\n  font-weight: 400;\r\n  color: white;\r\n  margin-bottom: 20px;\r\n  letter-spacing: -0.03em;\r\n  line-height: 1.1;\r\n}\r\n\r\n.hero-subtitle[_ngcontent-%COMP%] {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-size: clamp(1rem, 2vw, 1.25rem);\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-weight: 300;\r\n  letter-spacing: 0.05em;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%] {\r\n  background: white;\r\n  border-radius: 16px;\r\n  overflow: hidden;\r\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.tabs-section[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);\r\n  padding: 0;\r\n  display: flex;\r\n  overflow-x: auto;\r\n  scrollbar-width: none;\r\n}\r\n\r\n.tabs-section[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.tab-item[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 140px;\r\n  padding: 24px 20px;\r\n  background: transparent;\r\n  border: none;\r\n  color: rgba(255, 255, 255, 0.6);\r\n  font-family: \"Inter\", sans-serif;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  border-bottom: 3px solid transparent;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n.tab-item[_ngcontent-%COMP%]:hover {\r\n  color: rgba(255, 255, 255, 0.9);\r\n  background: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.tab-item.active[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border-bottom-color: #f59e0b;\r\n}\r\n\r\n.search-area[_ngcontent-%COMP%] {\r\n  padding: 48px 40px;\r\n  background: white;\r\n}\r\n\r\n.search-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1.5fr 1.5fr auto;\r\n  grid-gap: 20px;\r\n  gap: 20px;\r\n  align-items: end;\r\n}\r\n\r\n.field-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.field-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 18px;\r\n  bottom: 18px;\r\n  width: 22px;\r\n  height: 22px;\r\n  color: #64748b;\r\n  pointer-events: none;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 18px 18px 18px 52px;\r\n  border: none;\r\n  border-bottom: 2px solid #e2e8f0;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-size: 1rem;\r\n  color: #1e293b;\r\n  background: #f8fafc;\r\n  transition: all 0.3s ease;\r\n  outline: none;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%]:focus {\r\n  background: white;\r\n  border-bottom-color: #0f172a;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%]::placeholder {\r\n  color: #94a3b8;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%] {\r\n  padding: 18px 42px;\r\n  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);\r\n  color: white;\r\n  border: none;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.3);\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.4);\r\n}\r\n\r\n.advanced-options[_ngcontent-%COMP%] {\r\n  margin-top: 32px;\r\n  padding-top: 32px;\r\n  border-top: 1px solid #e2e8f0;\r\n}\r\n\r\n.options-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.options-title[_ngcontent-%COMP%] {\r\n  font-family: \"Inter\", sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  color: #475569;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n.filter-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  grid-gap: 16px;\r\n  gap: 16px;\r\n}\r\n\r\n.filter-option[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-gap: 10px;\r\n  gap: 10px;\r\n  padding: 14px 20px;\r\n  background: #f8fafc;\r\n  border: 2px solid transparent;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-size: 0.95rem;\r\n  color: #475569;\r\n}\r\n\r\n.filter-option[_ngcontent-%COMP%]:hover {\r\n  background: white;\r\n  border-color: #cbd5e1;\r\n}\r\n\r\n.filter-option.selected[_ngcontent-%COMP%] {\r\n  background: #0f172a;\r\n  color: white;\r\n  border-color: #0f172a;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 2px solid #cbd5e1;\r\n  border-radius: 4px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.filter-option.selected[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  background: #f59e0b;\r\n  border-color: #f59e0b;\r\n}\r\n\r\n.checkmark[_ngcontent-%COMP%] {\r\n  width: 12px;\r\n  height: 12px;\r\n  color: white;\r\n  display: none;\r\n}\r\n\r\n.filter-option.selected[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .search-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .search-btn[_ngcontent-%COMP%] {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .search-area[_ngcontent-%COMP%] {\r\n    padding: 32px 24px;\r\n  }\r\n\r\n  .search-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .search-btn[_ngcontent-%COMP%] {\r\n    grid-column: span 1;\r\n  }\r\n\r\n  .tabs-section[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .tab-item[_ngcontent-%COMP%] {\r\n    min-width: 120px;\r\n    padding: 20px 16px;\r\n    font-size: 0.85rem;\r\n  }\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 25px;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n  line-height: 40px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  overflow: hidden;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  line-height: 18px;\r\n  text-transform: none;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]:not(.rtl)   .tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-top: 10px;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 700;\r\n  background-color: #14181c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7O0FBRXpDO0VBQ0UseUJBQXlCLEVBQUUsb0JBQW9CO0VBQy9DLHdCQUF3QixFQUFFLGlCQUFpQjtBQUM3Qzs7QUFFQSxrQ0FBa0M7O0FBQ2xDOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQSxtQkFBbUI7O0FBQ25COztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLDRDQUFnRTtFQUNoRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixrQkFBa0I7O0VBRWxCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0MsRUFBRSw2QkFBNkI7RUFDbkUsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCOztxSkFFbUo7RUFDbkosc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLGNBQVM7RUFBVCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkRBQTZEO0VBQzdELFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsY0FBUztFQUFULFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBUztFQUFULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBDU1MgZm9yIEVDT1lBUCBCcmFuZCBJZGVudGl0eSAqL1xyXG5cclxuOnJvb3Qge1xyXG4gIC0tZWNveWFwLXByaW1hcnk6ICMwMDgwODA7IC8qIFRlYWwvRGFyayBHcmVlbiAqL1xyXG4gIC0tZWNveWFwLWFjY2VudDogIzI4YTc0NTsgLyogQWN0aW9uIEdyZWVuICovXHJcbn1cclxuXHJcbi8qIFByaW1hcnkgQnJhbmQgQ29sb3IgT3ZlcnJpZGVzICovXHJcbi50ZXh0LXByaW1hcnksXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgLS1icy1wcmltYXJ5OiAjMDA4MDgwO1xyXG59XHJcblxyXG4vKiBBY2NlbnQvQWN0aW9uIENvbG9yIE92ZXJyaWRlcyAqL1xyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4vKiBIZWFkZXIgU3R5bGluZyAqL1xyXG4ubmF2YmFyLWJyYW5kLFxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEhlcm8gU2VjdGlvbiBTdHlsaW5nICovXHJcbi5oZXJvLWJnLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubmF2LXRhYnMtc3R5bGUgLmJ0bi10YWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm5hdi10YWJzLXN0eWxlIC5idG4tdGFiLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwMDgwODA7XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlTG9vcCB7XHJcbiAgMCUge1xyXG4gICAgLyogb3BhY2l0eTogMC4xOyAgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC8qIG9wYWNpdHk6IDE7ICAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC8qIG9wYWNpdHk6IDAuMTsgICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaG9tZXBhZ2UtYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVwYWdlX2Jhbm5lci5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4IDIwcHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5ob21lcGFnZS1iYW5uZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogU2VtaS10cmFuc3BhcmVudCBvdmVybGF5ICovXHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uc2VhcmNoLWJhci1pbmhvbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5oZXJvLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjYsIDMyLCA0NCwgMC45MiksIHJnYmEoNDUsIDU1LCA3MiwgMC44NSkpLFxyXG4gICAgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMjAwIDgwMFwiPjxyZWN0IGZpbGw9XCIlMjMxYTIwMmNcIiB3aWR0aD1cIjEyMDBcIiBoZWlnaHQ9XCI4MDBcIi8+PC9zdmc+Jyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmhlcm8tdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIHtcclxuICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDZ2dywgNS41cmVtKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuXHJcbi5oZXJvLXN1YnRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjI1cmVtKTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4udGFicy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGYxNzJhIDAlLCAjMWUyOTNiIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxufVxyXG5cclxuLnRhYnMtc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWItaXRlbSB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDI0cHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLnRhYi1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbn1cclxuXHJcbi50YWItaXRlbS5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y1OWUwYjtcclxufVxyXG5cclxuLnNlYXJjaC1hcmVhIHtcclxuICBwYWRkaW5nOiA0OHB4IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxLjVmciAxLjVmciBhdXRvO1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4uZmllbGQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmllbGQtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE4cHg7XHJcbiAgYm90dG9tOiAxOHB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMThweCAxOHB4IDE4cHggNTJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwZjE3MmE7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzk0YTNiODtcclxufVxyXG5cclxuLnNlYXJjaC1idG4ge1xyXG4gIHBhZGRpbmc6IDE4cHggNDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGYxNzJhIDAlLCAjMzM0MTU1IDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4zKTtcclxufVxyXG5cclxuLnNlYXJjaC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZTI5M2IgMCUsICM0NzU1NjkgMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjQpO1xyXG59XHJcblxyXG4uYWR2YW5jZWQtb3B0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMzJweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDtcclxufVxyXG5cclxuLm9wdGlvbnMtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5vcHRpb25zLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0NzU1Njk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi5maWx0ZXItZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItb3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxufVxyXG5cclxuLmZpbHRlci1vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxufVxyXG5cclxuLmZpbHRlci1vcHRpb24uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzBmMTcyYTtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5maWx0ZXItb3B0aW9uLnNlbGVjdGVkIC5jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1OWUwYjtcclxuICBib3JkZXItY29sb3I6ICNmNTllMGI7XHJcbn1cclxuXHJcbi5jaGVja21hcmsge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbHRlci1vcHRpb24uc2VsZWN0ZWQgLmNoZWNrbWFyayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuc2VhcmNoLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1idG4ge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zZWFyY2gtYXJlYSB7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJ0biB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gIH1cclxuXHJcbiAgLnRhYnMtc2VjdGlvbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAudGFiLWl0ZW0ge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc2VjdGlvbi10aXRsZSBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLnNlY3Rpb24tdGl0bGUgc21hbGwgKyBzcGFuIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmJvZHk6bm90KC5ydGwpIC50YWJzIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxODFjO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3661:
/*!******************************************!*\
  !*** ./src/app/leads/leads.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsComponent": () => (/* binding */ LeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LeadsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeadsComponent.ɵfac = function LeadsComponent_Factory(t) { return new (t || LeadsComponent)(); };
LeadsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeadsComponent, selectors: [["app-leads"]], decls: 2, vars: 0, template: function LeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "leads works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 55, vars: 0, consts: [[1, "about-section", "py-5"], [1, "container"], [1, "text-center", "mb-5"], [1, "fw-bold"], [1, "lead", "text-muted"], [1, "row", "align-items-center", "mb-5"], [1, "col-md-12"], [1, "text-center", "fw-semibold", "mb-4"], [1, "mb-5"], [1, "row", "text-center"], [1, "col-md-4", "mb-3"], [1, "p-4", "border", "rounded", "h-100"], [1, "text-muted"], [1, "col-md-6", "mb-4"], [1, "p-4", "bg-light", "rounded", "h-100"], [1, "text-center", "mt-5"], [1, "fw-semibold"], [1, "text-muted", "w-75", "mx-auto"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About My Dream Yards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Founded in 2026, My Dream Yards is a next-generation real estate platform built to simplify property discovery across India. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Who We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " My Dream Yards connects buyers, sellers, landlords, and developers through a seamless digital ecosystem. We believe finding the right property should be transparent, efficient, and stress-free. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " From dream homes to smart investments, our platform provides structured listings and meaningful insights that help users make confident decisions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "What We Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Residential Sales & Rentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Discover verified homes for buying and renting with ease. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Commercial & Investment Spaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Explore offices, plots, and commercial developments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Developer & Broker Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Digital marketing and lead management tools to grow faster. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " To redefine how India experiences property through transparency, innovation, and technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " To become the trusted first choice for discovering, buying, selling, and renting properties \u2014 powered by data and customer-first design. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Our Commitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " At My Dream Yards, we are building more than a property listing platform \u2014 we are building a trusted ecosystem where technology meets integrity, delivering long-term value for customers and partners. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-section[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  letter-spacing: -0.5px;\r\n  color: #1e293b;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  color: #0f172a;\r\n  margin-bottom: 1rem;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  color: #0f172a;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  line-height: 1.7;\r\n  color: #475569;\r\n}\r\n.lead[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n  color: #64748b;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 12px;\r\n  transition:\r\n    transform 0.4s ease,\r\n    box-shadow 0.4s ease;\r\n}\r\nimg[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.03);\r\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n  border: 1px solid #e2e8f0 !important;\r\n  transition: all 0.3s ease;\r\n  background: #ffffff;\r\n}\r\n.border[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-6px);\r\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.06);\r\n  border-color: #2563eb !important;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  margin-bottom: 0.75rem;\r\n  color: #1e293b;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.bg-light[_ngcontent-%COMP%] {\r\n  background: #f8fafc !important;\r\n  border: 1px solid #e2e8f0;\r\n  transition: all 0.3s ease;\r\n}\r\n.bg-light[_ngcontent-%COMP%]:hover {\r\n  background: #ffffff !important;\r\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.05);\r\n  border-color: #2563eb;\r\n}\r\n\r\n.mx-auto[_ngcontent-%COMP%] {\r\n  max-width: 750px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .lead[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzt3QkFFc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDJDQUEyQztFQUMzQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QiwyQ0FBMkM7RUFDM0MscUJBQXFCO0FBQ3ZCO0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgY29sb3I6ICM0NzU1Njk7XHJcbn1cclxuXHJcbi5sZWFkIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICB0cmFuc2Zvcm0gMC40cyBlYXNlLFxyXG4gICAgYm94LXNoYWRvdyAwLjRzIGVhc2U7XHJcbn1cclxuaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi8qIFdoYXQgV2UgRG8gQ2FyZHMgKi9cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uYm9yZGVyOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItY29sb3I6ICMyNTYzZWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICBjb2xvcjogIzFlMjkzYjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4vKiBWaXNpb24gJiBNaXNzaW9uICovXHJcbi5iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uYmctbGlnaHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDEycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcclxufVxyXG5cclxuLyogQ29tbWl0bWVudCBTZWN0aW9uICovXHJcbi5teC1hdXRvIHtcclxuICBtYXgtd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5sZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3552:
/*!******************************************************!*\
  !*** ./src/app/properties/models/unit-type.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitType": () => (/* binding */ UnitType)
/* harmony export */ });
class UnitType {
    constructor(id, short_name, name) {
        this.id = id;
        this.short_name = short_name;
        this.name = name;
    }
}


/***/ }),

/***/ 6889:
/*!****************************************************!*\
  !*** ./src/app/properties/properties.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/property.service */ 5998);
/* harmony import */ var _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-list/property-list.component */ 6396);



class PropertiesComponent {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    ngOnInit() {
        this.propertyService.propertySelected.subscribe((property) => {
            this.selectedProperty = property;
        });
    }
}
PropertiesComponent.ɵfac = function PropertiesComponent_Factory(t) { return new (t || PropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
PropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PropertiesComponent, selectors: [["app-properties"]], decls: 3, vars: 0, consts: [[1, "row", "row-cols-2", "row-cols-md-3"], [1, "col-md-12"]], template: function PropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-property-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_1__.PropertyListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8343:
/*!******************************************************************************!*\
  !*** ./src/app/properties/property-details/amenities/amenities.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmenitiesComponent": () => (/* binding */ AmenitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function AmenitiesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amenity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](amenity_r1.name);
} }
class AmenitiesComponent {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    ngOnInit() {
        this.propertyService.selectedProperty$.subscribe((prop) => {
            this.amenities = prop === null || prop === void 0 ? void 0 : prop.amenities;
        });
    }
}
AmenitiesComponent.ɵfac = function AmenitiesComponent_Factory(t) { return new (t || AmenitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
AmenitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AmenitiesComponent, selectors: [["app-amenities"]], decls: 4, vars: 1, consts: [[1, "row", "mt-4"], [1, "col-6"], [1, "row"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "checked", "", "name", "amenities", "value", "amenity.id", 1, "form-check-input"], [1, "form-check-label"]], template: function AmenitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AmenitiesComponent_div_3_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.amenities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".form-check-input[_ngcontent-%COMP%]:disabled {\r\n    opacity: 1;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]:disabled ~ .form-check-label[_ngcontent-%COMP%], .form-check-input[disabled][_ngcontent-%COMP%] ~ .form-check-label[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtZW5pdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImFtZW5pdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWR+LmZvcm0tY2hlY2stbGFiZWwsIC5mb3JtLWNoZWNrLWlucHV0W2Rpc2FibGVkXX4uZm9ybS1jaGVjay1sYWJlbHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4370:
/*!**************************************************************************************************!*\
  !*** ./src/app/properties/property-details/floor-plans-pricing/floor-plans-pricing.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloorPlansPricingComponent": () => (/* binding */ FloorPlansPricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function FloorPlansPricingComponent_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FloorPlansPricingComponent_div_0_li_2_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.selectTab(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeIndex === i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unit_r3.unitName, " BHK ");
} }
function FloorPlansPricingComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Space:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", unit_r7.unitName, " BHK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", unit_r7.unitPrice, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unit_r7.unitSpace, " sq.ft ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", unit_r7.unitFloorPlanUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FloorPlansPricingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FloorPlansPricingComponent_div_0_li_2_Template, 3, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FloorPlansPricingComponent_div_0_div_4_Template, 15, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.units[ctx_r0.activeIndex]);
} }
class FloorPlansPricingComponent {
    constructor(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
        this.isGatedCommunity = false; // single and project level differentiation
        this.activeIndex = 0;
        this.units = [];
    }
    ngOnInit() {
        var _a;
        (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.params.subscribe((params) => {
            this.propertyId = +params['id'];
            this.propertyService
                .getPropertyById(this.propertyId)
                .subscribe((property) => {
                this.property = property;
                this.units = (property === null || property === void 0 ? void 0 : property.units) || [];
                if (this.property.isMultipleProperties)
                    this.isGatedCommunity = true;
            });
        });
    }
    selectTab(index) {
        this.activeIndex = index;
    }
}
FloorPlansPricingComponent.ɵfac = function FloorPlansPricingComponent_Factory(t) { return new (t || FloorPlansPricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
FloorPlansPricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FloorPlansPricingComponent, selectors: [["app-floor-plans-pricing"]], decls: 1, vars: 1, consts: [["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "card", "border-top-0"], ["class", "card-body", 4, "ngIf"], [1, "nav-item"], ["type", "button", 1, "nav-link", 3, "click"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-3"], [1, "mb-2"], [1, "col-md-6", "text-center"], ["alt", "Floor Plan", 1, "img-fluid", "rounded", "shadow-sm", 2, "max-height", "400px", 3, "src"]], template: function FloorPlansPricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FloorPlansPricingComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.units == null ? null : ctx.units.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    border: solid 1px #bebebe;\r\n    border-radius: 0%;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: #265172   ;\r\n    color: #fff;\r\n    font-weight: normal;\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:not(.active) {\r\n    background-color: #f4f4f4 ;\r\n  }\r\n.tab-pane[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    border-bottom: solid 2px #265172   ;\r\n    background: #f4f4f4 !important;\r\n    font-weight: normal;\r\n  }\r\n.tab-pane[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]  {\r\n    color: #000000 ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb29yLXBsYW5zLXByaWNpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJmbG9vci1wbGFucy1wcmljaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JlYmViZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjUxNzIgICA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAubmF2LXRhYnMgLm5hdi1saW5rOm5vdCguYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0IDtcclxuICB9XHJcblxyXG4gIC50YWItcGFuZSAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzI2NTE3MiAgIDtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItcGFuZSAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSAge1xyXG4gICAgY29sb3I6ICMwMDAwMDAgO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 8226:
/*!**************************************************************************!*\
  !*** ./src/app/properties/property-details/gallery/gallery.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function GalleryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.propertyPhotos[ctx_r0.selectedIndex].src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r0.propertyPhotos[ctx_r0.selectedIndex].title)("alt", ctx_r0.propertyPhotos[ctx_r0.selectedIndex].title);
} }
function GalleryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_div_7_Template_img_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.selectImage(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r3 === ctx_r1.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", img_r2.title)("alt", img_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r2.title);
} }
class GalleryComponent {
    constructor(propertyService) {
        this.propertyService = propertyService;
        this.property = null;
        this.images = [
            {
                src: 'http://localhost:3000/images/1683027062767-231533064-small-bedroom-design.jpg',
                alt: 'Image 1',
            },
            {
                src: 'http://localhost:3000/images/1685073617485-5916581-copper-wash-basin-cabinet-design-for-dining-room.jpg',
                alt: 'Image 2',
            },
        ];
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.propertyService.selectedProperty$.subscribe((prop) => {
            this.propertyPhotos = prop === null || prop === void 0 ? void 0 : prop.photos;
        });
    }
    selectImage(index) {
        this.selectedIndex = index;
    }
    nextImage() {
        this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }
    prevImage() {
        this.selectedIndex =
            (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 8, vars: 2, consts: [[1, "slider-container"], [1, "btn", "btn-light", "prev", 3, "click"], ["class", "main-image", 4, "ngIf"], [1, "btn", "btn-light", "next", 3, "click"], [1, "thumbnails", "mt-3"], [4, "ngFor", "ngForOf"], [1, "main-image"], [3, "src", "title", "alt"], ["max-height", "300px", 3, "src", "title", "alt", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_1_listener() { return ctx.prevImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u276E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GalleryComponent_div_3_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_4_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u276F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GalleryComponent_div_7_Template, 4, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.propertyPhotos == null ? null : ctx.propertyPhotos.length) > ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.propertyPhotos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".slider-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n.main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-height: 400px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  z-index: 2;\r\n  background: rgba(255, 255, 255, 0.7);\r\n  border-radius: 50%;\r\n  font-size: 1.5rem;\r\n}\r\n.prev[_ngcontent-%COMP%] {\r\n  left: 10px;\r\n}\r\n.next[_ngcontent-%COMP%] {\r\n  right: 10px;\r\n}\r\n.thumbnails[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  grid-gap: 10px;\r\n  gap: 10px;\r\n}\r\n.thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 50px;\r\n  object-fit: cover;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  opacity: 0.6;\r\n  border: 2px solid transparent;\r\n}\r\n.thumbnails[_ngcontent-%COMP%]   img&.active[_ngcontent-%COMP%] {\r\n  border-color: #007bff;\r\n  opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBUztFQUFULFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYWluLWltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucHJldiB7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLnRodW1ibmFpbHMgaW1nIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRodW1ibmFpbHMgaW1nJi5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8670:
/*!**********************************************************************************!*\
  !*** ./src/app/properties/property-details/information/information.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationComponent": () => (/* binding */ InformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function InformationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Project Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.property == null ? null : ctx_r0.property.projectAreaValue, " ", ctx_r0.property == null ? null : ctx_r0.property.projectAreaUnit, " ");
} }
function InformationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Builtup Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.property == null ? null : ctx_r1.property.builtupArea);
} }
function InformationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Carpet Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.property == null ? null : ctx_r2.property.carpetArea, " sq.ft");
} }
class InformationComponent {
    constructor(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
    }
    ngOnInit() {
        var _a;
        (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.params.subscribe((params) => {
            this.propertyId = +params['id'];
            this.propertyService.getPropertyById(this.propertyId).subscribe(property => {
                this.property = property;
            });
        });
    }
    sayInterested() {
        this.propertyService.sayInterestedEvent.next(true);
        setTimeout(() => {
            this.propertyService.sayInterestedEvent.next(false);
        }, 1000);
        setTimeout(() => {
            this.propertyService.sayInterestedEvent.next(true);
        }, 2000);
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
InformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], decls: 35, vars: 9, consts: [[1, "mt-2"], [1, "row"], [1, "col-5", "text-center"], [2, "max-width", "100%", "max-height", "400px", 3, "src"], [1, "col"], [1, "col-6", "mb-3"], ["class", "ms-2 me-auto", 4, "ngIf"], ["class", "col-6 mb-3", 4, "ngIf"], [1, "ms-2", "me-auto"], [1, "fw-bold"], [1, "about-property", "mt-3"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InformationComponent_div_7_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InformationComponent_div_8_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InformationComponent_div_9_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Configurations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Property Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Total Floors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Facing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "About Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.property == null ? null : ctx.property.defaultPicUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.property == null ? null : ctx.property.isMultipleProperties);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.property == null ? null : ctx.property.isMultipleProperties));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.property == null ? null : ctx.property.isMultipleProperties));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.property == null ? null : ctx.property.unitType, " BHK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.property == null ? null : ctx.property.propertyAge, " years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.property == null ? null : ctx.property.totalFloors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.property == null ? null : ctx.property.facing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.property == null ? null : ctx.property.description, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8963:
/*!***************************************************************************!*\
  !*** ./src/app/properties/property-details/property-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyDetailsComponent": () => (/* binding */ PropertyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_modals_interested_modal_interested_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/modals/interested-modal/interested-modal.component */ 5882);





const _c0 = ["myModal"];
function PropertyDetailsComponent_h5_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "I am Interested in this Property!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PropertyDetailsComponent {
    constructor(router, propertyService) {
        this.router = router;
        this.propertyService = propertyService;
        this.isInterested = false;
    }
    ngOnInit() {
        this.propertyService.sayInterestedEvent.subscribe((isInterested) => {
            this.isInterested = isInterested;
        });
        this.router.params.subscribe((params) => {
            this.propertyId = params['id'];
            this.propertyService
                .getPropertyById(this.propertyId)
                .subscribe((property) => {
                this.property = property;
                this.propertyService.setProperty(property);
                console.log(this.property);
            });
        });
    }
    onInterestedButtonClick() {
        this.modal.openModal();
    }
    ngOnDestroy() { }
}
PropertyDetailsComponent.ɵfac = function PropertyDetailsComponent_Factory(t) { return new (t || PropertyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
PropertyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PropertyDetailsComponent, selectors: [["app-property-details"]], viewQuery: function PropertyDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { property: "property" }, decls: 50, vars: 8, consts: [[1, "container", "mt-3"], [1, "breadcrums"], [1, "text-muted"], [1, "link-secondary", 3, "routerLink"], [1, "row"], [1, "col-xl-12"], [1, "card", "card-body", "border", "property_details_wrapper", "p-4"], [1, "col"], [1, "mb-1"], [1, "col-6"], [1, "card-title", "mb-0"], [1, "col", "text-end"], [1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "mt-2", "shadow-sm", "mb-1", 2, "background-color", "#e3f2fd"], [1, "container-fluid"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", "aria-current", "page", "href", "#", "routerLink", "information", 1, "nav-link"], ["href", "#", "routerLink", "floor-plans-pricing", "routerLinkActive", "active", 1, "nav-link"], ["href", "#", "routerLink", "amenities", "routerLinkActive", "active", 1, "nav-link"], ["href", "#", "routerLink", "gallery", "routerLinkActive", "active", 1, "nav-link"], [3, "propertyId"], ["myModal", ""]], template: function PropertyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u203A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Price Starts From");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "6,533 per sq.ft.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertyDetailsComponent_Template_button_click_28_listener() { return ctx.onInterestedButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Interested ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, PropertyDetailsComponent_h5_30_Template, 2, 0, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Floor Plans & Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Amenities");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "app-interested-modal", 23, 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u203A ", ctx.property == null ? null : ctx.property.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property == null ? null : ctx.property.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.property == null ? null : ctx.property.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.property == null ? null : ctx.property.price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInterested);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("propertyId", ctx.propertyId);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_modals_interested_modal_interested_modal_component__WEBPACK_IMPORTED_MODULE_1__.InterestedModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0eS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5887:
/*!***********************************************************************************!*\
  !*** ./src/app/properties/property-list/property-item/property-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyItemComponent": () => (/* binding */ PropertyItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class PropertyItemComponent {
    // @Output() propertySelectedEvent = new EventEmitter<Property>();
    constructor(propertyService, router, route) {
        this.propertyService = propertyService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onSelectProperty(id) {
        // this.propertySelectedEvent.emit(this.item);
        // this.propertyService.propertySelected.emit(this.item);
        this.router.navigate(['/property', id]);
    }
}
PropertyItemComponent.ɵfac = function PropertyItemComponent_Factory(t) { return new (t || PropertyItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
PropertyItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PropertyItemComponent, selectors: [["app-property-item"]], inputs: { item: ["property", "item"] }, decls: 17, vars: 5, consts: [[3, "click"], [1, "card", "card-property", "border-0", "rounded-xl", "overflow-hidden", "shadow"], ["alt", "Luxury Villa", 1, "card-img-top", 3, "src"], [1, "card-body", "p-4"], [1, "card-title", "text-lg", "font-semibold", "text-gray-800"], [1, "card-captions"], [1, "text-sm", "text-gray-500", "mb-2"], [1, "text-success", "fw-bold"], [1, "d-flex", "justify-content-between", "text-gray-400", "text-md"], [1, "fas", "fa-bed", "me-1"]], template: function PropertyItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PropertyItemComponent_Template_a_click_0_listener() { return ctx.onSelectProperty(ctx.item.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "For Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.item.defaultPicUrl || "https://teja12.kuikr.com/is/a/c/570x430/gallery_images/original/cf5e4676ef4b9ca.gif", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item.price, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item.unitType || 0, " Bedrooms");
    } }, styles: [".property-image-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 156px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.property-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  transition: all 0.35s ease-in;\r\n}\r\n.card-property[_ngcontent-%COMP%] {\r\n  border: none; \r\n  border-radius: 0; \r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); \r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  overflow: hidden; \r\n}\r\n.card-property[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-5px); \r\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); \r\n}\r\n.card-img-top[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  height: 200px; \r\n  object-fit: cover; \r\n}\r\n.card-title[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n.card-captions[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n.card-text-price[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #28a745; \r\n}\r\n.card-text-location[_ngcontent-%COMP%] {\r\n  color: #6c757d;\r\n  font-weight: 500;\r\n  border-top: 1px solid #eee;\r\n  padding-top: 0.5rem;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n\r\n.row-eq-height[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n}\r\n.row-eq-height[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  height: 100%; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFFWixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZLEVBQUUsMEJBQTBCO0VBQ3hDLGdCQUFnQixFQUFFLG9CQUFvQjtFQUN0QywwQ0FBMEMsRUFBRSwwQkFBMEI7RUFDdEUscURBQXFEO0VBQ3JELGdCQUFnQixFQUFFLDZDQUE2QztBQUNqRTtBQUVBO0VBQ0UsMkJBQTJCLEVBQUUsZ0NBQWdDO0VBQzdELDBDQUEwQyxFQUFFLDZCQUE2QjtBQUMzRTtBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELFdBQVc7RUFDWCxhQUFhLEVBQUUsOENBQThDO0VBQzdELGlCQUFpQixFQUFFLHFEQUFxRDtBQUMxRTtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUUsb0JBQW9CO0FBQ3RDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUEsOENBQThDO0FBQzlDLGlHQUFpRztBQUNqRztFQUNFLGtHQUFrRztFQUNsRyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVksRUFBRSx3RUFBd0U7QUFDeEYiLCJmaWxlIjoicHJvcGVydHktaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvcGVydHktaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluO1xyXG59XHJcbi5jYXJkLXByb3BlcnR5IHtcclxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTsgLyogU29mdCBzaGFkb3cgZm9yIGRlcHRoICovXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyBpbWFnZSBjb3JuZXJzIG1hdGNoIGNhcmQgY29ybmVycyAqL1xyXG59XHJcblxyXG4uY2FyZC1wcm9wZXJ0eTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyAvKiBMaWZ0IGNhcmQgc2xpZ2h0bHkgb24gaG92ZXIgKi9cclxuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7IC8qIFN0cm9uZ2VyIHNoYWRvdyBvbiBob3ZlciAqL1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAvKiBFbnN1cmVzIGltYWdlIGZpbGxzIHRoZSB3aWR0aCBhbmQgbWFpbnRhaW5zIGFzcGVjdCByYXRpbyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgaW1hZ2UgdG8ga2VlcCBpdCB1bmlmb3JtICovXHJcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgaW1hZ2UgY292ZXJzIHRoZSBhcmVhIHdpdGhvdXQgZGlzdG9ydGlvbiAqL1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNhcmQtY2FwdGlvbnMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzI4YTc0NTsgLyogR3JlZW4gZm9yIHByaWNlICovXHJcbn1cclxuXHJcbi5jYXJkLXRleHQtbG9jYXRpb24ge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi8qIFRoZSBtYWdpYyBmb3IgZXF1YWwgaGVpZ2h0IGluIEJvb3RzdHJhcCA1ICovXHJcbi8qIGQtZmxleCBvbiB0aGUgY29sLSogY29udGFpbmVyIGFuZCBoLTEwMCBvbiB0aGUgY2FyZCBtYWtlcyB0aGUgY2FyZCBmaWxsIHRoZSBjb2x1bW4ncyBoZWlnaHQuICovXHJcbi5yb3ctZXEtaGVpZ2h0IC5jb2wtbWQtNCB7XHJcbiAgLyogVGhpcyBpcyBvcHRpb25hbCwgYnV0IGhlbHBzIGVuc3VyZSBpbnRlcm5hbCBhbGlnbm1lbnQgaWYgeW91IGhhZCBvdGhlciBlbGVtZW50cyBpbiB0aGUgY29sdW1uICovXHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJvdy1lcS1oZWlnaHQgLmNhcmQge1xyXG4gIGhlaWdodDogMTAwJTsgLyogVGhlIGtleTogZm9yY2VzIHRoZSBjYXJkIHRvIGZpbGwgdGhlIGhlaWdodCBvZiB0aGUgZC1mbGV4IGNvbnRhaW5lciAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6396:
/*!*********************************************************************!*\
  !*** ./src/app/properties/property-list/property-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyListComponent": () => (/* binding */ PropertyListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-item/property-item.component */ 5887);




function PropertyListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PropertyListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No proporties found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PropertyListComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-property-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("property", item_r4);
} }
function PropertyListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PropertyListComponent_div_2_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.properties);
} }
class PropertyListComponent {
    constructor(propertyService) {
        this.propertyService = propertyService;
        // @Output() propertyWasSelectedEvent = new EventEmitter<Property>()
        this.properties = [];
        this.isLoading = true;
        this.searchSubscription = this.propertyService.searchQuery$.subscribe((query) => {
            this.getProperties({ filter: { searchQuery: query } });
        });
    }
    ngOnInit() {
        this.getProperties();
    }
    getProperties(data) {
        this.isLoading = true;
        this.propertyService.getProperties(data).subscribe((result) => {
            this.properties = result || [];
            this.isLoading = false;
            console.log(result);
        });
    }
}
PropertyListComponent.ɵfac = function PropertyListComponent_Factory(t) { return new (t || PropertyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
PropertyListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PropertyListComponent, selectors: [["app-property-list"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "row row-cols-1 row-cols-md-4 g-4", 4, "ngIf"], [1, "row", "row-cols-1", "row-cols-md-4", "g-4"], ["class", "col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-3"], [3, "property"]], template: function PropertyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PropertyListComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PropertyListComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PropertyListComponent_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.properties.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.properties.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_1__.PropertyItemComponent], styles: [".loading-text[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #333;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2IiLCJmaWxlIjoicHJvcGVydHktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 120:
/*!******************************************************************!*\
  !*** ./src/app/search-properties/search-properties.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPropertiesComponent": () => (/* binding */ SearchPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _properties_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties/property-list/property-list.component */ 6396);






function SearchPropertiesComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", type_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", type_r7.name, " ");
} }
function SearchPropertiesComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const range_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", range_r8.label, " ");
} }
class SearchPropertiesComponent {
    constructor(router, route, propertyService) {
        this.router = router;
        this.route = route;
        this.propertyService = propertyService;
        this.totalProperties = 0;
        this.filters = {};
        this.propertyTypes = [];
        this.priceRanges = [];
    }
    onSelectionChange(evt) {
        console.log(evt);
    }
    ngOnInit() {
        this.getPropertyTypes();
        this.getPriceRanges();
        this.propertyService
            .getTotalCount()
            .subscribe((count) => (this.totalProperties = count));
        this.route.queryParams.subscribe((params) => {
            const propertyType = this.propertyTypes.find((item) => item.short_name == params['property-type']);
            this.searchCriteria = {
                location: params['search-query'] || null,
                propertyType: (propertyType === null || propertyType === void 0 ? void 0 : propertyType.id) || null,
                priceRange: params['price-range'] || null,
            };
            this.propertyService.searchQuery(this.searchCriteria);
        });
    }
    getPropertyTypes() {
        this.propertyTypes = this.propertyService.getPropertyTypes();
        this.propertyTypes.unshift({ id: 0, short_name: '', name: 'All' });
    }
    getPriceRanges() {
        this.priceRanges = this.propertyService.getPriceRanges();
        this.priceRanges.unshift({ id: 0, short_name: '', label: 'All' });
    }
    // onFilterChange(key: string, value: any) {
    //   this.filters[key] = value || null;
    //   this.searchCriteria = {
    //     location: value || null,
    //     propertyType: value || null,
    //     priceRange: value || null,
    //   };
    //   this.propertyService.searchQuery(this.searchCriteria);
    //   console.log(this.filters, 'this.filters+++++++');
    //   //  this.propertyService.searchQuery(searchCriteria);
    // }
    onFilterChange(key, value) {
        this.filters[key] = value || null;
        this.searchCriteria = Object.assign({}, this.filters);
        this.propertyService.searchQuery(this.searchCriteria);
    }
    applyFilters() {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: this.filters,
            queryParamsHandling: 'merge',
        });
    }
    resetFilters() {
        this.filters = {};
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
        });
    }
}
SearchPropertiesComponent.ɵfac = function SearchPropertiesComponent_Factory(t) { return new (t || SearchPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
SearchPropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchPropertiesComponent, selectors: [["app-search-properties"]], decls: 65, vars: 4, consts: [[1, "container", "mt-3"], [1, "breadcrums"], [1, "text-muted"], [1, "link-secondary", 3, "routerLink"], [1, "container", "mt-4"], [1, ""], [1, "row"], [1, "col-lg-3"], [1, "filter-card", "card", "shadow-sm", "filter-box", "sticky-top"], [1, "card-header", "bg-white", "fw-semibold"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], [1, "form-select", 3, "change"], ["propertyType", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Enter location", 1, "form-control", 3, "input"], ["location", ""], [1, "d-flex", "gap-2"], ["id", "price-range-select", 1, "form-select", 3, "change"], ["priceRange", ""], ["bhkSelect", ""], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-lg-9"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold"], [1, "form-select", "w-auto", 3, "change"], ["sort", ""], ["value", "low_to_high"], ["value", "high_to_low"], [3, "value"]], template: function SearchPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u203A Search Properties ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "aside", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Filter Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Property Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SearchPropertiesComponent_Template_select_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18); return ctx.onFilterChange("propertyType", _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SearchPropertiesComponent_option_19_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function SearchPropertiesComponent_Template_input_input_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24); return ctx.onFilterChange("location", _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Price Range (\u20B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "select", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SearchPropertiesComponent_Template_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30); return ctx.onFilterChange("priceRange", _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SearchPropertiesComponent_option_31_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Bedrooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 13, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SearchPropertiesComponent_Template_select_change_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return ctx.onFilterChange("bhk", _r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Any");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "1 BHK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "2 BHK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "3 BHK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "4+ BHK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchPropertiesComponent_Template_button_click_48_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Apply Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchPropertiesComponent_Template_button_click_50_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "select", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SearchPropertiesComponent_Template_select_change_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](57); return ctx.onFilterChange("sort", _r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Price Low to High");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Price High to Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "app-property-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.propertyTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.priceRanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Showing ", ctx.totalProperties, " Listings");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _properties_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_1__.PropertyListComponent], styles: [".filter-box[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  padding: 16px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);\r\n  top: 90px;\r\n}\r\n\r\n.listing-card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 14px;\r\n  overflow: hidden;\r\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.listing-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNlYXJjaC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHRvcDogOTBweDtcclxufVxyXG5cclxuLmxpc3RpbmctY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmxpc3RpbmctY2FyZCBpbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8930:
/*!*********************************************************************!*\
  !*** ./src/app/seller/create-property/create-property.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaUnit": () => (/* binding */ AreaUnit),
/* harmony export */   "CreatePropertyComponent": () => (/* binding */ CreatePropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_validations_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/validations/custom-validators */ 7815);
/* harmony import */ var _manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manage-units/manage-units.component */ 1437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/alert/alert.service */ 301);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal.service */ 7583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modals/gobal-modal/gobal-modal.component */ 869);












const _c0 = ["propertyPhotosInput"];
const _c1 = ["defaultPic"];
const _c2 = ["globalModal"];
function CreatePropertyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Post a Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Enter property details below");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter Project Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Project Name already exists! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "propertyType", i_r28, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", item_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r3.propertyCreationForm.value.propertyType === item_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "propertyType", i_r28, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r27.name);
} }
function CreatePropertyComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select Property Type! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_23_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreatePropertyComponent_div_23_tr_19_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const i_r31 = restoredCtx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r32.removeUnit(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](unit_r30.value.unitName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](unit_r30.value.unitSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", unit_r30.value.unitPrice, " Cr");
} }
function CreatePropertyComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Unit Inventory Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CreatePropertyComponent_div_23_tr_19_Template, 10, 3, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreatePropertyComponent_div_23_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r34.openManageUnitsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " + Add Unit Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.floorPlans.controls);
} }
function CreatePropertyComponent_div_24_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "unitType", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", item_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "unitType", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r37.name);
} }
function CreatePropertyComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Unit Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CreatePropertyComponent_div_24_div_7_Template, 4, 4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_0_0 = ctx_r6.propertyCreationForm.get("unitType")) == null ? null : tmp_0_0.valid) && ((tmp_0_0 = ctx_r6.propertyCreationForm.get("unitType")) == null ? null : tmp_0_0.touched) ? "was-validated" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.unitTypes);
} }
function CreatePropertyComponent_div_25_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", item_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r40, " Bathrooms ");
} }
function CreatePropertyComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Number of Bathrooms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Select No of Bathrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CreatePropertyComponent_div_25_option_9_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_0_0 = ctx_r7.propertyCreationForm.get("bathRooms")) == null ? null : tmp_0_0.valid) && ((tmp_0_0 = ctx_r7.propertyCreationForm.get("bathRooms")) == null ? null : tmp_0_0.touched) ? "was-validated" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.numberOfBathrooms);
} }
function CreatePropertyComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter Price! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter a valid Price! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_32_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", unit_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", unit_r44, " ");
} }
function CreatePropertyComponent_div_32_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Project area is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Project Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, CreatePropertyComponent_div_32_option_8_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CreatePropertyComponent_div_32_small_9_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r10.areaUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r10.propertyCreationForm.get("projectAreaValue")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r10.propertyCreationForm.get("projectAreaValue")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]));
} }
function CreatePropertyComponent_div_33_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter Builtup Area! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Builtup Area (Sq.ft)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CreatePropertyComponent_div_33_span_4_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_0_0 = ctx_r11.propertyCreationForm.get("propertyData.builtupArea")) == null ? null : tmp_0_0.valid) && ((tmp_0_0 = ctx_r11.propertyCreationForm.get("propertyData.builtupArea")) == null ? null : tmp_0_0.touched) ? "was-validated" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r11.propertyCreationForm.get("propertyData.builtupArea")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && ((tmp_1_0 = ctx_r11.propertyCreationForm.get("propertyData.builtupArea")) == null ? null : tmp_1_0.touched));
} }
function CreatePropertyComponent_div_34_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter Carpet Area! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Carpet Area (Sq.ft)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CreatePropertyComponent_div_34_span_4_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_0_0 = ctx_r12.propertyCreationForm.get("propertyData.carpetArea")) == null ? null : tmp_0_0.valid) && ((tmp_0_0 = ctx_r12.propertyCreationForm.get("propertyData.carpetArea")) == null ? null : tmp_0_0.touched) ? "was-validated" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r12.propertyCreationForm.get("propertyData.carpetArea")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && ((tmp_1_0 = ctx_r12.propertyCreationForm.get("propertyData.carpetArea")) == null ? null : tmp_1_0.touched));
} }
function CreatePropertyComponent_div_39_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Property age is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_39_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Age cannot be negative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreatePropertyComponent_div_39_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CreatePropertyComponent_div_39_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r13.propertyCreationForm.get("propertyAge")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r13.propertyCreationForm.get("propertyAge")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["min"]);
} }
function CreatePropertyComponent_div_44_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Total floors is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_44_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Must be at least 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreatePropertyComponent_div_44_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CreatePropertyComponent_div_44_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r14.propertyCreationForm.get("totalFloors")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r14.propertyCreationForm.get("totalFloors")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["min"]);
} }
function CreatePropertyComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const direction_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", direction_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", direction_r51, " ");
} }
function CreatePropertyComponent_div_52_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Facing is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreatePropertyComponent_div_52_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r16.propertyCreationForm.get("facing")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
} }
function CreatePropertyComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter Location Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This location is not allowed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Maximum length reached! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreatePropertyComponent_div_64_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r54.onAmenityChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amenity_r53 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", amenity_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r20.selectedAmenityIds.includes(amenity_r53.id))("value", amenity_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", amenity_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", amenity_r53.name, " ");
} }
function CreatePropertyComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please upload Project Image! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_ul_80_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreatePropertyComponent_ul_80_li_1_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const i_r58 = restoredCtx.index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r59.removeSelectedFiles(i_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", (tmp_1_0 = photo_r57.get("preview")) == null ? null : tmp_1_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Original: ", (tmp_2_0 = photo_r57.get("fileName")) == null ? null : tmp_2_0.value, "");
} }
function CreatePropertyComponent_ul_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreatePropertyComponent_ul_80_li_1_Template, 9, 3, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r24.propertyPhotos.controls);
} }
function CreatePropertyComponent_div_87_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_87_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Minimum 20 characters required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreatePropertyComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreatePropertyComponent_div_87_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CreatePropertyComponent_div_87_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r25.propertyCreationForm.get("description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r25.propertyCreationForm.get("description")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
} }
var AreaUnit;
(function (AreaUnit) {
    AreaUnit["ACRES"] = "ACRES";
    AreaUnit["GUNTAS"] = "GUNTAS";
    AreaUnit["SQ_YARDS"] = "SQ_YARDS";
})(AreaUnit || (AreaUnit = {}));
class CreatePropertyComponent {
    constructor(propertyService, alertService, authService, route, modalService) {
        this.propertyService = propertyService;
        this.alertService = alertService;
        this.authService = authService;
        this.route = route;
        this.modalService = modalService;
        this.isEditMode = false;
        this.imagePreviews = [];
        this.submitted = false;
        this.existingProjectTitles = ['test', 'test2'];
        this.propertyTypes = [];
        this.filteredPropertyTypes = [];
        this.unitTypes = [];
        this.numberOfBathrooms = ['1', '2', '3', '4', '5', '6', '7+'];
        this.isPropertyForSell = true;
        this.amenities = [];
        this.selectedAmenityIds = [];
        this.isMultiplePropertiesProject = false;
        this.facingOptions = [];
        this.areaUnits = Object.values(AreaUnit);
    }
    ngOnInit() {
        this.authService.user.subscribe((user) => {
            this.user = user;
        });
        this.route.params.subscribe((params) => {
            var _a;
            (_a = this.propertyCreationForm) === null || _a === void 0 ? void 0 : _a.reset();
            this.propertyPhotos.clear();
            this.propertyId = params['id'];
            this.isEditMode = !!this.propertyId;
            if (this.isEditMode) {
                this.loadPropertyDetails();
            }
        });
        this.propertyCreationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            isMultipleProperties: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false),
            propertyData: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    // this.existingTitles.bind(this),
                ]),
            }),
            builtupArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            carpetArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                // CustomValidators.numberValidation,
            ]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, [
                // this.locationCheck.bind(this) as AsyncValidatorFn,
                src_app_helpers_validations_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidators.stringLengthValidation.bind(this),
            ]),
            propertyPhotos: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([]),
            selectedAmenities: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([]),
            defaultPic: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            propertyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            unitType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            floorPlans: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([]),
            bathRooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            facing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000),
            ]),
            totalFloors: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(200),
            ]),
            propertyAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(100),
            ]),
            projectAreaValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            projectAreaUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
        });
        this.propertyCreationForm.statusChanges.subscribe((change) => {
            console.log(change);
        });
        this.handleDynamicValidators();
        this.getPropertyTypes();
        this.getUnitTypes();
        this.getAmenities();
        this.getFacings();
    }
    getFacings() {
        this.facingOptions = this.propertyService.getFacings();
    }
    openManageUnitsModal() {
        this.modalService
            .open(_manage_units_manage_units_component__WEBPACK_IMPORTED_MODULE_1__.ManageUnitsComponent, {
            title: 'Add Unit',
            data: {
                propertId: 1000000,
            },
        })
            .subscribe((data) => {
            if (!data)
                return;
            this.floorPlans.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                unitName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.unitName),
                unitSpace: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.unitSpace),
                unitPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.unitPrice),
                unitFloorPlan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.unitFloorPlan),
            }));
        });
        // this.globalModal.openGlobalModal(ManageUnitsComponent, {
        //   title: 'Add Unit',
        //   data: {
        //     propertId: 1000000,
        //   },
        // });
    }
    handleDynamicValidators() {
        var _a, _b;
        const unitTypeControl = this.propertyCreationForm.get('unitType');
        const floorPlansControl = this.propertyCreationForm.get('floorPlans');
        const bathRoomsControl = this.propertyCreationForm.get('bathRooms');
        const carpetAreaControl = this.propertyCreationForm.get('carpetArea');
        const builtupAreaControl = this.propertyCreationForm.get('builtupArea');
        const projectAreaValueControl = this.propertyCreationForm.get('projectAreaValue');
        (_a = this.propertyCreationForm
            .get('isMultipleProperties')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((val) => {
            if (val) {
                this.filteredPropertyTypes = this.propertyTypes.filter((item) => item.name == 'Apartment' || item.name == 'Villa');
                this.isMultiplePropertiesProject = true;
                floorPlansControl === null || floorPlansControl === void 0 ? void 0 : floorPlansControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                bathRoomsControl === null || bathRoomsControl === void 0 ? void 0 : bathRoomsControl.clearValidators();
                carpetAreaControl === null || carpetAreaControl === void 0 ? void 0 : carpetAreaControl.clearValidators();
                builtupAreaControl === null || builtupAreaControl === void 0 ? void 0 : builtupAreaControl.clearValidators();
                unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.clearValidators();
                projectAreaValueControl === null || projectAreaValueControl === void 0 ? void 0 : projectAreaValueControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
            else {
                this.filteredPropertyTypes = this.propertyTypes;
                this.isMultiplePropertiesProject = false;
                floorPlansControl === null || floorPlansControl === void 0 ? void 0 : floorPlansControl.clearValidators();
                bathRoomsControl === null || bathRoomsControl === void 0 ? void 0 : bathRoomsControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                carpetAreaControl === null || carpetAreaControl === void 0 ? void 0 : carpetAreaControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                builtupAreaControl === null || builtupAreaControl === void 0 ? void 0 : builtupAreaControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                projectAreaValueControl === null || projectAreaValueControl === void 0 ? void 0 : projectAreaValueControl.clearValidators();
            }
            bathRoomsControl === null || bathRoomsControl === void 0 ? void 0 : bathRoomsControl.updateValueAndValidity();
            unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.updateValueAndValidity();
            floorPlansControl === null || floorPlansControl === void 0 ? void 0 : floorPlansControl.updateValueAndValidity();
            builtupAreaControl === null || builtupAreaControl === void 0 ? void 0 : builtupAreaControl.updateValueAndValidity();
            carpetAreaControl === null || carpetAreaControl === void 0 ? void 0 : carpetAreaControl.updateValueAndValidity();
            projectAreaValueControl === null || projectAreaValueControl === void 0 ? void 0 : projectAreaValueControl.updateValueAndValidity();
        });
        (_b = this.propertyCreationForm
            .get('propertyType')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((type) => {
            if (parseInt(type) === 5 || parseInt(type) === 6) {
                // Remove validators for land
                this.isMultiplePropertiesProject
                    ? unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
                    : unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.clearValidators();
            }
            else {
                // Add validators for apartment/villa
                this.isMultiplePropertiesProject
                    ? unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.clearValidators()
                    : unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
            unitTypeControl === null || unitTypeControl === void 0 ? void 0 : unitTypeControl.updateValueAndValidity();
        });
    }
    get floorPlans() {
        return this.propertyCreationForm.get('floorPlans');
    }
    get propertyPhotos() {
        if (!this.propertyCreationForm)
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([]);
        return this.propertyCreationForm.get('propertyPhotos');
    }
    get selectedAmenities() {
        return this.propertyCreationForm.get('selectedAmenities');
    }
    onAmenityChange(event) {
        const amenityId = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            if (!this.selectedAmenityIds.includes(amenityId)) {
                this.selectedAmenityIds.push(amenityId);
            }
        }
        else {
            console.log(this.selectedAmenityIds, 'selectedAmenitiesfirst');
            this.selectedAmenityIds = this.selectedAmenityIds.filter((id) => id !== parseInt(amenityId));
            console.log(this.selectedAmenityIds, 'selectedAmenities');
        }
    }
    onUploadPhotos(event) {
        const photos = Array.from(event.target.files);
        console.log(photos, 'photos+++');
        photos.forEach((file) => {
            // const duplicate = this.propertyPhotos.some(
            //   (item) => item.name == file.name && item.size == file.size,
            // );
            const duplicate = this.propertyPhotos.value.some((item) => item.fileName == file.name && item.file[0].size == file.size);
            if (duplicate) {
                this.alertService.warn('Duplicate file skipped: ' + file.name);
                return;
            }
            else {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.propertyPhotos.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                        fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(file.name),
                        file: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl([file]),
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl([file.name]),
                        preview: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(reader.result),
                        existing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false),
                    }));
                };
                console.log(this.propertyPhotos, 'this.propertyPhoto12s');
                reader.readAsDataURL(file);
            }
        });
    }
    // onUploadPhotos(event: any, type: string) {
    //   const photos: File[] = Array.from(event.target.files);
    //   photos.forEach((file) => {
    //     this.files.push(
    //       new FormGroup({
    //         file: new FormControl([null]),
    //         title: new FormControl(['']),
    //       }),
    //     );
    //     console.log(this.files, 'files++=');
    //     const isDuplicateFile = this.propertyPhotos.some(
    //       (item) => item.name == file.name && item.size == file.size,
    //     );
    //     if (!isDuplicateFile) this.propertyPhotos.push(file);
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
    //     reader.readAsDataURL(file);
    //   });
    //   console.log(this.propertyPhotos);
    // }
    onUploadPhotosold(event, type) {
        // const photos: File[] = Array.from(event.target.files);
        // console.log(photos, 'photos+++');
        // photos.forEach((file) => {
        //   const duplicate = this.propertyPhotos.some(
        //     (item) => item.name == file.name && item.size == file.size,
        //   );
        //   if (duplicate) {
        //     this.alertService.warn('Duplicate file skipped: ' + file.name);
        //     return;
        //   } else {
        //     this.propertyPhotos.push(file);
        //     this.files.push(
        //       new FormGroup({
        //         file: new FormControl([file]),
        //         title: new FormControl(['']),
        //       }),
        //     );
        //     console.log(this.propertyPhotos, 'this.propertyPhoto12s');
        //     console.log(this.files, 'this.files.value12');
        //     const reader = new FileReader();
        //     reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
        //     reader.readAsDataURL(file);
        //   }
        // this.files.push(
        //   new FormGroup({
        //     file: new FormControl([null]),
        //     title: new FormControl(['']),
        //   }),
        // );
        // const isDuplicateFile = this.propertyPhotos.some(
        //   (item) => item.name == file.name && item.size == file.size,
        // );
        // if (!isDuplicateFile) this.propertyPhotos.push(file);
        // const reader = new FileReader();
        // reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
        // reader.readAsDataURL(file);
        // });
    }
    isRequired(controlName) {
        const control = this.propertyCreationForm.get(controlName);
        if (!control || !control.validator)
            return false;
        // Check if the control has a required validator
        const validator = control.validator({});
        return validator && validator['required'];
    }
    getUnitTypes() {
        this.unitTypes = this.propertyService.getUnitTypes();
    }
    getPropertyTypes() {
        this.propertyTypes = this.propertyService.getPropertyTypes();
        this.filteredPropertyTypes = this.propertyTypes;
    }
    setValues() {
        // this.propertyCreationForm.form.patchValue({
        //   propertyData:  {
        //     title: "Apartment",
        //     price: "12CR"
        //   }
        // })
    }
    onSubmitTemp() {
        // console.log(form.value, 'form');
        // this.submitted = true;
        // this.propertyDetails  = {
        //   title: this.propertyCreationForm.value.propertyData.title,
        //   price: this.propertyCreationForm.value.propertyData.price,
        //   location: this.propertyCreationForm.value.location,
        //   defaultPic: "",
        //   propertyType: this.propertyCreationForm.value.propertyType,
        //   unitType: this.propertyCreationForm.value.unitType
        // }
        // this.propertyCreationForm.reset();
    }
    uploadFile(evt, fieldName) {
        const file = evt.target.files;
        if (file && file.length == 1) {
            this.propertyCreationForm.patchValue({
                defaultPic: file[0],
            });
            this.propertyCreationForm.updateValueAndValidity();
        }
    }
    removeUnit(index) {
        const item = this.floorPlans.value[index];
        if (item.existing) {
            this.propertyService.deletePropertyUnit(item.id).subscribe(() => {
                this.alertService.success('Unit deleted successfully');
            });
        }
        this.floorPlans.removeAt(index);
    }
    removeSelectedFiles(index) {
        const item = this.propertyPhotos.value[index];
        if (item.existing) {
            this.propertyService.deletePropertyImage(item.id).subscribe(() => {
                this.alertService.success('Image deleted successfully');
            });
        }
        this.propertyPhotos.removeAt(index);
    }
    onSubmit() {
        console.log(this.propertyPhotos, 'this.propertyPhotos');
        console.log(this.propertyCreationForm);
        // const property = new Property(
        //   "3",
        //   this.propertyCreationForm.value.propertyData.title,
        //   this.propertyCreationForm.value.propertyData.category,
        //   this.propertyCreationForm.value.propertyData.price,
        //   this.propertyCreationForm.value.location,
        //   this.propertyCreationForm.value.defaultPic,
        //   "swamy12",
        //   this.propertyCreationForm.value.propertyType,
        //   this.propertyCreationForm.value.unitType
        //   );
        if (this.propertyCreationForm.valid) {
            const formData = new FormData();
            console.log(this.propertyCreationForm.value.defaultPic);
            formData.append('title', this.propertyCreationForm.value.propertyData.title);
            formData.append('defaultPic', this.propertyCreationForm.value.defaultPic);
            formData.append('propertyPhotos', this.propertyCreationForm.value.propertyPhotos);
            formData.append('isMultipleProperties', this.propertyCreationForm.value.isMultipleProperties);
            formData.append('price', this.propertyCreationForm.value.price);
            formData.append('location', this.propertyCreationForm.value.location);
            formData.append('propertyType', this.propertyCreationForm.value.propertyType);
            formData.append('unitType', this.propertyCreationForm.value.unitType);
            formData.append('bathRooms', this.propertyCreationForm.value.bathRooms);
            formData.append('builtupArea', this.propertyCreationForm.value.builtupArea);
            formData.append('amenities', JSON.stringify(this.selectedAmenityIds || []));
            formData.append('carpetArea', this.propertyCreationForm.value.carpetArea);
            formData.append('description', this.propertyCreationForm.value.description);
            formData.append('totalFloors', this.propertyCreationForm.value.totalFloors);
            formData.append('propertyAge', this.propertyCreationForm.value.propertyAge);
            formData.append('facing', this.propertyCreationForm.value.facing);
            formData.append('createdBy', this.user.id);
            formData.append('modifiedBy', this.user.id);
            this.propertyPhotos.value.forEach((control, index) => {
                if (!control['existing']) {
                    formData.append('files', control.file[0]); // Append new files
                    formData.append('titles', control['title']); // Append existing photo IDs to keep
                }
            });
            const units = this.floorPlans.controls
                .filter((unit) => !unit.value.existing)
                .map((unit, index) => {
                let unitItem = {};
                if (!unit.value.existing) {
                    unitItem = {
                        unitName: unit.value.unitName,
                        unitSpace: unit.value.unitSpace,
                        unitPrice: unit.value.unitPrice,
                        fileIndex: index,
                    };
                }
                return unitItem;
            });
            formData.append('units', JSON.stringify(units));
            this.floorPlans.controls.forEach((unit) => {
                if (unit.value.unitFloorPlan && !unit.value.existing) {
                    formData.append('unitFloorPlans', unit.value.unitFloorPlan);
                }
            });
            const normalizedArea = this.convertToSqYards(Number(this.propertyCreationForm.value.projectAreaValue), this.propertyCreationForm.value.projectAreaUnit);
            formData.append('projectAreaValue', this.propertyCreationForm.value.projectAreaValue);
            formData.append('projectAreaInSqYards', normalizedArea.toString());
            formData.append('projectAreaUnit', this.propertyCreationForm.value.projectAreaUnit);
            if (this.isEditMode) {
                formData.append('id', this.propertyId);
                this.propertyService.editProperty(formData).subscribe((data) => {
                    this.propertyPhotos.clear();
                    this.clearFormData();
                    this.loadPropertyDetails();
                    this.propertyService.updateProperty(data.data);
                    this.alertService.success('Property Updated Successfully!');
                });
            }
            else {
                this.propertyService.addProperty(formData).subscribe((data) => {
                    this.selectedAmenities.clear();
                    this.propertyPhotos.clear();
                    this.clearFormData();
                    this.propertyService.updateProperty(data.data);
                    this.alertService.success('Property Added Successfully!');
                });
            }
        }
    }
    clearFormData() {
        this.defaultPic.nativeElement.value = '';
        this.floorPlans.clear();
        this.propertyCreationForm.reset();
    }
    getAmenities() {
        this.propertyService.getAmenities().subscribe((data) => {
            console.log(data, 'amenities++');
            this.amenities = data;
        });
    }
    bindPropertyDataToCreateForm() {
        var _a;
        this.selectedAmenityIds = this.property.amenities.map((a) => a.id);
        const propertyData = {
            propertyData: {
                title: this.property.title,
            },
            selectedAmenities: ((_a = this.property.amenities) === null || _a === void 0 ? void 0 : _a.map((item) => item.id)) || [],
            price: this.property.price,
            location: this.property.location,
            defaultPic: this.property.defaultPic,
            propertyType: this.property.propertyType.toString(),
            isMultipleProperties: this.property.isMultipleProperties,
            unitType: this.property.unitType,
            builtupArea: this.property.builtupArea,
            carpetArea: this.property.carpetArea,
            bathRooms: this.property.bathRooms,
            description: this.property.description,
            totalFloors: this.property.totalFloors,
            propertyAge: this.property.propertyAge,
            facing: this.property.facing,
            projectAreaUnit: this.property.projectAreaUnit,
            projectAreaValue: this.property.projectAreaValue,
            projectAreaInSqYards: this.property.projectAreaInSqYards,
        };
        this.floorPlans.clear();
        this.propertyPhotos.clear();
        this.property.units.forEach((unit) => {
            this.floorPlans.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                unitName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(unit.unitName),
                unitSpace: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(unit.unitSpace),
                unitPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(unit.unitPrice),
                unitFloorPlan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(unit.unitFloorPlanUrl),
                existing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(true),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(unit.id),
            }));
        });
        this.property.photos.forEach((file) => {
            this.propertyPhotos.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(file.fileName),
                file: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(file.title),
                preview: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(file.src),
                existing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(true),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(file.id),
            }));
            this.imagePreviews.push(file);
            // const reader = new FileReader();
            // reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
            // reader.readAsDataURL(file);
        });
        // this.imagePreviews = this.property.photos;
        this.propertyCreationForm.patchValue(propertyData);
    }
    loadPropertyDetails() {
        this.propertyService
            .getPropertyById(parseInt(this.propertyId))
            .subscribe((data) => {
            this.property = data;
            this.bindPropertyDataToCreateForm();
            console.log(this.property);
            // Initialize form controls with property details if needed
        });
    }
    convertToSqYards(value, unit) {
        switch (unit) {
            case 'ACRES':
                return value * 4840;
            case 'GUNTAS':
                return value * 121;
            case 'SQ_YARDS':
                return value;
            default:
                return value;
        }
    }
    ngOnDestroy() {
        // Unsubscribe from any subscriptions to prevent memory leaks
        this.propertyCreationForm.reset();
        this.defaultPic.nativeElement.value = '';
        this.propertyPhotos.clear();
    }
}
CreatePropertyComponent.ɵfac = function CreatePropertyComponent_Factory(t) { return new (t || CreatePropertyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_2__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService)); };
CreatePropertyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreatePropertyComponent, selectors: [["app-create-property"]], viewQuery: function CreatePropertyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.propertyPhotosInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.defaultPic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.globalModal = _t.first);
    } }, decls: 92, vars: 31, consts: [["class", "page-header", 4, "ngIf"], [1, "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "isMultipleProperties", "formControlName", "isMultipleProperties", 1, "form-check-input"], ["for", "isMultipleProperties", 1, "form-check-label"], ["formGroupName", "propertyData"], [1, "form-group", "mb-3", "mt-3", 3, "ngClass"], ["for", "title"], ["type", "text", "name", "title", "id", "title", "required", "", "formControlName", "title", 1, "form-control"], ["class", "is-invalid invalid-feedback", 4, "ngIf"], [1, "form-group", "mb-3", 3, "ngClass"], ["for", "propertyType", 1, "d-block", "mb-2", "pb-1", "form-label"], [1, "text-danger"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "btn-group-sm", "flex-wrap"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "form-group mb-3", 3, "ngClass", 4, "ngIf"], ["for", "price"], ["type", "text", "name", "price", "id", "price", "required", "", "formControlName", "price", 1, "form-control"], ["class", "form-group mb-3", 4, "ngIf"], ["class", "form-group mb-3 mt-3", 3, "ngClass", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "propertyAge"], ["type", "number", "id", "propertyAge", "formControlName", "propertyAge", "placeholder", "Enter property age", "min", "0", 1, "form-control"], ["for", "totalFloors"], ["type", "number", "id", "totalFloors", "formControlName", "totalFloors", "placeholder", "Enter total floors", "min", "1", 1, "form-control"], ["for", "facing"], ["id", "facing", "formControlName", "facing", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "location"], ["type", "text", "name", "location", "id", "location", "required", "", "formControlName", "location", 1, "form-control"], ["formArrayName", "selectedAmenities", 1, "amenities-list"], [1, "form-label", "fw-bold"], [1, "mb-3"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["for", "defaultPic"], ["type", "file", "name", "defaultPic", "required", "", 1, "form-control", 3, "change"], ["defaultPic", ""], ["for", "propertyPhotos", 1, "form-label"], ["type", "file", "multiple", "", "id", "propertyPhotos", 1, "form-control", 3, "change"], ["propertyPhotosInput", ""], ["formArrayName", "propertyPhotos", 1, "row"], ["class", "list-group", 4, "ngIf"], [1, "form-group"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "5", "placeholder", "Describe the property, amenities, location highlights...", 1, "form-control"], [1, "text-muted"], ["class", "error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["globalModal", ""], [1, "page-header"], [1, "is-invalid", "invalid-feedback"], [1, "mb-2"], ["type", "radio", "name", "propertyType", "formControlName", "propertyType", "autocomplete", "off", 1, "btn-check", 3, "id", "value", "checked"], [1, "btn", "btn-outline-secondary", 3, "for"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "mt-3"], ["type", "button", 1, "btn", "btn-primary", "px-4", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], ["for", "unitType", 1, "d-block", "mb-2", "pb-1", "form-label"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "btn-group-sm"], ["type", "radio", "name", "unitType", "formControlName", "unitType", "autocomplete", "off", "checked", "", 1, "btn-check", 3, "id", "value"], ["for", "bathRooms", 1, "d-block", "mb-2", "pb-1", "form-label"], ["formControlName", "bathRooms", 1, "form-select"], ["value", "", "disabled", ""], [3, "value"], [1, "d-flex", "gap-2"], ["type", "number", "formControlName", "projectAreaValue", "placeholder", "Enter area", "min", "0", "step", "0.01", 1, "form-control"], ["formControlName", "projectAreaUnit", 1, "form-control"], ["type", "text", "name", "builtupArea", "id", "builtupArea", "required", "", "formControlName", "builtupArea", 1, "form-control"], ["type", "text", "name", "carpetArea", "id", "carpetArea", "required", "", "formControlName", "carpetArea", 1, "form-control"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "id", "change"], [1, "form-check-label", 3, "for"], [1, "list-group"], ["class", "list-group-item d-flex align-items-start gap-3 flex-column flex-md-row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "align-items-start", "gap-3", "flex-column", "flex-md-row", 3, "formGroupName"], [1, "d-flex", "align-items-center", "gap-3"], ["alt", "Preview", "width", "80", "height", "80", 1, "rounded", "border", 2, "object-fit", "cover", 3, "src"], [1, "flex-grow-1"], ["type", "text", "formControlName", "title", "placeholder", "Enter new file name", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "error"]], template: function CreatePropertyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreatePropertyComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CreatePropertyComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Is this a Multiple Properties Project? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CreatePropertyComponent_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, CreatePropertyComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Property Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CreatePropertyComponent_div_21_Template, 4, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CreatePropertyComponent_span_22_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CreatePropertyComponent_div_23_Template, 23, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CreatePropertyComponent_div_24_Template, 8, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CreatePropertyComponent_div_25_Template, 10, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CreatePropertyComponent_span_30_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CreatePropertyComponent_span_31_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CreatePropertyComponent_div_32_Template, 10, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, CreatePropertyComponent_div_33_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CreatePropertyComponent_div_34_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Property Age (Years)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CreatePropertyComponent_div_39_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Total Floors");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CreatePropertyComponent_div_44_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Facing");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Select Facing");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CreatePropertyComponent_option_51_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, CreatePropertyComponent_div_52_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, CreatePropertyComponent_span_57_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, CreatePropertyComponent_span_58_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, CreatePropertyComponent_span_59_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Select Amenities");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, CreatePropertyComponent_div_64_Template, 4, 5, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Property Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Property Cover Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreatePropertyComponent_Template_input_change_71_listener($event) { return ctx.uploadFile($event, "defaultPic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, CreatePropertyComponent_span_73_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Photos of the Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreatePropertyComponent_Template_input_change_77_listener($event) { return ctx.onUploadPhotos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, CreatePropertyComponent_ul_80_Template, 2, 1, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Property Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "small", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, CreatePropertyComponent_div_87_Template, 3, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "app-gobal-modal", null, 51);
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_7_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_17_0;
        let tmp_18_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_23_0;
        let tmp_24_0;
        let tmp_26_0;
        let tmp_27_0;
        let tmp_29_0;
        let tmp_30_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.propertyCreationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_2_0 = ctx.propertyCreationForm.get("propertyData.title")) == null ? null : tmp_2_0.valid) && ((tmp_2_0 = ctx.propertyCreationForm.get("propertyData.title")) == null ? null : tmp_2_0.touched) ? "was-validated" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.propertyCreationForm.get("propertyData.title")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required) && ((tmp_3_0 = ctx.propertyCreationForm.get("propertyData.title")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.propertyCreationForm.get("propertyData.title")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.existingTitles) && ((tmp_4_0 = ctx.propertyCreationForm.get("propertyData.title")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_5_0 = ctx.propertyCreationForm.get("propertyType")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx.propertyCreationForm.get("propertyType")) == null ? null : tmp_5_0.touched) ? "was-validated" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredPropertyTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((tmp_7_0 = ctx.propertyCreationForm.get("propertyType")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx.propertyCreationForm.get("propertyType")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isRequired("floorPlans"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMultiplePropertiesProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMultiplePropertiesProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_11_0 = ctx.propertyCreationForm.get("price")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx.propertyCreationForm.get("price")) == null ? null : tmp_11_0.touched) ? "was-validated" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.propertyCreationForm.get("price")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required) && ((tmp_12_0 = ctx.propertyCreationForm.get("price")) == null ? null : tmp_12_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.propertyCreationForm.get("price")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.invalidNumber) && ((tmp_13_0 = ctx.propertyCreationForm.get("price")) == null ? null : tmp_13_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMultiplePropertiesProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMultiplePropertiesProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMultiplePropertiesProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.propertyCreationForm.get("propertyAge")) == null ? null : tmp_17_0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.propertyCreationForm.get("totalFloors")) == null ? null : tmp_18_0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.facingOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_20_0 = ctx.propertyCreationForm.get("facing")) == null ? null : tmp_20_0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_21_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_21_0.valid) && ((tmp_21_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_21_0.touched) ? "was-validated" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors.required) && ((tmp_22_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_22_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_23_0.errors == null ? null : tmp_23_0.errors.locationNotAllowed) && ((tmp_23_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_23_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_24_0.errors == null ? null : tmp_24_0.errors.maximumLengthReached) && ((tmp_24_0 = ctx.propertyCreationForm.get("location")) == null ? null : tmp_24_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.amenities);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ((tmp_26_0 = ctx.propertyCreationForm.get("defaultPic")) == null ? null : tmp_26_0.valid) && ((tmp_26_0 = ctx.propertyCreationForm.get("defaultPic")) == null ? null : tmp_26_0.touched) ? "was-validated" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((tmp_27_0 = ctx.propertyCreationForm.get("defaultPic")) == null ? null : tmp_27_0.valid) && ((tmp_27_0 = ctx.propertyCreationForm.get("defaultPic")) == null ? null : tmp_27_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.propertyPhotos.controls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ((tmp_29_0 = ctx.propertyCreationForm.get("description")) == null ? null : tmp_29_0.value == null ? null : tmp_29_0.value.length) || 0, "/1000 characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_30_0 = ctx.propertyCreationForm.get("description")) == null ? null : tmp_30_0.touched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _shared_modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_6__.GlobalModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor], styles: [".btn-group.btn-group-sm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: max-content;\r\n  margin-right: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjcmVhdGUtcHJvcGVydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JvdXAuYnRuLWdyb3VwLXNtIGRpdiB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5102:
/*!*****************************************************************!*\
  !*** ./src/app/seller/edit-property/edit-property.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPropertyComponent": () => (/* binding */ EditPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _create_property_create_property_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-property/create-property.component */ 8930);


class EditPropertyComponent {
    constructor() { }
    ngOnInit() { }
}
EditPropertyComponent.ɵfac = function EditPropertyComponent_Factory(t) { return new (t || EditPropertyComponent)(); };
EditPropertyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPropertyComponent, selectors: [["app-edit-property"]], decls: 6, vars: 0, consts: [[1, "page-header"], [1, "row"], [1, "col-md-12"]], template: function EditPropertyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-create-property");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_0__.CreatePropertyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb3BlcnR5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1437:
/*!***************************************************************!*\
  !*** ./src/app/seller/manage-units/manage-units.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUnitsComponent": () => (/* binding */ ManageUnitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);






function ManageUnitsComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function ManageUnitsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag & Drop Floor Plan Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageUnitsComponent_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Browse File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManageUnitsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageUnitsComponent_div_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.removeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.floorPlanPreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ManageUnitsComponent {
    constructor(fb, propertyService) {
        this.fb = fb;
        this.propertyService = propertyService;
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.floorPlanPreview = null;
        this.selectedFile = null;
        this.isDragging = false;
    }
    ngOnInit() {
        this.unitForm = this.fb.group({
            unitName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            unitSpace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            unitPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            unitFloorPlan: [null],
        });
        if (this.unitData) {
            this.unitForm.patchValue({
                unitName: this.unitData.unitName,
                unitSpace: this.unitData.unitSpace,
                unitPrice: this.unitData.unitPrice,
            });
            this.floorPlanPreview = this.unitData.floorPlanUrl || null;
        }
        this.getUnitTypes();
    }
    getUnitTypes() {
        this.unitTypes = this.propertyService.getUnitTypes();
    }
    // 📌 Handle File Selection
    handleFile(file) {
        if (!file.type.startsWith('image/'))
            return;
        this.selectedFile = file;
        this.unitForm.patchValue({
            unitFloorPlan: file,
        });
        const reader = new FileReader();
        reader.onload = (e) => {
            this.floorPlanPreview = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    // 📌 Drag Events
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
    }
    onDrop(event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
        const file = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files[0];
        if (file)
            this.handleFile(file);
    }
    onFileSelect(event) {
        const file = event.target.files[0];
        if (file)
            this.handleFile(file);
    }
    removeImage() {
        this.selectedFile = null;
        this.floorPlanPreview = null;
        this.unitForm.patchValue({ unitFloorPlan: null });
    }
    save() {
        if (this.unitForm.invalid)
            return;
        this.closeModal.emit(Object.assign(Object.assign({}, this.unitForm.value), { unitFloorPlan: this.selectedFile }));
    }
    cancel() {
        this.closeModal.emit(null);
    }
}
ManageUnitsComponent.ɵfac = function ManageUnitsComponent_Factory(t) { return new (t || ManageUnitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
ManageUnitsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageUnitsComponent, selectors: [["app-manage-units"]], inputs: { unitData: "unitData" }, outputs: { closeModal: "closeModal" }, decls: 29, vars: 6, consts: [[3, "formGroup"], [1, "row"], [1, "col-md-4", "mb-3"], [1, "form-label"], ["formControlName", "unitName", "name", "unitType", "placeholder", "Select Unity Type", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "unitSpace", "placeholder", "e.g. 1775", 1, "form-control"], ["type", "number", "step", "0.01", "formControlName", "unitPrice", "placeholder", "e.g. 1.24", 1, "form-control"], [1, "upload-box", "text-center", "p-4", "mt-3", 3, "dragover", "dragleave", "drop"], ["type", "file", 1, "d-none", 3, "change"], ["fileInput", ""], [4, "ngIf"], [1, "text-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "mb-2", "fw-semibold"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "img-fluid", "rounded", "border", 2, "max-height", "250px", 3, "src"], [1, "mt-2"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function ManageUnitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Unit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Select Unit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManageUnitsComponent_option_10_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Unit Space (Sq.Ft)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Unit Price (Cr)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragover", function ManageUnitsComponent_Template_div_dragover_19_listener($event) { return ctx.onDragOver($event); })("dragleave", function ManageUnitsComponent_Template_div_dragleave_19_listener($event) { return ctx.onDragLeave($event); })("drop", function ManageUnitsComponent_Template_div_drop_19_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ManageUnitsComponent_Template_input_change_20_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ManageUnitsComponent_div_22_Template, 7, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ManageUnitsComponent_div_23_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageUnitsComponent_Template_button_click_25_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageUnitsComponent_Template_button_click_27_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.unitForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.unitTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dragging", ctx.isDragging);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.floorPlanPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.floorPlanPreview);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".upload-box[_ngcontent-%COMP%] {\r\n  border: 2px dashed #ccc;\r\n  border-radius: 8px;\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.upload-box.dragging[_ngcontent-%COMP%] {\r\n  border-color: #6f42c1;\r\n  background-color: #f3f0ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS11bml0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoibWFuYWdlLXVuaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWJveCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51cGxvYWQtYm94LmRyYWdnaW5nIHtcclxuICBib3JkZXItY29sb3I6ICM2ZjQyYzE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4047:
/*!*****************************************************************!*\
  !*** ./src/app/seller/my-properties/my-properties.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPropertiesComponent": () => (/* binding */ MyPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/property.service */ 5998);
/* harmony import */ var src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/alert/alert.service */ 301);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modals/gobal-modal/gobal-modal.component */ 869);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _properties_property_list_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../properties/property-list/property-item/property-item.component */ 5887);









const _c0 = ["myModal"];
const _c1 = function (a1) { return ["edit-property", a1, "edit"]; };
function MyPropertiesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MyPropertiesComponent_div_4_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.deleteProperty(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-property-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("propertySelectedEvent", function MyPropertiesComponent_div_4_Template_app_property_item_propertySelectedEvent_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.onPropertySelected(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c1, item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("property", item_r3);
} }
function MyPropertiesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No items found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class MyPropertiesComponent {
    constructor(propertyService, alertService, authService) {
        this.propertyService = propertyService;
        this.alertService = alertService;
        this.authService = authService;
        this.properties = [];
        this.propertyWasSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        this.authService.user.subscribe((user) => {
            this.user = user;
        });
        this.propertyService.propertiesChanged.subscribe((property) => {
            console.log(property);
            const index = this.properties.findIndex((item) => item.id == property.id);
            if (index !== -1) {
                this.properties.splice(index, 1, property);
            }
            else {
                this.properties.push(property);
            }
        });
        this.propertyService
            .getPropertiesByUser({ userId: this.user.id })
            .subscribe((result) => {
            this.properties = result;
            console.log(result);
        });
    }
    onPropertySelected(item) {
        this.propertyWasSelectedEvent;
    }
    deleteProperty(property) {
        this.propertyId = property.id;
        this.property = property;
        this.modal.openModal();
    }
    //Delete Single Property by Id
    // deleteProperty(id: String) {
    //   this.propertyService.deleteProperty(id).subscribe((result: any) => {
    //     const index = this.properties.findIndex((item) => item.id === id);
    //     this.properties.splice(index, 1);
    //     this.alertService.success('Property deleted successfully!');
    //   });
    // }
    onDeleteProperty(propertyId) {
        // Filter out the deleted property
        this.properties = this.properties.filter((p) => parseInt(p.id) !== propertyId);
        console.log(`Deleted property with id: ${propertyId}`);
    }
}
MyPropertiesComponent.ɵfac = function MyPropertiesComponent_Factory(t) { return new (t || MyPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
MyPropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MyPropertiesComponent, selectors: [["app-my-properties"]], viewQuery: function MyPropertiesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, outputs: { propertyWasSelectedEvent: "propertyWasSelectedEvent" }, decls: 8, vars: 4, consts: [[1, "page-header"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4"], ["class", "col", 4, "ngFor", "ngForOf"], ["class", "row row-cols-1 row-cols-md-3 g-4 mt-1", 4, "ngIf"], [3, "propertyId", "property", "delete"], ["myModal", ""], [1, "col"], [1, "btn", "btn-default", "btn-primary", 3, "routerLink"], [1, "btn", "btn-default", "btn-primary", 3, "click"], [3, "property", "propertySelectedEvent"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4", "mt-1"]], template: function MyPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "My Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MyPropertiesComponent_div_4_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MyPropertiesComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-gobal-modal", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("delete", function MyPropertiesComponent_Template_app_gobal_modal_delete_6_listener() { return ctx.onDeleteProperty(ctx.propertyId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.properties);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.properties.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("propertyId", ctx.propertyId)("property", ctx.property);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_3__.GlobalModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _properties_property_list_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__.PropertyItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9625:
/*!********************************************!*\
  !*** ./src/app/seller/seller.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerComponent": () => (/* binding */ SellerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-properties/my-properties.component */ 4047);



class SellerComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.editMode = false;
    }
    ngOnInit() {
        // editMode = this.activatedRoute.snapshot.params
        this.activatedRoute.params.subscribe((params) => {
            // this.propertyId = params['id'];
            // this.property = this.propertyService.getPropertyById(this.propertyId);
            console.log(params);
        });
    }
}
SellerComponent.ɵfac = function SellerComponent_Factory(t) { return new (t || SellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
SellerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SellerComponent, selectors: [["app-seller"]], decls: 9, vars: 0, consts: [[1, "row"], [1, "col", "mt-5", "mb-5"], [1, "col-md-7"], [1, "card", "card-body"], [1, "col-md-5"]], template: function SellerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-my-properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_0__.MyPropertiesComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7129:
/*!*****************************************!*\
  !*** ./src/app/seller/seller.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerModule": () => (/* binding */ SellerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class SellerModule {
}
SellerModule.ɵfac = function SellerModule_Factory(t) { return new (t || SellerModule)(); };
SellerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SellerModule });
SellerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SellerModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ }),

/***/ 8549:
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.model */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", alert_r1.message, "\n");
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        // @Input() id = "default-alert";
        this.id = "default-alert";
        this.alerts = [];
        this.fade = true;
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            console.log(alert, "Allert from alert component");
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), 3000);
        });
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissible'];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success]: 'alert-success',
            [_alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error]: 'alert-danger',
            [_alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info]: 'alert-info',
            [_alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning]: 'alert-warning'
        };
        if (alert.type !== undefined) {
            classes.push(alertTypeClass[alert.type]);
        }
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
    removeAlert(alert) {
        if (!this.alerts.includes(alert))
            return;
        const timout = this.fade ? 250 : 0;
        alert.fade = this.fade;
        setTimeout(() => {
            this.alerts = this.alerts.filter(x => x !== alert);
        }, timout);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { fade: "fade" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["div.alert[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 60px;\r\n    right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmFsZXJ0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 1249:
/*!*********************************************!*\
  !*** ./src/app/shared/alert/alert.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "AlertType": () => (/* binding */ AlertType),
/* harmony export */   "AlertOptions": () => (/* binding */ AlertOptions)
/* harmony export */ });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class AlertOptions {
}


/***/ }),

/***/ 1795:
/*!**********************************************!*\
  !*** ./src/app/shared/alert/alert.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModule": () => (/* binding */ AlertModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ 8549);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class AlertModule {
}
AlertModule.ɵfac = function AlertModule_Factory(t) { return new (t || AlertModule)(); };
AlertModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent] }); })();


/***/ }),

/***/ 301:
/*!***********************************************!*\
  !*** ./src/app/shared/alert/alert.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.model */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.defaultAlertId = "default-alert";
    }
    onAlert(id = this.defaultAlertId) {
        return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(x => x && x.id === id));
    }
    success(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success, message })));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error, message })));
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info, message })));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning, message })));
    }
    alert(alert) {
        alert.id = alert.id || this.defaultAlertId;
        this.subject.next(alert);
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1300:
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownDirective": () => (/* binding */ DropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler() { return ctx.toggleOpen(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isOpen);
    } } });


/***/ }),

/***/ 3617:
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ring[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border: 8px solid #fed;\r\n    border-radius: 50%;\r\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: #fed transparent transparent transparent;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    animation-delay: -0.45s;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    animation-delay: -0.3s;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    animation-delay: -0.15s;\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsc0RBQXNEO0VBQ3hEO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjZmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZWQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 7583:
/*!*****************************************!*\
  !*** ./src/app/shared/modal.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);


class ModalService {
    constructor() {
        this.componentSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.openModalSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.component$ = this.componentSource.asObservable();
        this.openModal$ = this.openModalSource.asObservable();
    }
    open(component, config) {
        console.log(component, 'component');
        const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.componentSource.next({ component, config, resultSubject });
        this.openModalSource.next(true);
        return resultSubject.asObservable();
    }
    close() {
        this.openModalSource.next(false);
        this.componentSource.next(null);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 869:
/*!********************************************************************!*\
  !*** ./src/app/shared/modals/gobal-modal/gobal-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalModalComponent": () => (/* binding */ GlobalModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4283);
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../property.service */ 5998);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal.service */ 7583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);






const _c0 = ["container"];
const _c1 = ["modalRef"];
function GlobalModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GlobalModalComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isOpen || ctx_r0.isVisible ? "show" : "");
} }
function GlobalModalComponent_ng_template_7_Template(rf, ctx) { }
function GlobalModalComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GlobalModalComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Are you sure you want to delete this product?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GlobalModalComponent_div_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.primaryAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.isVisible ? "show" : "hide");
} }
class GlobalModalComponent {
    constructor(propertyService, modalService, resolver) {
        this.propertyService = propertyService;
        this.modalService = modalService;
        this.resolver = resolver;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isVisible = false;
        this.isOpen = false;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.title = '';
        this.sub.add(this.modalService.openModal$.subscribe((open) => (this.isOpen = open)));
        this.sub.add(this.modalService.component$.subscribe((data) => {
            var _a;
            if (data === null || data === void 0 ? void 0 : data.component) {
                this.loadComponent(data);
            }
            else {
                (_a = this.container) === null || _a === void 0 ? void 0 : _a.clear();
            }
        }));
    }
    ngOnInit() { }
    openModal() {
        this.isVisible = true;
    }
    closeModal() {
        this.isVisible = false;
        this.modalService.close();
    }
    ngAfterViewInit() {
        this.sub.add(this.modalService.component$.subscribe((data) => {
            if (data) {
                this.loadComponent(data);
            }
            else {
                this.container.clear();
            }
        }));
    }
    loadComponent(data) {
        var _a;
        this.container.clear();
        this.isOpen = true;
        const factory = this.resolver.resolveComponentFactory(data.component);
        const ref = this.container.createComponent(factory);
        if (data.config) {
            Object.assign(ref.instance, data.config);
            this.title = (_a = data.config) === null || _a === void 0 ? void 0 : _a.title;
        }
        ref.instance.closeModal.subscribe((result) => {
            data.resultSubject.next(result);
            data.resultSubject.complete();
            this.modalService.close();
        });
        // this.modalService.data$.
    }
    primaryAction() {
        this.propertyService
            .deleteProperty(this.propertyId)
            .subscribe((res) => {
            this.isVisible = false;
            this.delete.emit(parseInt(this.propertyId));
        });
    }
}
GlobalModalComponent.ɵfac = function GlobalModalComponent_Factory(t) { return new (t || GlobalModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver)); };
GlobalModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GlobalModalComponent, selectors: [["app-gobal-modal"]], viewQuery: function GlobalModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalRef = _t.first);
    } }, inputs: { property: "property", propertyId: "propertyId" }, outputs: { delete: "delete" }, decls: 13, vars: 4, consts: [["class", "modal-backdrop", 3, "ngClass", "click", 4, "ngIf"], [1, "modal", "d-block", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["container", ""], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click"], ["class", "modal d-block", "tabindex", "-1", "role", "dialog", "style", "z-index: 1050", 3, "ngClass", 4, "ngIf"], [1, "modal-backdrop", 3, "ngClass", "click"], ["tabindex", "-1", "role", "dialog", 1, "modal", "d-block", 2, "z-index", "1050", 3, "ngClass"]], template: function GlobalModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GlobalModalComponent_div_0_Template, 1, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GlobalModalComponent_Template_button_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, GlobalModalComponent_ng_template_7_Template, 0, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GlobalModalComponent_Template_button_click_10_listener() { return ctx.primaryAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, GlobalModalComponent_div_12_Template, 11, 1, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpen || ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isOpen ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: [".modal-wrapper[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: auto;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 999;\r\n  animation: fadeIn 0.3s ease-in-out;\r\n}\r\n.modal.hide[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n.modal.show[_ngcontent-%COMP%], .show[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n}\r\n.modal[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  border-radius: 12px;\r\n  width: 100%;\r\n  max-width: 40%;\r\n  animation: slideIn 0.3s ease-in-out;\r\n  right: 0;\r\n  left: auto;\r\n  z-index: 400000;\r\n  background: #fff;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.2rem;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  padding: 0.5rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 6px;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1rem;\r\n  border: none;\r\n  background: #007bff;\r\n  color: white;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n}\r\n@keyframes fadeIn {\r\n  from {\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  to {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n  }\r\n}\r\n@keyframes slideIn {\r\n  from {\r\n    transform: scale(0.95);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .modal[_ngcontent-%COMP%] {\r\n    max-width: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvYmFsLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtDQUFrQztBQUNwQztBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQVM7RUFBVCxTQUFTO0FBQ1g7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztBQUNGO0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoiZ29iYWwtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4ubW9kYWwuaGlkZSxcclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwuc2hvdyxcclxuLnNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogYXV0bztcclxuICB6LWluZGV4OiA0MDAwMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbCB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5882:
/*!******************************************************************************!*\
  !*** ./src/app/shared/modals/interested-modal/interested-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterestedModalComponent": () => (/* binding */ InterestedModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../property.service */ 5998);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





const _c0 = ["modalRef"];
function InterestedModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.isVisible ? "show" : "");
} }
function InterestedModalComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InterestedModalComponent_div_1_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your reason to buy is");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Investment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Self Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Are you a property dealer?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.form);
} }
function InterestedModalComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Thank you! Here is the contact information: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.contactInfo.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.contactInfo.phone, "");
} }
function InterestedModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Basic Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InterestedModalComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InterestedModalComponent_div_1_div_8_Template, 42, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InterestedModalComponent_div_1_div_9_Template, 11, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.isVisible ? "show" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.contactVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.contactVisible);
} }
class InterestedModalComponent {
    constructor(propertyService) {
        this.propertyService = propertyService;
        this.isVisible = false;
        this.contactVisible = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('Investment', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            dealer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('No', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[6-9]\d{9}$/),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
        });
    }
    openModal() {
        setTimeout(() => {
            this.isVisible = true;
        }, 10);
    }
    closeModal() {
        setTimeout(() => {
            this.isVisible = false;
        }, 300);
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.propertyService
            .saveLead(Object.assign(Object.assign({}, this.form.value), { propertyId: this.propertyId }))
            .subscribe((res) => {
            this.contactInfo = res.data;
            this.contactVisible = true;
        });
    }
}
InterestedModalComponent.ɵfac = function InterestedModalComponent_Factory(t) { return new (t || InterestedModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService)); };
InterestedModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InterestedModalComponent, selectors: [["app-interested-modal"]], viewQuery: function InterestedModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalRef = _t.first);
    } }, inputs: { propertyId: "propertyId" }, decls: 2, vars: 2, consts: [["class", "modal-backdrop", 3, "ngClass", 4, "ngIf"], ["class", "modal fade d-block", "tabindex", "-1", "role", "dialog", "style", "z-index: 1050", 3, "ngClass", 4, "ngIf"], [1, "modal-backdrop", 3, "ngClass"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "d-block", 2, "z-index", "1050", 3, "ngClass"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label", "d-block"], [1, "form-check", "form-check-inline"], ["type", "radio", "value", "Investment", "formControlName", "reason", "name", "reason", 1, "form-check-input"], [1, "form-check-label"], ["type", "radio", "value", "Self Use", "formControlName", "reason", "name", "reason", 1, "form-check-input"], ["type", "radio", "value", "Yes", "formControlName", "dealer", "name", "dealer", 1, "form-check-input"], ["type", "radio", "value", "No", "formControlName", "dealer", "name", "dealer", 1, "form-check-input"], [1, "form-label"], ["placeholder", "Name", "formControlName", "name", 1, "form-control"], [1, "input-group"], [1, "input-group-text"], ["placeholder", "Phone Number", "formControlName", "phone", 1, "form-control"], ["placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-success", "fw-bold"]], template: function InterestedModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InterestedModalComponent_div_0_Template, 1, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InterestedModalComponent_div_1_Template, 10, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".modal-wrapper[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: auto;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 999;\r\n  animation: fadeIn 0.3s ease-in-out;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  border-radius: 12px;\r\n  width: 100%;\r\n  max-width: 40%;\r\n  animation: slideIn 0.3s ease-in-out;\r\n  right: 0;\r\n  left: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  padding: 0.5rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 6px;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1rem;\r\n  border: none;\r\n  background: #007bff;\r\n  color: white;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  to {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n  }\r\n}\r\n\r\n@keyframes slideIn {\r\n  from {\r\n    transform: scale(0.95);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .modal[_ngcontent-%COMP%] {\r\n    max-width: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZXN0ZWQtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJpbnRlcmVzdGVkLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbCB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5998:
/*!********************************************!*\
  !*** ./src/app/shared/property.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyService": () => (/* binding */ PropertyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _propertyType_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyType.model */ 1931);
/* harmony import */ var _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties/models/unit-type.model */ 3552);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);








class PropertyService {
    constructor(http) {
        this.http = http;
        this.propertySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.propertiesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.selectedProperty = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.selectedProperty$ = this.selectedProperty.asObservable();
        this.sayInterestedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.amenities = [];
        this.propertyTypes = [
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(2, 'apartment', 'Apartment'),
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(3, 'villa', 'Villa'),
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(4, 'independent-house', 'Independent House'),
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(7, 'commercial', 'Commercial'),
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(1, 'studio', 'Studio'),
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(5, 'plot', 'Plot'),
            new _propertyType_model__WEBPACK_IMPORTED_MODULE_0__.PropertyType(6, 'form-land', 'Form Land'),
        ];
        this.unitTypes = [
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('1', '1bhk', '1BHK'),
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('1.5', '1.5bhk', '1.5BHk'),
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('2', '2bhk', '2BHK'),
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('2.5', '2.5bhk', '2.5BHK'),
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('3', '3bhk', '3BHK'),
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('3.5', '3.5bhk', '3.5BHK'),
            new _properties_models_unit_type_model__WEBPACK_IMPORTED_MODULE_1__.UnitType('4', '4bhk+', '4BHK+'),
        ];
        this.priceRanges = [
            { label: 'Upto 25 Lakhs', value: '0-25L' },
            { label: '25 Lakhs - 50 Lakhs', value: '25L-50L' },
            { label: '50 Lakhs - 1Cr', value: '50L-1Cr' },
            { label: '1 Crore - 2 Crore', value: '1Cr-2Cr' },
            { label: 'Above 2 Crore', value: '2Cr+' }, // Use '0' as infinity/Max
        ];
        this.facingOptions = [
            'North',
            'South',
            'East',
            'West',
            'North-East',
            'North-West',
            'South-East',
            'South-West',
        ];
        this.properties = [];
        this.searchQuerySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.searchQuery$ = this.searchQuerySubject.asObservable();
        this.totalCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiBaseUrl;
    }
    getProperties(req) {
        return this.http.post(this.baseUrl + '/properties', req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((res) => this.totalCount$.next(res.length)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((properties) => {
            return properties;
        }));
    }
    getFacings() {
        return this.facingOptions;
    }
    getTotalCount() {
        return this.totalCount$.asObservable();
    }
    setProperty(property) {
        this.selectedProperty.next(property);
    }
    getPropertiesByUser(data) {
        return this.http.post(this.baseUrl + '/properties/get-properties-by-user', data);
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((properties) => {
            return properties;
        });
    }
    getAmenities() {
        return this.http.get(this.baseUrl + '/properties/amenities');
    }
    getPropertyTypes() {
        return this.propertyTypes.slice();
    }
    getPriceRanges() {
        return this.priceRanges.slice();
    }
    getUnitTypes() {
        return this.unitTypes.slice();
    }
    getPropertyById(id) {
        //  console.log(this.properties)
        // const source = from([this.properties]);
        // console.log(source)
        // // return source.pipe(filter((data) => data.id == index))
        // let foundProperty = this.properties.find((item) => item.id == this.properties[index].id);
        // return foundProperty;
        return this.http
            .get(this.baseUrl + '/properties/get-property-by-id/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((property) => property.data));
    }
    updateProperty(item) {
        this.propertiesChanged.next(item);
    }
    editProperty(property) {
        return this.http.post(this.baseUrl + '/properties/edit-property', property);
    }
    deleteProperty(id) {
        return this.http.delete(this.baseUrl + '/properties/delete-property/' + id);
    }
    addProperty(property) {
        return this.http.post(this.baseUrl + '/properties/add-property', property);
        // this.properties.push(property);
        //   const promise = new Promise((resolve, reject) => {
        //     resolve(this.properties)
        //   })
        //   this.propertiesChanged.next(this.properties.slice())
        //   return promise;
    }
    deletePropertyImage(id) {
        return this.http.delete(this.baseUrl + '/properties/delete-property-photo/' + id);
    }
    deletePropertyUnit(id) {
        return this.http.delete(this.baseUrl + '/properties/delete-property-unit/' + id);
    }
    searchQuery(query) {
        this.searchQuerySubject.next(query);
    }
    saveLead(formValues) {
        return this.http.post(this.baseUrl + '/user/save-lead', formValues);
    }
}
PropertyService.ɵfac = function PropertyService_Factory(t) { return new (t || PropertyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient)); };
PropertyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PropertyService, factory: PropertyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1931:
/*!**********************************************!*\
  !*** ./src/app/shared/propertyType.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyType": () => (/* binding */ PropertyType)
/* harmony export */ });
class PropertyType {
    constructor(id, short_name, name) {
        this.id = id;
        this.short_name = short_name;
        this.name = name;
    }
}


/***/ }),

/***/ 3437:
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../property.service */ 5998);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);








const _c0 = ["searchInput"];
function SearchComponent_div_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_div_0_ul_4_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const location_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.onSelectLocation(location_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", location_r5, " ");
} }
function SearchComponent_div_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_div_0_ul_4_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.filteredLocations);
} }
function SearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchComponent_div_0_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onInputChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchComponent_div_0_ul_4_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filteredLocations.length > 0);
} }
function SearchComponent_div_1_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SearchComponent_div_1_div_3_ng_container_1_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const type_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.onPropertyTypeChange(type_r16.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const type_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r15.searchForm.value.propertyType === type_r16.id ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", type_r16.name)("value", type_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", type_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r16.name, " ");
} }
function SearchComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_div_1_div_3_ng_container_1_Template, 5, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.propertyTypes);
} }
function SearchComponent_div_1_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_div_1_ul_9_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const location_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.onSelectLocation(location_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", location_r20, " ");
} }
function SearchComponent_div_1_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_div_1_ul_9_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.filteredLocations);
} }
function SearchComponent_div_1_div_10_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const range_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", range_r24.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", range_r24.label, " ");
} }
function SearchComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Price Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchComponent_div_1_div_10_option_4_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.priceRanges);
} }
function SearchComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchComponent_div_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onSearchSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_div_1_div_3_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 17, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchComponent_div_1_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onInputChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchComponent_div_1_ul_9_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchComponent_div_1_div_10_Template, 5, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchComponent_div_1_div_11_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.selectedPropertyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.onlyInputSearch == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "Search ", ctx_r1.getSelectedPropertyTypeName(ctx_r1.searchForm.value.propertyType), " or City/Locality/Project...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredLocations.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.onlyInputSearch == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.onlyInputSearch == "no");
} }
class SearchComponent {
    constructor(propertyService, fb, route) {
        this.propertyService = propertyService;
        this.fb = fb;
        this.route = route;
        this.searchSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.showLocationsList = true;
        this.locations = ['New Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'];
        this.propertyTypes = [
            { id: 0, short_name: 'project_type', name: 'Project Type' },
        ];
        this.priceRanges = [
            { label: 'Price Range', value: '' },
            { label: 'Upto 25 Lakhs', value: '0-25L' },
            { label: '25 Lakhs - 50 Lakhs', value: '25L-50L' },
            { label: '50 Lakhs - 1Cr', value: '50L-1Cr' },
            { label: '1 Crore - 2 Crore', value: '1Cr-2Cr' },
            { label: 'Above 2 Crore', value: '2Cr+' }, // Use '0' as infinity/Max
        ];
        this.filteredLocations = [];
    }
    ngOnInit() {
        var _a, _b;
        this.searchForm = this.fb.group({
            location: null,
            propertyType: (_a = this.propertyTypes[0]) === null || _a === void 0 ? void 0 : _a.id,
            priceRange: (_b = this.priceRanges[0]) === null || _b === void 0 ? void 0 : _b.value,
        });
        this.getPropertyTypes();
    }
    ngAfterViewInit() {
        const searchChanges$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.searchInput.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((value) => console.log(value, 'Searched this value')));
        this.searchSubscription = searchChanges$.subscribe((value) => {
            console.log('perofrmed value: ' + value);
        });
    }
    getPropertyTypes() {
        this.propertyTypes = this.propertyService.getPropertyTypes();
        this.propertyTypes.unshift({ id: 0, name: 'All', short_name: 'all' });
    }
    onPropertyTypeChange(val) {
        this.selectedPropertyType = val.toLowerCase().replace(/\s+/g, '');
    }
    onInputChange(event) {
        const query = event.target.value.trim().toLowerCase();
        if (query === '') {
            this.filteredLocations = [];
            this.showLocationsList = false;
            return;
        }
        this.filteredLocations = this.locations.filter((loc) => loc.toLowerCase().includes(query));
        this.showLocationsList = this.filteredLocations.length > 0;
    }
    onSelectLocation(location) {
        var _a;
        (_a = this.searchForm.get('location')) === null || _a === void 0 ? void 0 : _a.setValue(location);
        this.onSearchSubmit();
        this.filteredLocations = [];
    }
    onSearchSubmit() {
        var _a, _b, _c;
        const searchCriteria = {
            location: (_a = this.searchForm.get('location')) === null || _a === void 0 ? void 0 : _a.value,
            propertyType: (_b = this.searchForm.get('propertyType')) === null || _b === void 0 ? void 0 : _b.value,
            priceRange: (_c = this.searchForm.get('priceRange')) === null || _c === void 0 ? void 0 : _c.value,
        };
        this.propertyService.searchQuery(searchCriteria);
    }
    getSelectedPropertyTypeName(propertyTypeId) {
        const selectedType = this.propertyTypes.find((type) => type.id === propertyTypeId);
        return selectedType ? selectedType.name : '';
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_property_service__WEBPACK_IMPORTED_MODULE_0__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, inputs: { placeholder: "placeholder", onlyInputSearch: "onlyInputSearch" }, outputs: { searchSubmitted: "searchSubmitted", selectionChange: "selectionChange" }, decls: 2, vars: 2, consts: [["class", "position-relative header-search-input", 4, "ngIf"], ["class", "search-bar shadow-sm", 3, "ngClass", 4, "ngIf"], [1, "position-relative", "header-search-input"], [1, "fas", "fa-search", "d-lg-inline"], ["type", "text", "placeholder", "Search  City/Locality/Project...", "autocomplete", "off", 1, "form-control", 3, "input"], ["searchInput", ""], ["class", "autocomplete-list list-group", 4, "ngIf"], [1, "autocomplete-list", "list-group"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"], [1, "search-bar", "shadow-sm", 3, "ngClass"], [3, "formGroup", "ngSubmit"], [1, "d-flex", "nav-tabs-style"], ["class", "tabs btn-group flex", "role", "group", 4, "ngIf"], [1, "tab-content"], [1, "row"], [1, "col-12", "col-lg-7", "position-relative"], ["type", "text", "formControlName", "location", "autocomplete", "off", 1, "form-control", 3, "placeholder", "input"], ["class", "col-12 col-lg-4", 4, "ngIf"], ["class", "col-12 col-lg-1", 4, "ngIf"], ["role", "group", 1, "tabs", "btn-group", "flex"], [4, "ngFor", "ngForOf"], [1, "tab-item", 3, "ngClass"], ["type", "radio", "formControlName", "propertyType", "autocomplete", "off", 1, "btn-check", 3, "id", "value", "change"], [1, "btn", "btn-outline-primary", "text-primary", "flex-fill", "text-left", 3, "for"], [1, "col-12", "col-lg-4"], ["for", "price-range-select", 1, "visually-hidden"], ["id", "price-range-select", "formControlName", "priceRange", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-12", "col-lg-1"], ["type", "submit", 1, "btn", "btn-danger", "btn-lg", "w-full", "rounded-xl"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_div_1_Template, 12, 7, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlyInputSearch == "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlyInputSearch == "no");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"]], styles: [".search-bar[_ngcontent-%COMP%] {\r\n  padding: 15px 20px; \r\n}\r\n.search-bar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n  padding: 10px 15px 15px 15px;\r\n}\r\n.search-bar.tabs[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n}\r\n.search-bar[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  background: #9b53b5;\r\n}\r\n.search-bar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%] {\r\n  background: #f7f7f7;\r\n  color: #000 !important;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .search-bar[_ngcontent-%COMP%] {\r\n    \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n.search-bar[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\r\n  background: #000 !important;\r\n  padding: 11px 15px !important;\r\n  border-radius: 0px !important;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\r\n  height: 52px; \r\n  border-radius: 0rem; \r\n  border: none; \r\n  font-size: 1rem; \r\n  color: #333; \r\n  padding-left: 15px; \r\n  transition:\r\n    border-color 0.2s ease-in-out,\r\n    box-shadow 0.2s ease-in-out; \r\n  appearance: none;\r\n}\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: #888; \r\n  opacity: 1; \r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff; \r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.15); \r\n  outline: 0; \r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .search-bar[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; \r\n  }\r\n  .search-bar[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; \r\n  }\r\n}\r\n.autocomplete-list[_ngcontent-%COMP%] {\r\n  position: absolute; \r\n  top: 100%; \r\n  left: 12px; \r\n  right: 12px; \r\n  z-index: 1050; \r\n  max-height: 200px; \r\n  overflow-y: auto; \r\n  border: 1px solid #ddd;\r\n  border-top: none; \r\n  border-radius: 0 0 0.5rem 0.5rem; \r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  list-style: none; \r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #fff;\r\n}\r\n.autocomplete-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  padding: 10px 15px;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 1px solid #eee;\r\n  transition: background-color 0.15s ease-in-out;\r\n}\r\n.autocomplete-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n  border-bottom-left-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n}\r\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  font-weight: 500;\r\n  padding: 0.6rem 10px 0rem;\r\n  margin-bottom: 0.3rem;\r\n  border: none !important;\r\n  padding-top: 0;\r\n}\r\n.btn-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #fff !important;\r\n}\r\n.btn-group.active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n}\r\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\r\n  border-top-left-radius: 0.5rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n}\r\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\r\n  border-top-right-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n}\r\n.header-search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  height: 34px !important;\r\n  border-radius: 0 !important;\r\n  text-indent: 20px;\r\n}\r\n.header-search-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 8px;\r\n}\r\n.search-bar[_ngcontent-%COMP%] {\r\n  transition:\r\n    background 0.3s ease,\r\n    box-shadow 0.3s ease;\r\n}\r\n\r\n.search-bar.apartment[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.search-bar.villa[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.search-bar.independenthouse[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.search-bar.studio[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.search-bar.plot[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.search-bar.formland[_ngcontent-%COMP%] {\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QyxpQ0FBaUM7QUFDakMseUNBQXlDO0FBRXpDLHNDQUFzQztBQUN0QztFQUNFLGtCQUFrQixFQUFFLDhCQUE4QjtBQUNwRDtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUVBLDRFQUE0RTtBQUM1RTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFDL0I7QUFFQSx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DLHlDQUF5QztBQUV6Qzs7RUFFRSxZQUFZLEVBQUUsb0NBQW9DO0VBQ2xELG1CQUFtQixFQUFFLCtCQUErQjtFQUNwRCxZQUFZLEVBQUUsMkJBQTJCO0VBQ3pDLGVBQWUsRUFBRSxnQ0FBZ0M7RUFDakQsV0FBVyxFQUFFLGdDQUFnQztFQUM3QyxrQkFBa0IsRUFBRSwwQkFBMEI7RUFDOUM7OytCQUU2QixFQUNILCtDQUErQztFQUV6RSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVcsRUFBRSwrQ0FBK0M7RUFDNUQsVUFBVSxFQUFFLHVDQUF1QztBQUNyRDtBQUVBLHVDQUF1QztBQUN2Qzs7RUFFRSxxQkFBcUIsRUFBRSx1QkFBdUI7RUFDOUMsZ0RBQWdELEVBQUUsd0JBQXdCO0VBQzFFLFVBQVUsRUFBRSwyQkFBMkI7QUFDekM7QUFFQSxpRkFBaUY7QUFDakY7RUFDRTtJQUNFLG1CQUFtQixFQUFFLGdEQUFnRDtFQUN2RTtFQUNBO0lBQ0UsZ0JBQWdCLEVBQUUsa0RBQWtEO0VBQ3RFO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQixFQUFFLHVEQUF1RDtFQUMzRSxTQUFTLEVBQUUseUNBQXlDO0VBQ3BELFVBQVUsRUFBRSw4QkFBOEI7RUFDMUMsV0FBVyxFQUFFLDhCQUE4QjtFQUMzQyxhQUFhLEVBQUUsMENBQTBDO0VBQ3pELGlCQUFpQixFQUFFLHFDQUFxQztFQUN4RCxnQkFBZ0IsRUFBRSw4Q0FBOEM7RUFDaEUsc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFFLHFEQUFxRDtFQUN2RSxnQ0FBZ0MsRUFBRSxnQ0FBZ0M7RUFDbEUseUNBQXlDO0VBQ3pDLGdCQUFnQixFQUFFLHlCQUF5QjtFQUMzQyxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw4Q0FBOEM7QUFDaEQ7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYO0FBQ0E7RUFDRTs7d0JBRXNCO0FBQ3hCO0FBRUEsY0FBYztBQUNkO0VBQ0UsMkRBQTJEO0FBQzdEO0FBRUEsVUFBVTtBQUNWO0VBQ0UsMkRBQTJEO0FBQzdEO0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsMkRBQTJEO0FBQzdEO0FBRUEsV0FBVztBQUNYO0VBQ0UsMkRBQTJEO0FBQzdEO0FBRUEsU0FBUztBQUNUO0VBQ0UsMkRBQTJEO0FBQzdEO0FBRUEsYUFBYTtBQUNiO0VBQ0UsMkRBQTJEO0FBQzdEIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIFNlYXJjaCBCYXIgQ29tcG9uZW50IFN0eWxpbmcgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKiBNYWluIGNvbnRhaW5lciBmb3IgdGhlIHNlYXJjaCBiYXIgKi9cclxuLnNlYXJjaC1iYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDsgLyogR2VuZXJvdXMgaW50ZXJuYWwgcGFkZGluZyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciAudGFiLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuLnNlYXJjaC1iYXIudGFicyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5zZWFyY2gtYmFyIC50YWItaXRlbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjOWI1M2I1O1xyXG59XHJcbi5zZWFyY2gtYmFyIC50YWItY29udGVudCxcclxuLnNlYXJjaC1iYXIgLnRhYi1pdGVtLmFjdGl2ZSxcclxuLmJ0bi1jaGVjazpjaGVja2VkICsgLmJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBPbiBzY3JlZW5zIGxhcmdlciB0aGFuIHRhYmxldCwgY2VudGVyIHRoZSBjb250ZW50IGZvciBiZXR0ZXIgYWVzdGhldGljcyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuc2VhcmNoLWJhciB7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwMHB4OyAgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4uc2VhcmNoLWJhciAuYnRuLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDExcHggMTVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogSW5wdXQgYW5kIFNlbGVjdCBGaWVsZCBTdHlsaW5nICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmZvcm0tY29udHJvbCxcclxuLmZvcm0tc2VsZWN0IHtcclxuICBoZWlnaHQ6IDUycHg7IC8qIFNsaWdodGx5IHRhbGxlciBmb3IgbW9kZXJuIGZlZWwgKi9cclxuICBib3JkZXItcmFkaXVzOiAwcmVtOyAvKiBDb25zaXN0ZW50IHJvdW5kZWQgY29ybmVycyAqL1xyXG4gIGJvcmRlcjogbm9uZTsgLyogTGlnaHRlciwgc3VidGxlIGJvcmRlciAqL1xyXG4gIGZvbnQtc2l6ZTogMXJlbTsgLyogU3RhbmRhcmQgcmVhZGFibGUgZm9udCBzaXplICovXHJcbiAgY29sb3I6ICMzMzM7IC8qIERhcmtlciB0ZXh0IGZvciByZWFkYWJpbGl0eSAqL1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDsgLyogR29vZCBpbnRlcm5hbCBwYWRkaW5nICovXHJcbiAgdHJhbnNpdGlvbjpcclxuICAgIGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LFxyXG4gICAgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYnJvd3NlciBzdHlsaW5nIGZvciBzZWxlY3RzICovXHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg4ODsgLyogU2xpZ2h0bHkgZGFya2VyIHBsYWNlaG9sZGVyIGZvciB2aXNpYmlsaXR5ICovXHJcbiAgb3BhY2l0eTogMTsgLyogRW5zdXJlIGNvbnNpc3RlbmN5IGFjcm9zcyBicm93c2VycyAqL1xyXG59XHJcblxyXG4vKiBGb2N1cyBzdGF0ZSBmb3IgaW5wdXRzIGFuZCBzZWxlY3RzICovXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXHJcbi5mb3JtLXNlbGVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBQcmltYXJ5IGJsdWUgZm9jdXMgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4xNSk7IC8qIFNvZnRlciBmb2N1cyBzaGFkb3cgKi9cclxuICBvdXRsaW5lOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBvdXRsaW5lICovXHJcbn1cclxuXHJcbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgYWRkIGEgYml0IG1vcmUgdmVydGljYWwgc3BhY2luZyBiZXR3ZWVuIHN0YWNrZWQgZWxlbWVudHMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLnNlYXJjaC1iYXIgLnJvdyA+IGRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBBZGQgdmVydGljYWwgc3BhY2UgYmV0d2VlbiBzdGFja2VkIGNvbnRyb2xzICovXHJcbiAgfVxyXG4gIC5zZWFyY2gtYmFyIC5yb3cgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyAvKiBObyBtYXJnaW4gYWZ0ZXIgdGhlIGxhc3QgZWxlbWVudCAodGhlIGJ1dHRvbikgKi9cclxuICB9XHJcbn1cclxuLmF1dG9jb21wbGV0ZS1saXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIHRoZSBsaXN0IHJlbGF0aXZlIHRvIGl0cyBwYXJlbnQgLmNvbC1sZy0zICovXHJcbiAgdG9wOiAxMDAlOyAvKiBQbGFjZSBpdCByaWdodCBiZWxvdyB0aGUgaW5wdXQgZmllbGQgKi9cclxuICBsZWZ0OiAxMnB4OyAvKiBBZGp1c3QgZm9yIHBhZGRpbmcvZ3V0dGVyICovXHJcbiAgcmlnaHQ6IDEycHg7IC8qIEFkanVzdCBmb3IgcGFkZGluZy9ndXR0ZXIgKi9cclxuICB6LWluZGV4OiAxMDUwOyAvKiBFbnN1cmUgaXQgZmxvYXRzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXHJcbiAgbWF4LWhlaWdodDogMjAwcHg7IC8qIFByZXZlbnQgaXQgZnJvbSBnZXR0aW5nIHRvbyBsb25nICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5hYmxlIHNjcm9sbGluZyBpZiBtYXgtaGVpZ2h0IGlzIHJlYWNoZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7IC8qIE1ha2UgaXQgdmlzdWFsbHkgY29udGludW91cyB3aXRoIHRoZSBpbnB1dCBmaWVsZCAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtOyAvKiBPbmx5IGJvdHRvbSBjb3JuZXJzIHJvdW5kZWQgKi9cclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBsaXN0LXN0eWxlOiBub25lOyAvKiBSZW1vdmUgYnVsbGV0IHBvaW50cyAqL1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hdXRvY29tcGxldGUtbGlzdCAubGlzdC1ncm91cC1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXV0b2NvbXBsZXRlLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwLjZyZW0gMTBweCAwcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uYnRuLWdyb3VwIGxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYnRuLWdyb3VwLmFjdGl2ZSBsYWJlbCB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCAuYnRuOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG46bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG59XHJcbi5oZWFkZXItc2VhcmNoLWlucHV0IGlucHV0IHtcclxuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1pbmRlbnQ6IDIwcHg7XHJcbn1cclxuLmhlYWRlci1zZWFyY2gtaW5wdXQgaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiA4cHg7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBiYWNrZ3JvdW5kIDAuM3MgZWFzZSxcclxuICAgIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBBcGFydG1lbnQgKi9cclxuLnNlYXJjaC1iYXIuYXBhcnRtZW50IHtcclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTNmMmZkLCAjZmZmZmZmKTsgKi9cclxufVxyXG5cclxuLyogVmlsbGEgKi9cclxuLnNlYXJjaC1iYXIudmlsbGEge1xyXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYzZTAsICNmZmZmZmYpOyAqL1xyXG59XHJcblxyXG4vKiBJbmRlcGVuZGVudCBIb3VzZSAqL1xyXG4uc2VhcmNoLWJhci5pbmRlcGVuZGVudGhvdXNlIHtcclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZThmNWU5LCAjZmZmZmZmKTsgKi9cclxufVxyXG5cclxuLyogU3R1ZGlvICovXHJcbi5zZWFyY2gtYmFyLnN0dWRpbyB7XHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzZTVmNSwgI2ZmZmZmZik7ICovXHJcbn1cclxuXHJcbi8qIFBsb3QgKi9cclxuLnNlYXJjaC1iYXIucGxvdCB7XHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZTdmNiwgI2ZmZmZmZik7ICovXHJcbn1cclxuXHJcbi8qIEZhcm1MYW5kICovXHJcbi5zZWFyY2gtYmFyLmZvcm1sYW5kIHtcclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjFmOGU5LCAjZmZmZmZmKTsgKi9cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.module */ 1795);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ 3437);
/* harmony import */ var _modals_interested_modal_interested_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/interested-modal/interested-modal.component */ 5882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/gobal-modal/gobal-modal.component */ 869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent,
        _modals_interested_modal_interested_modal_component__WEBPACK_IMPORTED_MODULE_2__.InterestedModalComponent,
        _modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_3__.GlobalModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], exports: [_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent,
        _modals_interested_modal_interested_modal_component__WEBPACK_IMPORTED_MODULE_2__.InterestedModalComponent,
        _modals_gobal_modal_gobal_modal_component__WEBPACK_IMPORTED_MODULE_3__.GlobalModalComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://ec2-16-171-206-83.eu-north-1.compute.amazonaws.com:3001',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map