Freifunk Kiel - gluon-packages
============================

### gluon-au-change

This package changes the autoupdater branch to stable on each update.

It should be used only for a short period of time. 

For example in case in your community you have to reset a lot of routers
back to the stable branch due to a time, where some new not completely supported
router models had to be installed with the experimental firmware.

### gluon-config-mode-contact-info-anonymous-hint
This is a copy of the gluon standard package `gluon-config-mode-contact-info` 
with an extra error message hint, that you can enter space if you want to run
your node anonymously.

You have to adapt these settings in your i18n files:

This package Replaces the standard gluon-package `gluon-config-mode-contact-info`

### gluon-config-mode-contact-obligatory

_This is the old obsolete package for gluon < 2016.2 ! The option obligatory 
was implemented in gluon differently in 2016.2. If you depend on the adapted 
warning message use the package `gluon-config-mode-contact-info-anonymous-hint`_

Set a custom string as owner contact that will be distributed in the mesh. 
You can define that the owner contact field is obligatory with the following 
code in your `site.conf`:

    owner = {
        obligatory = true
    },

This package Replaces the standard gluon-package `gluon-config-mode-contact-info`

### gluon-config-mode-hostname-no-pretty

Adds an extra condition, that the nodes hostname must be of the LUA type "hostname". 
This will disallow some possibilities that would be allowed since 2016.2 by the new
type `pretty_hostname`. The advantage is, that it allows you to set an invalid default
hostname in your site.conf, so the user is not allowed to use the default hostname 
suggestion any more.

This package replaces the standard gluon-package `gluon-config-mode-hostname`


### gluon-config-mode-usb-media

Enable USB media automount in config mode and set the web path to access it 
(default `/media/`) so the USB storage will be accessible via http://[IPv6]/media/

### gluon-usb-media

Automatically mount your USB media in the configured web path
in `gluon-config-mode-usb-media` if "Enable USB media" is set to true.

### gluon-status-page-en

An exact copy of `gluon-status-page` with just the german strings translated to english.

This package replaces the standard gluon-package `gluon-status-page`

# site-config

In the folder `.site-examples` there are some examples, how to include these packages

# build examples

## update all

    make update

### quick check for errors before build

    make prepare-target V=s

### build only one package

    make prepare-target
    make package/gluon-config-mode-contact-obligatory/compile V=s

### build target ar71xx-generic

    make GLUON_TARGET=ar71xx-generic V=s DEFAULT_GLUON_RELEASE=2016.1.5~exp$(date '+%y%m%d%H%M')+usb-mount          
