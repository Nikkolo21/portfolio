const rewire = require("rewire")
const serviceWorker = rewire("./serviceWorker")
const checkValidServiceWorker = serviceWorker.__get__("checkValidServiceWorker")
const registerValidSW = serviceWorker.__get__("registerValidSW")
// @ponicode
describe("serviceWorker.register", () => {
    test("0", () => {
        let result = serviceWorker.register("bus_account.mpe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = serviceWorker.register("XCode")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = serviceWorker.register("Safari")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = serviceWorker.register("png.mpg4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = serviceWorker.register("services_recontextualize_front_end.gif")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = serviceWorker.register(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkValidServiceWorker", () => {
    test("0", () => {
        let result = checkValidServiceWorker("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "png.mpg4")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = checkValidServiceWorker("https://", "services_recontextualize_front_end.gif")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = checkValidServiceWorker("https://api.telegram.org/", "XCode")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = checkValidServiceWorker("https://twitter.com/path?abc", "Safari")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = checkValidServiceWorker("http://www.example.com/route/123?foo=bar", "bus_account.mpe")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = checkValidServiceWorker(undefined, undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        let result = registerValidSW("www.google.com", { onSuccess: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = registerValidSW("https://", { onSuccess: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = registerValidSW("https://api.telegram.org/bot", { onSuccess: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = registerValidSW("https://api.telegram.org/bot", { onSuccess: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = registerValidSW("https://api.telegram.org/", { onSuccess: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = registerValidSW(undefined, undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("serviceWorker.unregister", () => {
    test("0", () => {
        let result = serviceWorker.unregister()
        expect(result).toMatchSnapshot()
    })
})
