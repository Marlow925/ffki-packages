"use strict"
define(["lib/helper"], function (Helper) {
  return function (nodeInfo) {
    var el = document.createElement("div")

    update(nodeInfo)

    function dlEntry(dl, dict, key, prettyName) {
      var v = Helper.dictGet(dict, key.split("."))

      if (v === null)
        return

      var dt = document.createElement("dt")
      var dd = document.createElement("dd")

      dt.textContent = prettyName
      if (v instanceof Array) {
        var tn = v.map(function (d) { return document.createTextNode(d) })
        tn.forEach(function (node) {
          if (dd.hasChildNodes())
            dd.appendChild(document.createElement("br"))

          dd.appendChild(node)
        })
      } else
        dd.textContent = v

      dl.appendChild(dt)
      dl.appendChild(dd)
    }

    function update(nodeInfo) {
      var list = document.createElement("dl")

      dlEntry(list, nodeInfo, "hostname", "Nodename")
      dlEntry(list, nodeInfo, "owner.contact", "Contact")
      dlEntry(list, nodeInfo, "hardware.model", "Model")
      dlEntry(list, nodeInfo, "network.mac", "Primary MAC")
      dlEntry(list, nodeInfo, "network.addresses", "IP-Adress")
      dlEntry(list, nodeInfo, "software.firmware.release", "Firmware")
      dlEntry(list, nodeInfo, "software.fastd.enabled", "Mesh-VPN")
      dlEntry(list, nodeInfo, "software.autoupdater.enabled", "Automatic Updates")
      dlEntry(list, nodeInfo, "software.autoupdater.branch", "Branch")

      el.appendChild(list)
    }

    return { title: document.createTextNode("Overview")
           , render: function (d) { d.appendChild(el) }
           , destroy: function () {}
           }
  }
})
