
var app = new Vue({
    el: "#app",

    data: {
        images:  [
            {
                name: "bright_dark_contrast",
                caption: "Quality spruce",
                theme: "light"
            },
            {
                name: "carving",
                caption: "Quick Prototyping",
                theme: "light"
            },
            {
                name: "contrast",
                caption: "Bright Spruce GT1080",
                theme: "dark"
            },
            {
                name:  "finished-bright",
                caption: "Bright Spruce M960",
                theme: "dark"
            },
            {
                name: "finished-dark",
                caption: "Gloss finish",
                theme: "dark"
            },
            {
                name: "front_plate-bright",
                caption: "Built with precision",
                theme: "light"
            },
            {
                name: "full_darkbg",
                caption: "Dark spruce T100",
                theme: "dark"
            },
            {
                name: "necks",
                caption: "Choose prebuilt parts",
                theme: "light"
            },
            {
                name: "neck-semi",
                caption: "Fret styles",
                theme: "light"
            },
            {
                name: "progress-dark",
                caption: "Building process",
                theme: "light"
            },
            {
                name: "wall_bright",
                caption: "Cedar M8080",
                theme: "dark"
            },
            {
                name: "wood_pallette",
                caption: "Build your own rosette",
                theme: "dark"
            },
            {
                name: "wood-mixed",
                caption: "Choose your perfect wood combinations",
                theme: "light"
            },
        ]
    },
    methods: {
        getPath (img) {
            return "edited/" + img + ".png";
        },

        getZIndex (i) {
            return this.images.length - i;
        },

        isLeft (index) {
            return index % 2 == 0;
        },

        onClick (i) {
            let el =  $(".img-container").eq(i);
            if (el.hasClass("active")) {
                el.removeClass("active");
            }
            else {
                $(".img-container").removeClass("active");
                el.addClass("active");
            }
        },

        mouseOver (i) {
            if (this.isLeft(i)) {
                $(".img-container").eq(i+1).addClass("no-width");
            }
            else {
                $(".img-container").eq(i-1).addClass("no-width");
            }
            $(".img-container").eq(i).addClass("full-width");
        },

        mouseLeave () {
            $(".img-container").removeClass("no-width full-width");
        },

        isDark (i) {
            return this.images[i].theme === "dark";
        },

        isLight (i) {
            return this.images[i].theme === "light";
        },

    }
});
