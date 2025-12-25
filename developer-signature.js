<script>
(function () {
  "use strict";
  try {

    var DEV = {
      name: "Amarire Dev",
      role: "Web Developer",
      portfolio: "https://amarire.dev",
      email: "contact@amarire.dev",
      year: {
        created: 2025,
        current: new Date().getFullYear()
      },
      version: "2.2.0",
      social: {
        github: "https://github.com/Said-Amarire",
        linkedin: "https://www.linkedin.com/in/said-amarire/",
        twitter: "https://x.com/SaidAmarire",
        stackoverflow: "https://stackoverflow.com/users/30456632/amarire-dev",
        devto: "https://dev.to/amarire-dev",
        youtube: "https://www.youtube.com/@Amarire-Dev",
        medium: "https://medium.com/@amarire.dev",
        fiverr: "https://www.fiverr.com/saidamarire",
        upwork: "https://www.upwork.com/freelancers/~0125c71eb127f43b1c"
      }
    };

    var SITE = {
      url: window.location.origin,
      page: window.location.href,
      projectID: window.location.hostname.replace(/\./g, "-") + "-pid",
      fingerprint: btoa(
        window.location.hostname + "|" +
        DEV.portfolio + "|" +
        DEV.year.created
      ).substr(0, 24)
    };

    document.documentElement.appendChild(
      document.createComment(
        "dev:" + DEV.name +
        "|role:" + DEV.role +
        "|pid:" + SITE.projectID +
        "|fp:" + SITE.fingerprint
      )
    );

    function addMeta(name, content) {
      if (!document.querySelector('meta[name="' + name + '"]')) {
        var m = document.createElement("meta");
        m.name = name;
        m.content = content;
        document.head.appendChild(m);
      }
    }

    addMeta("author", DEV.name);
    addMeta("creator", DEV.name);
    addMeta("generator", DEV.name);

    if (!document.querySelector('link[rel="author"]')) {
      var authorLink = document.createElement("link");
      authorLink.rel = "author";
      authorLink.href = DEV.portfolio;
      document.head.appendChild(authorLink);
    }

    if (!document.getElementById("ad-entity")) {
      var schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": SITE.page,
        "creator": {
          "@type": "Person",
          "name": DEV.name,
          "url": DEV.portfolio,
          "email": DEV.email,
          "jobTitle": DEV.role,
          "sameAs": Object.values(DEV.social)
        },
        "identifier": SITE.projectID
      };

      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "ad-entity";
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
    }

    var hidden = document.createElement("div");
    hidden.style.cssText =
      "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;";
    hidden.setAttribute("aria-hidden", "true");

    Object.values(DEV.social).forEach(function (url) {
      var a = document.createElement("a");
      a.href = url;
      a.rel = "noopener";
      a.textContent = DEV.name;
      hidden.appendChild(a);
    });

    document.body.appendChild(hidden);

    window.DEV_SIGNATURE = {
      n: DEV.name,
      y: DEV.year.created,
      p: SITE.projectID
    };

  } catch (e) {}
})();
</script>

<noscript>
<!-- Developed by Amarire Dev — https://amarire.dev — contact@amarire.dev -->
</noscript>
