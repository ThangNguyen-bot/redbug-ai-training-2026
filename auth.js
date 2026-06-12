(function () {
  const USERNAME = "redbug";
  const PASSWORD = "redbugvn123";
  const AUTH_KEY = "redbug_ai_training_auth_v1";

  function unlock() {
    document.body.classList.add("rb-auth-ok");
    const overlay = document.querySelector(".rb-auth-overlay");
    if (overlay) overlay.remove();
  }

  function showLogin() {
    const overlay = document.createElement("div");
    overlay.className = "rb-auth-overlay";
    overlay.innerHTML = `
      <div class="rb-auth-card" role="dialog" aria-modal="true" aria-label="Redbug AI Training Login">
        <div class="rb-auth-logo">
          <span class="rb-auth-logo-mark"></span>
          Redbug AI Training
        </div>
        <h1>Đăng nhập</h1>
        <p>Website này chỉ dành cho team Redbug tham dự buổi AI Training.</p>

        <form id="rbAuthForm">
          <div class="rb-auth-field">
            <label for="rbUser">Username</label>
            <input id="rbUser" name="username" type="text" autocomplete="username" autofocus>
          </div>

          <div class="rb-auth-field">
            <label for="rbPass">Password</label>
            <input id="rbPass" name="password" type="password" autocomplete="current-password">
          </div>

          <button class="rb-auth-btn" type="submit">Vào website</button>
          <div id="rbAuthError" class="rb-auth-error">Sai username hoặc password. Vui lòng thử lại.</div>
        </form>

        <div class="rb-auth-note">Internal training material · Redbug Vietnam</div>
      </div>
    `;

    document.body.appendChild(overlay);

    const form = document.getElementById("rbAuthForm");
    const error = document.getElementById("rbAuthError");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("rbUser").value.trim();
      const password = document.getElementById("rbPass").value;

      if (username === USERNAME && password === PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, "1");
        unlock();
      } else {
        error.classList.add("show");
        document.getElementById("rbPass").value = "";
        document.getElementById("rbPass").focus();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem(AUTH_KEY) === "1") {
      unlock();
    } else {
      showLogin();
    }
  });
})();
