fetch("CommonSideNav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("sideNavC").innerHTML = data;
  });
