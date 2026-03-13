<heading size="1" align="center">Connecting WiFi</heading>
<hr>
<align type="center"><text type="bold">First make sure you are on this page by choosing non speech option.</text></align>
<image>arch-linux-2.png</image>
<hr>
<heading size="4" align="left">Process Begins From Here</heading>
Type This in Your Arch Linux ISO commandline,You will then see something like this.
<code>
iwctl
device list
<image>iwctl-device-list-2-removebg-preview.png</image>
</code>
<collapse heading="If you see off under Powered section " color="#29b8ff" bg-color="#57cdff">
<align type="center"><text color="#29b8ff" type="bold italic">
Type This in your CommandLine.
</text></align>
<code>
iwctl device {device name(in my case wlan0)} set-property Powered on
</code>
</collapse>