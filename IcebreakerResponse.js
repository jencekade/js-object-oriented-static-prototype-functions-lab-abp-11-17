function IcebreakerResponse(email){
  this.email = email
}


//const data = [];


IcebreakerResponse.BatchCreate = function(data) {
  return data.map(function (emails) {
    return new IcebreakerResponse(emails);
  });
}
