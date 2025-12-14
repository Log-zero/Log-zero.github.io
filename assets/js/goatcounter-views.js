(function () {
  const site = "https://rlaalstjd423.goatcounter.com";

  document.addEventListener("DOMContentLoaded", function () {
    // GoatCounter에 실제로 저장된 path 그대로 사용
    let path = location.pathname.replace(/\/$/, "");

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