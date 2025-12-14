(function () {
  const site = "https://rlaalstjd423.goatcounter.com";
  const path = location.pathname;
  const url = site + "/counter/" + encodeURIComponent(path) + ".json";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById("goatcounter-views");
      if (el) el.textContent = data.count || 0;
    });
})();

