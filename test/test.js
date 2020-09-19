var chai = require("chai")
var chaiHttp = require("chai-http")
var server = require("../app")


// Assertion style
chai.should()

chai.use(chaiHttp)


describe("Tic Tac Toe Game API", function() {
    it("Testing Post Request", function(done) {
        const payload = {
            "board":[["X", "O", ""],["X", "O", ""],["X", "", ""]],
            "available": [1,2,3,4]
        }
        chai.request(server)
        .post('/api/check/')
        // .send({"board":[["X", "O", ""],["X", "O", ""],["X", "", ""]], "available":[1,2,3,4]})
        .send(payload)
        .end(function(err,res){
            // HTTP status should be 200
            res.should.have.status(200)
            res.body.should.have.property("status")
            res.body.should.have.property("message")
            res.body.status.should.equal(true)
            done();
        })
    });        
});