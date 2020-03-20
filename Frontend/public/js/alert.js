var base_url = "http://localhost/";
function RegistrationForm(name, email, password, ipaddress) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.ipaddress = ipaddress;
}

RegistrationForm.prototype.postData = function() {
  //   console.log(this.longurl, "from short");
  //   var myUrl = this.longurl;
  // $.ajax({
  //     type: "POST",
  //     url: "http://localhost:8080/postUrl",
  //     headers: {
  //         "Content-Type": "application/json; charset=utf-8"
  //     },
  //     data: JSON.stringify({
  //         originalUrl:myUrl
  //     }),
  //     beforeSend: function() {
  //         $("#loader").show();
  //     },
  //     // On Successful posting
  //     success: function(data) {
  //       console.log(data);
  //       console.log(data.shortUrl);
  //       var short = data.shortUrl;
  //       $('#myInput').val(short);
  //       $('#copydata').html('<button class="btn" onclick="myFunction()">Copy text</button>');
  //     },
  //     complete: function() {
  //         $("#loader").hide();
  //     },
  //     // In case of error in POSTING login data
  //     error: function(err) {},
  //     statusCode: {
  //         401: function() {
  //             alert("401 status code! user error");
  //         },
  //     }
  // });
};
RegistrationForm.prototype.Ipaddress = function() {
  var token = "2301df05917fcb";
  var name = this.name;
  var email = this.email;
  var password = this.password;
  $.ajax({
    type: "GET",
    url: "https://ipinfo.io?token=" + token,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    //   data: JSON.stringify({
    //       originalUrl:myUrl
    //   }),
    //   beforeSend: function() {
    //       $("#loader").show();
    //   },
    // On Successful posting
    success: function(data) {
      console.log(data.ip);
      var ipaddress = data.ip;
      console.log("data", name, email, password);
      var submitClass = new RegistrationForm(name, password, email, ipaddress);
      submitClass.submitData();
      // localStorage.setItem("count", 0);
      // console.log(data.shortUrl);
      // var short = data.shortUrl;
      // $('#myInput').val(short);
      // $('#copydata').html('<button class="btn" onclick="myFunction()">Copy text</button>');
    },
    //   complete: function() {
    //       $("#loader").hide();
    //   },
    // In case of error in POSTING login data
    error: function(err) {
      console.log(err);
    },
    statusCode: {
      401: function() {
        alert("401 status code! user error");
      }
    }
  });
};
RegistrationForm.prototype.submitData = function() {
  console.log("ipaddress", this.ipaddress);
  console.log("this", this.name, this.password, this.email, this.ipaddress);
};

$(document).ready(function() {
  $("#loader").hide();
});
$(document).on("click", "#send", function() {
  var name = $("#name").val();
  var password = $("#password").val();
  var email = $("#email").val();
  //   var lengthyurl = $("#url").val();
  //   console.log(lengthyurl);
  //   var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  //   if (!re.test(lengthyurl)) {
  //     alert("url error");
  //     return false;
  //   }
  //   var portUrl = new Short(lengthyurl);
  //   portUrl.postUrl();
  var register = new RegistrationForm("shubham", "mehta", "123456", "");
  register.Ipaddress();
  //   register.submitData();
});
