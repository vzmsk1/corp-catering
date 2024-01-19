// ---------------------------------- swiper ---------------------------------
import './swiper';

// ---------------------------------- styles ---------------------------------

import '../scss/style.scss';

// ---------------------------------- utils ---------------------------------

import * as utils from './utils/utils.js';

// menu
utils.menuInit();

// dynamic dom
utils.dynamicDOM();

// showmore
utils.showmore();

// accordion
utils.accordion();

// ---------------------------------- form ----------------------------------
import * as forms from './utils/form/form.js';

// form fields
forms.formFieldsInit({ viewPass: false });

// form submit
forms.formSubmit();

// ------------------------------- input mask -------------------------------

import './utils/form/input_mask.js';

// ---------------------------------- libs ----------------------------------

// dynamic dom
import './libs/dynamic_dom.js';

// --------------------------------- modals ---------------------------------

import './libs/modals.js';

// --------------------------------- yandex-map -----------------------------

import './libs/ymaps';

// ------------------------------- own scripts ------------------------------

import './utils/script.js';
