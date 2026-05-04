<hero bg="[https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop)" overlay="dark" opacity="0.8">
<align type="center">
<heading size="1">Arch Linux</heading>
<tw state="once">A simple, lightweight distribution.</tw>
</align>
</hero>
<align type="center">
<badge color="#1793d1">Linux</badge>  <badge color="#1793d1">x86_64</badge>  <badge color="#1793d1">Rolling Release</badge>
</align>
<grid columns="3">
<col>
<stat value="Rolling" label="Release Model" trend="+ Bleeding Edge"></stat>
</col>
<col>
<stat value="KISS" label="Design Principle" trend="Keep It Simple"></stat>
</col>
<col>
<stat value="AUR" label="Ecosystem" trend="+ 80K+ Packages"></stat>
</col>
</grid>
<heading size="3">The Arch Philosophy</heading>
<alert type="info" color="#1793d1">Arch Linux is designed for the competent Linux user. It focuses on elegance, code correctness, minimal system footprint, and relying heavily on the user to make the decisions.</alert>
<tabs>
<tab name="Simplicity">
<box type="dotted" color="accent">
Arch defines simplicity as **without unnecessary additions or modifications**. It ships a minimal base system configured by the user to only add what is purposefully required.
</box>
</tab>
<tab name="Modernity">
Arch strives to maintain the latest stable release versions of its software as long as reasonably possible. It offers bleeding-edge kernels, toolchains, and desktop environments.
</tab>
<tab name="Pragmatism">
Principles are only useful guidelines. Arch relies on technical choices and pragmatism rather than religious adherence to a single ideological stance.
</tab>
<tab name="User Centrality">
Whereas many distributions attempt to be more user-friendly, Arch Linux has always been **user-centric**. The system is exactly what you make it. No more, no less.
</tab>
</tabs>
<heading size="3">Key Characteristics</heading>
<grid columns="2">
<col>
<card>
<heading size="5">System Architecture</heading>
Arch is built to be clean and minimal. It avoids patching upstream software whenever possible, meaning you get the software exactly as the developers intended.
<progress value="100" color="#1793d1">Bloatware Removed</progress>
<progress value="10" color="accent">Pre-installed Utilities</progress>
</card>
</col>
<col>
<card>
<heading size="5">Package Management</heading>
Arch uses pacman, a lightweight, fast, and highly reliable package manager written in C. It handles dependency resolution and seamlessly manages system upgrades.
</card>
</col>
</grid>
<heading size="4">The Pacman Experience</heading>
Updating an Arch system is a continuous process. Because it is a rolling release, there are no "version upgrades" (like moving from Ubuntu 22.04 to 24.04). You just sync and update.
<terminal user="arch@user ~">sudo pacman -Syu</terminal>
Often, users like to customize their package manager to be faster and visually appealing by modifying the configuration file.
<diff>
 * #ParallelDownloads = 5
 * ParallelDownloads = 10
 * #Color
 * Color
 * ILoveCandy
   </diff>
<heading size="3">The Arch User Repository (AUR)</heading>
The <tooltip text="Arch User Repository">AUR</tooltip> is a community-driven repository for Arch users. It contains package descriptions (PKGBUILDs) that allow you to compile a package from source with makepkg and then install it via pacman. If a piece of software exists for Linux, it is almost certainly in the AUR.
<editor file="PKGBUILD" lang="bash">
pkgname=hello-world
pkgver=1.0
pkgrel=1
pkgdesc="A simple hello world script"
arch=('any')
source=('hello-world.sh')
package() {
install -Dm755 hello-world.sh "$pkgdir/usr/bin/hello-world"
}
</editor>
<heading size="3">System Layout</heading>
A newly installed, minimal Arch environment strictly adheres to the modern Linux filesystem hierarchy. It avoids splitting packages into -dev sub-packages, keeping the file tree unified and clean.
<filetree type="line">
<li>/
<ul>
<li>boot/ <ul><li>vmlinuz-linux</li><li>initramfs-linux.img</li></ul></li>
<li>etc/ <ul><li>pacman.conf</li><li>fstab</li></ul></li>
<li>usr/ <ul><li>bin/</li><li>lib/</li></ul></li>
<li>var/ <ul><li>log/</li><li>cache/pacman/pkg/</li></ul></li>
</ul>
</li>
</filetree>
<heading size="3">Is Arch Linux Right For You?</heading>
<collapse heading="View Compatibility Checklist" color="#1793d1" bg-color="transparent">
<checklist>
<check>You want to learn how a Linux operating system actually works under the hood.</check>
<check>You prefer a minimalist approach and want to build your desktop environment from scratch.</check>
<check>You want bleeding-edge software updates as soon as they are released upstream.</check>
<check>You are comfortable using <key>Ctrl</key> + <key>Alt</key> + <key>F3</key> to drop into a TTY and troubleshoot.</check>
<check>You are willing to read documentation before asking for help.</check>
</checklist>
</collapse>
<quote author="The Arch Community" role="Enthusiasts & Developers" avatar="[https://avatars.githubusercontent.com/u/6154722?s=200&v=4](https://avatars.githubusercontent.com/u/6154722?s=200&v=4)">
Arch Linux is the ultimate learning experience. Once you build your system from the ground up, you understand exactly how your OS operates, leaving you in total control.
</quote>
<align type="center">
<btn href="[https://wiki.archlinux.org/](https://wiki.archlinux.org/)" icon="book-open" type="dotted">Explore the Arch Wiki</btn>
</align>
<feedback title="Did this introduction help you understand the Arch Linux philosophy?"></feedback>
