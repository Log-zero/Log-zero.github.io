(function () {
  const site = "https://rlaalstjd423.goatcounter.com";

  function normalizePath(path) {
    if (!path.endsWith("/")) {
      return path + "/";
    }
    return path;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const path = normalizePath(location.pathname);
    const url = site + "/counter/" + encodeURIComponent(path) + ".json";

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("No counter");
        return res.json();
      })
      .then(data => {
        const el = document.getElementById("goatcounter-views");
        if (el) el.textContent = data.count ?? 0;
      })
      .catch(() => {
        const el = document.getElementById("goatcounter-views");
        if (el) el.textContent = "0";
      });
  });
})();