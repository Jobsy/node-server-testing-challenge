const request = require("supertest")
const server = require("./server")

describe("server", () => {
    describe("[GET] / endpoint", () => {
        test("test db env", () => {
            expect(process.env.DB_ENV).toBe("testing")
        })

        test("should return status code 200 ok", async () => {
            const response = await request(server).get("/")
            expect(response.status).toBe(200)
        })

        test("should return the rigth response body", async () => {
            const response = await request(server).get("/")
            expect(response.text).toEqual("It's alive!")
        })
    })
})