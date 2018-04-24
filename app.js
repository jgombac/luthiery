
var app = new Vue({
    el: "#app",

    data: {
        images:  [
            {
                name: "bright_dark_contrast",
                theme: "dark"
            },
            {
                name: "carving",
                theme: "light"
            },
            {
                name: "contrast",
                theme: "dark"
            },
            {
                name:  "finished-bright",
                theme: "dark"
            },
            {
                name: "finished-dark",
                theme: "dark"
            },
            {
                name: "front_plate-bright",
                theme: "light"
            },
            {
                name: "full_darkbg",
                theme: "dark"
            },
            {
                name: "necks",
                theme: "light"
            },
            {
                name: "neck-semi",
                theme: "light"
            },
            {
                name: "progress-dark",
                theme: "light"
            },
            {
                name: "wall_bright",
                theme: "dark"
            },
            {
                name: "wood_pallette",
                theme: "dark"
            },
            {
                name: "wood-mixed",
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
