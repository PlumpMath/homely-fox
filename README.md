# homely-fox

Making Firefox a little bit more friendlier for me.

Walk on the bleeding edge: [homely-fox@v0.0-alpha][release]

## What does it do?

* make `<C-u>` open the source of the current page in a new tab

## Hack on it / build it yourself

Install the mozilla [addon-sdk][install-sdk].

    $ git clone git://github.com/heyLu/homely-fox
    ...
    $ cd homely-fox
    # edit to your hearts content
    $ cfx run
    # (spawns a new firefox instance with your changes loaded)

[release]: https://github.com/heyLu/homely-fox/releases/download/v0.0-alpha/homely-fox.xpi
[install-sdk]: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/installation.html
