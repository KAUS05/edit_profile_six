//navbar
const notification_btn = document.getElementById("notification_btn");
const notification_list = document.getElementById("notification_list");

notification_list.style.display = "none";

notification_btn.addEventListener("click", e => {
  if (notification_list.style.display === "none") {
    notification_list.style.display = "block";
  } else {
    notification_list.style.display = "none";
  }
});

const dropdown_btn = document.getElementById("dropdown_btn");
const dropdown_list = document.getElementById("dropdown_list");

dropdown_list.style.display = "none";

dropdown_btn.addEventListener("click", e => {
  if (dropdown_list.style.display === "none") {
    dropdown_list.style.display = "block";
  } else {
    dropdown_list.style.display = "none";
  }
});

//sidebar
const left = document.querySelector(".sidebar_left");
function openSideMenu(e) {
  document.getElementById("side-menu").style.width = "220px";
  document.querySelector(".manage_campaign_right").style.marginLeft = "100px";
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  document.querySelector(".manage_campaign_right").style.marginLeft = "0px";
}

//dropdown
document
.querySelector(".custom-select-wrapper-language")
  .addEventListener("click", function() {
    this.querySelector(".custom-select-language").classList.toggle(
      "open-language",
    );
  });

for (const option of document.querySelectorAll(".custom-option-language")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("selected-language")) {
      this.parentNode
        .querySelector(".custom-option-language.selected-language")
        .classList.remove("selected-language");
      this.classList.add("selected-language");
      this.closest(".custom-select-language").querySelector(
        ".custom-select__trigger-language span",
      ).textContent = this.textContent;
    }
  });
}

//phone
// phone

var telInput = $("#phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({
  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  preferredCountries: ["sa", "ae", "qa", "om", "bh", "kw", "ma"],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      callback(countryCode);
    });
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js",
});

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);
