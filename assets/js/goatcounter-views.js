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
    const encoded = encodeURIComponent(path);
    const url = site + "/counter/" + encoded + ".json";

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then(data => {
        const el = document.getElementById("goatcounter-views");
        if (el) el.textContent = data.count ?? 0;
      })
      .catch(err => {
        const el = document.getElementById("goatcounter-views");
        if (el) el.textContent = "0";
        console.error("GoatCounter error:", err);
      });
  });
})();