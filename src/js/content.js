(() => {
  document.body.addEventListener(
    "click",
    function (e) {
      console.log("target", e.target.remove());
    },
    false
  );
})();
