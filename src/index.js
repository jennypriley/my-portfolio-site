import WebFont from "webfontloader"
if (typeof window === "undefined") {
  global.window = {}
}
WebFont.load({
  google: {
    families: ["Lato:300,400,700", "Roboto:300,400,700", "sans-serif"],
  },
})
