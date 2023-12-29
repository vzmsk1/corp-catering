import { removeClasses, menuClose, bodyLockStatus } from './utils';

// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // ---------------------------- handler functions ---------------------------
    const clickHandler = (e) => {
        const target = e.target;

        if (window.innerWidth <= 768) {
            if (target.closest('.offer-card__head')) {
                const parent = target.closest('.offer-card');

                if (!parent.classList.contains('_active')) {
                    removeClasses(document.querySelectorAll('.offer-card'), '_active');
                    parent.classList.add('_active');
                } else {
                    parent.classList.remove('_active');
                }
            }
        }
    };
    const resizeHandler = () => {
        if (window.innerWidth > 768) {
            if (bodyLockStatus && document.documentElement.classList.contains('_menu-opened')) {
                menuClose();
            }
        }
    };

    // ----------------------------- document events ----------------------------
    document.addEventListener('click', clickHandler);

    // ------------------------------ window events -----------------------------
    window.addEventListener('resize', resizeHandler);
});

// --------------------------------------------------------------------------

window.addEventListener('load', function () {
    document.body.style.opacity = 1;
});
