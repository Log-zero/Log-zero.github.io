(function () {
  const site = "https://rlaalstjd423.goatcounter.com";

  function getPath() {
    let path = location.pathname;
    if (!path.startsWith("/")) path = "/" + path;
    if (!path.endsWith("/")) path += "/";
    return path;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const path = getPath();
    const url = site + "/counter/" + encodeURIComponent(path) + ".json";

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.status);
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