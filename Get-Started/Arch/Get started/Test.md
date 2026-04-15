<hero bg="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80" overlay="dark" opacity="0.8">
  <align type="center">
    <heading size="1"><tw state="once">Arch Linux</tw></heading>
    A simple, lightweight distribution targeted at competent GNU/Linux users.
  </align>
</hero>

<alert type="info">
  <text format="bold">Welcome to the Arch Linux overview!</text> This page provides a comprehensive look at the distribution, its philosophy, and fundamental usage to get you familiar with the ecosystem.
</alert>

<heading size="4"><sym>🐧</sym> The Arch Philosophy</heading>
Arch Linux is built upon five core principles. It emphasizes simplicity, modernity, pragmatism, user centrality, and versatility. By giving you complete control over your system, Arch empowers you to build an OS that perfectly matches your needs.

<grid columns="2">
  <col>
    <card bg-color="transparent" color="accent">
      <heading size="6"><badge color="#1793d1">KISS Principle</badge></heading>
      "Keep It Simple, Stupid." Arch Linux defines simplicity as being without unnecessary additions or modifications. It ships software as originally released by upstream developers with minimal distribution-specific changes or graphical bloat.
    </card>
  </col>
  <col>
    <card bg-color="transparent" color="accent2">
      <heading size="6"><badge color="#8A5020">Rolling Release</badge></heading>
      Arch uses a rolling release model. You install the system once and continuously update it via the package manager. You never have to go through a major "system upgrade" or reinstall for a "new version."
    </card>
  </col>
</grid>

<grid columns="2">
  <col><stat value="13K+" label="Official Packages" trend="+ Active"></stat></col>
  <col><stat value="85K+" label="AUR Packages" trend="+ Community"></stat></col>
</grid>

<hr>

<heading size="4"><sym>⚙️</sym> The Installation Experience</heading>

<alert type="warning">
  <text format="bold">Installation Guide Pending:</text> A complete, step-by-step guide on how to install and configure Arch Linux from scratch will be provided here soon!
</alert>

<collapse heading="What to expect?" color="#1793d1">
Unlike many other user-friendly distributions, Arch Linux does not feature a graphical installer by default. You are dropped into a live terminal environment, and you build your system from the ground up—partitioning disks, installing the base system, and configuring the bootloader entirely by hand.
</collapse>

<hr>

<heading size="4"><sym>📦</sym> Package Management: Pacman</heading>

The pacman package manager is one of the major distinguishing features of Arch Linux. It combines a simple binary package format with an incredibly fast and easy-to-use dependency resolution system.

<tabs>
  <tab name="Sync & Update">
    <terminal user="user@archlinux ~">sudo pacman -Syu</terminal>
    Synchronizes repository databases and updates all outdated packages on your system.
  </tab>
  <tab name="Install Software">
    <terminal user="user@archlinux ~">sudo pacman -S firefox vim git</terminal>
    Installs specific software packages from the official repositories.
  </tab>
  <tab name="Search">
    <terminal user="user@archlinux ~">pacman -Ss search_term</terminal>
    Searches the remote repositories for matching packages.
  </tab>
  <tab name="Remove">
    <terminal user="user@archlinux ~">sudo pacman -Rs package_name</terminal>
    Removes a package and its orphaned dependencies that are not required by other packages.
  </tab>
</tabs>

<alert type="danger">
  <text format="bold">Warning:</text> Never run partial upgrades. This can break your system by creating dependency conflicts between old libraries and new software. Always update the whole system!
</alert>

<hr>

<heading size="4"><sym>🌐</sym> The Arch User Repository (AUR)</heading>

The AUR is a community-driven repository for Arch users. Instead of providing pre-compiled binaries, it contains package descriptions (PKGBUILD files) that allow you to compile a package from source using makepkg and then install it via pacman.

<editor file="PKGBUILD" lang="bash">
pkgname=hello-world
pkgver=1.0
pkgrel=1
pkgdesc="A simple hello world script"
arch=('any')
url="https://github.com/example/hello-world"
license=('GPL')
source=("https://example.com/$pkgname-$pkgver.tar.gz")
sha256sums=('SKIP')

build() {
  cd "$pkgname-$pkgver"
  ./configure --prefix=/usr
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}
</editor>

<box type="solid" color="accent2">
  <sym>💡</sym> <text format="bold">Pro Tip:</text> Most users manage AUR packages using an AUR helper like yay or paru, which automates the downloading, building, and installing process so it feels just like using pacman.
</box>

<hr>

<heading size="4"><sym>📁</sym> System Configuration Structure</heading>

Arch Linux sticks closely to traditional Linux filesystem hierarchies. Because you install everything yourself, it helps to know where your configuration files live:

<filetree type="line">
<li>/
  <ul>
    <li>etc
      <ul>
        <li>fstab <span style="color:var(--text-dim);font-size:0.8em">File systems mount config</span></li>
        <li>hostname <span style="color:var(--text-dim);font-size:0.8em">System network name</span></li>
        <li>pacman.conf <span style="color:var(--text-dim);font-size:0.8em">Package manager config</span></li>
        <li>systemd <span style="color:var(--text-dim);font-size:0.8em">Init system configurations</span></li>
      </ul>
    </li>
    <li>home
      <ul>
        <li>user
          <ul>
            <li>.config <span style="color:var(--text-dim);font-size:0.8em">User-specific app settings</span></li>
            <li>.bashrc <span style="color:var(--text-dim);font-size:0.8em">Shell configuration</span></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>var
      <ul>
        <li>log <span style="color:var(--text-dim);font-size:0.8em">System and application logs</span></li>
      </ul>
    </li>
  </ul>
</li>
</filetree>

<hr>

<heading size="4"><sym>🙌</sym> Credits & Acknowledgements</heading>

<card bg-color="transparent" color="accent">
  This guide and the philosophies discussed are based on the incredible work of the <href to="https://archlinux.org/">Arch Linux Project</href> and its global community. 
  
  <list>
  Original Creator: Judd Vinet.
  Current Maintainers: The Arch Linux Development Team and Trusted Users.
  Documentation: The phenomenal Arch Wiki.
  </list>
  
  <text format="italic">Disclaimer: I am not the owner or creator of Arch Linux. This page serves as a tribute and an educational resource to help new users understand the operating system.</text>
</card>

<br>
<align type="center">
  <btn href="https://archlinux.org/download/" icon="download" type="dotted">Download Arch Linux</btn>
  <btn href="https://wiki.archlinux.org/" icon="book-open" type="floating">Read the Wiki</btn>
</align>
<last>