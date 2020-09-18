// var expect  = require("chai").expect;
// var request = require("request");
var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");


describe("Testing", function() {
    it("Testing Post Request using Mocha for tic tac toe game api", function(done) {
        server.post('/api/check/')
        .expect("Content-type",/json/)
        .expect(200) // This is HTTP response.set('Content-Type', 'application/json')
        .send({"board":[["X", "O", ""],["X", "O", ""],["X", "", ""]], "available":[1,2,3,4]})
        .end(function(err,res){
            //your code to Test
            // HTTP status should be 200
            res.status.should.equal(200);
            done();
        })
    });        
});