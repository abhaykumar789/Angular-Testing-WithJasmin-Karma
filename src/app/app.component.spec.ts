
describe('AppComponent', ()=>{ //multiple specs(test cases)
  //Arrange

    //spec-1
   it('[SPEC-1] addition of two variables',()=>{
     //Act
      var result=10+20;
      //Assert
     expect(result).toBe(30);
   });

   //spec-2
   it('[SPEC-2] multiplication of two variables',()=>{
        //Act 
        var result=10*20;
        expect(result).toBe(200);
   });

});
