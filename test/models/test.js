it("Admin default account", (done) => {
  var username = "admin"
  var password = "123456"
  supertest(app)
      .post("/login") // Post request to the /todos URL
      .send({
          email,
          password
      })
      .expect(200)
      .expect((res) => {
          expect(res.headers).toIncludeKey('x-auth')
          expect(res.body._id).toExist();
          expect(res.body.email).toBe(email);
      })
      .end((err) => {
          if(err){
              return done(err);
          }
          User.findOne({username}).then((user) => {
              expect(user).toExist();
              expect(user.password).toNotBe(password);
              done();
          }).catch((e) => done(e));
      });
});