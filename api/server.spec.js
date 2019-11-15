const request = require("supertest")
const server = require("./server")

describe("server", () => {
    describe("[GET] / endpoint", () => {
        test("test db env", () => {
            expect(process.env.DB_ENV).toBe("testing")
        })
    })
})