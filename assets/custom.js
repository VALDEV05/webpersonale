function init(){
    introTemplateAnimation();

}
function introTemplateAnimation() {
    const introContainer = jQuery("body .intro-template-custom");
    const header = jQuery(".site-header");
    const main = jQuery("body .site-main");
    const footer = jQuery(".site-footer");
    header.css("opacity", "0");
    main.css("opacity", "0");
    footer.css("opacity", "0");
    setTimeout(() => {
        gsap.fromTo(
            introContainer, {
                opacity: "1",
            }, {
                opacity: "0",
                duration: 0.8,
                ease: "expo.inOut",

            }
        );
        setTimeout(function() {
            gsap.fromTo(
                header, {
                    opacity: "0",
                }, {
                    opacity: "1",
                    duration: 0.5,
                    ease: "expo.inOut",
                }
            );
            gsap.fromTo(
                main, {
                    opacity: "0",
                }, {
                    opacity: "1",
                    duration: 0.5,
                    ease: "expo.inOut",
                }
            );
            gsap.fromTo(
                footer, {
                    opacity: "0",
                }, {
                    opacity: "1",
                    duration: 0.5,
                    ease: "expo.inOut",
                }
            );
        }, 800);
    }, 1900);
    setTimeout(() => {
        introContainer.addClass("remove");
    }, 3000);
}

jQuery(document).ready(init);