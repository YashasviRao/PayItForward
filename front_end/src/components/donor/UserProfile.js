var UserProfile = (function() {
    var eid = "";
  
    var getId = function() {
      return eid;    
    };
  
    var setId = function(id) {
      eid = id;     
      
    };
  
    return {
      getId: getId,
      setId: setId
    }
  
  })();
  
  export default UserProfile;