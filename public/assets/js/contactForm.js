$(document).ready(function () {

  if (document.getElementById('messageForm')) {
    // Your code here for the contact page
    
    const MAX = 200;

    const fields = {
      contactname: $("#contactname"),
      companyname: $("#companyname"),
      email: $("#email"),
      telephone: $("#telephone"),
      message: $("#message")
    };

    const errors = {
      contactname: $("#contactname-error"),
      companyname: $("#companyname-error"),
      email: $("#email-error"),
      telephone: $("#telephone-error"),
      message: $("#message-error")
    };

    let valid = {
      contactname: false,
      companyname: false,
      email: false,
      telephone: false,
      message: false
    };

    // ---------------- POPUP ----------------

    const popup = $("#popup");
    const popupMessage = $("#popupMessage");
    const closePopup = $("#closePopupButton");
    let lastFocusedElement = null;

    function openPopup(message) {
      lastFocusedElement = document.activeElement;
      popupMessage.text(message);
      popup.removeAttr("hidden");
      popupMessage.focus();
    }

    function closePopupFn() {
      popup.attr("hidden", true);
      if (lastFocusedElement) lastFocusedElement.focus();
    }

    closePopup.on("click", closePopupFn);
    $(document).on("keydown", function (e) {
      if (e.key === "Escape") closePopupFn();
    });

    // ---------------- VALIDATORS ----------------

    const validators = {
      contactname: v => {
        if (!v) return "Full name is required";
        if (!/^[a-zA-Z ]{3,}$/.test(v)) return "Use letters only (min 3)";
        return "";
      },
      companyname: v => {
        if (!v) return "Company name is required";
        if (!/^[a-zA-Z \-]{3,}$/.test(v)) return "Use letters only (min 3)";
        return "";
      },
      email: v => {
        if (!v) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email";
        return "";
      },
      telephone: v => {
        if (!v) return "Telephone is required";
        const clean = v.replace(/[\s()-]/g, "");
        if (!/^(\+?\d{10,15})$/.test(clean))
          return "Use 10–15 digits (may include +)";
        return "";
      },
      message: v => {
        if (!v) return "Message is required";
        if (!/^[a-zA-Z ,.]+$/.test(v))
          return "Letters, spaces, commas and full stops only";
        if (v.length < 10) return "Message must be at least 10 characters";
        return "";
      }
    };

    // ---------------- LIVE VALIDATION ----------------

    Object.keys(fields).forEach(key => {
      fields[key].on("input blur", function () {
        const error = validators[key](this.value.trim());

        if (error) {
          errors[key].text(error).show();
          fields[key].css("border", "2px solid #b00020");
          valid[key] = false;
        } else {
          errors[key].text("").hide();
          fields[key].css("border", "1px solid #555");
          valid[key] = true;
        }
      });
    });

    // ---------------- WORD COUNT ----------------

    function updateWordCount() {
      const len = fields.message.val().length;
      const remaining = MAX - len;
      $("#wordCount").text(`${len}/${MAX}`);
      $("#wordCount").attr("aria-label", `${remaining} characters remaining`);
    }

    updateWordCount();
    fields.message.on("input", updateWordCount);

    // ---------------- SUBMIT ----------------

    $("#sendMessage").on("click", function (e) {
      e.preventDefault();

      Object.keys(fields).forEach(k => fields[k].trigger("blur"));

      for (const k in valid) {
        if (!valid[k]) {
          fields[k].focus();
          return;
        }
      }

      $("form")[0].reset();
      Object.keys(valid).forEach(k => valid[k] = false);
      $(".error-text").hide();
      updateWordCount();
      openPopup("Success! Message has been sent");
    });
    // console.log('This is the Contact page!');
  }
});
