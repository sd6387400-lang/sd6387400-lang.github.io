<heading size="1" align="center">Disk Partitioning</heading>
<hr>
<br>

<box color="accent" type="dotted">
  <heading size="5" align="center">⚠️ Single Boot Users, Stop Here!</heading>
  <align type="center">
    <text color="dim">If you are planning to wipe your entire drive and <strong>only</strong> use Arch Linux, you can skip this section entirely. We will format the drive from inside the Arch ISO later.</text>
  </align>
  <br>
  <align type="center">
    <text color="text" type="bold">This section is strictly for making space on a Dual Boot system.</text>
  </align>
</box>
<br><br>

<heading size="2" align="left">Shrinking on Windows</heading>
<text color="dim">Using the built-in Disk Management tool.</text>
<br><br>

<box color="accent1" type="solid">
  <list type="number">
    Press <kbd>Win</kbd> + <kbd>X</kbd> on your keyboard.
    Select <text color="accent1" type="bold">Disk Management</text>.
    Locate and select the partition you want to shrink to make room for Arch.
    Right-click on the partition and choose <text color="bg" bg-color="accent1" type="bold">Shrink Volume</text>.
    Follow the prompts to shrink the partition.
    Leave the newly created space as <text color="accent1" type="bold">Unallocated</text> — do not format it!
  </list>
</box>
<br><br>

<heading size="2" align="left">Shrinking on Linux</heading>
<text color="dim">Using the GParted graphical utility.</text>
<br><br>

<box color="accent2" type="solid">
  <collapse2 heading="Show Installation Commands" unextendedhr="true" extendedhr="true">
<code># Arch Linux
sudo pacman -S gparted

# Fedora Linux
sudo dnf install gparted

# Debian/Ubuntu
sudo apt install gparted</code>
  </collapse2>

  <list type="number">
    Open the <text color="accent2" type="bold">GParted</text> application.
    Select the partition you wish to shrink.
    Right-click it and select <text color="bg" bg-color="accent2" type="bold">Resize/Move</text>.
    Adjust the size to leave unallocated space for Arch Linux.
    Click the <text color="accent3" type="bold">Green Checkmark</text> at the top to apply all operations.
  </list>
</box>
<br>
<hr>
<br>

<align type="center">
  <tw state="continuous" color="accent" type="bold">Space created? Awesome. Let's move on to the actual installation!</tw>
</align>
