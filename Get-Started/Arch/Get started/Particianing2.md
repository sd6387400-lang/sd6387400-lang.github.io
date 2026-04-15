<heading size="1" align="center">Disk Partitioning</heading>
<hr>
<br>

<align type="center">
  <tw state="continuous" color="dim" type="italic">Carving out space for your new system.</tw>
</align>
<br><br>

<box color="shape1" type="dotted">
  <heading size="5" align="left">🛑 Single Boot Users: Skip This!</heading>
  <text color="text">If Arch Linux will be the <strong>only</strong> operating system on your drive, you do not need to pre-shrink partitions. We will wipe and format the entire drive from inside the Arch ISO in the next section.</text>
</box>
<br>

<box color="accent" type="solid">
  <heading size="6" align="left">💾 Pro Tip: Backup Your Data</heading>
  <text color="dim">Before modifying partitions, always back up your important files. While safe if done correctly, partitioning always carries a small risk of data loss.</text>
</box>
<br><br>

<heading size="2" align="left">Shrinking from Windows</heading>
<text color="dim">The safest way to shrink a Windows NTFS partition is from within Windows itself.</text>
<br><br>

<box color="shape2" type="solid">
  <list type="number">
    Press <kbd>Win</kbd> + <kbd>X</kbd> and select <text type="bold" color="shape2">Disk Management</text>.
    Locate your main drive (usually <code>C:</code>), right-click it, and select <text bg-color="shape2" color="bg" type="bold">Shrink Volume...</text>
    Enter the amount of space to carve out for Arch Linux in MB (e.g., type <code>51200</code> for 50GB).
    Click the <text type="bold" color="shape2">Shrink</text> button.
    Leave the newly created space exactly as <text type="bold" color="shape1">Unallocated</text>. Do not format it!
  </list>
</box>
<br><br>

<heading size="2" align="left">Shrinking from Linux</heading>
<text color="dim">Using the GParted graphical utility on an existing Linux distro.</text>
<br><br>

<box color="shape3" type="solid">
  <collapse2 heading="📦 Show Commands to Install GParted" unextendedhr="true" extendedhr="true">
<code># Arch Linux
sudo pacman -S gparted

# Fedora Linux
sudo dnf install gparted

# Debian/Ubuntu
sudo apt install gparted</code>
  </collapse2>

  <list type="number">
    Launch the <text type="bold" color="shape3">GParted</text> application.
    Select your target drive from the top-right dropdown menu.
    Right-click the partition you want to shrink and choose <text bg-color="shape3" color="bg" type="bold">Resize/Move</text>.
    Drag the slider to leave unallocated space at the end of the drive.
    Click the <text type="bold" color="shape3">Green Checkmark</text> in the top toolbar to apply all operations.
  </list>
</box>
<br>
<hr>
<br>

<align type="center">
  <tw state="continuous" color="accent" type="bold">Partitioning complete! You are ready to boot the Arch ISO.</tw>
</align>
