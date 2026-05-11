<hero overlay="transparent" opacity="0.75" bg="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200">
  <heading size="1">Arch Linux</heading>
  <tw state="once">Keep It Simple, Stupid. The ultimate DIY Linux experience.</tw>
</hero>

<align type="center">
  <badge color="accent">Rolling Release</badge>
  <badge color="accent2">Lightweight</badge>
  <badge color="accent">Bleeding Edge</badge>
</align>

<heading size="3">What is Arch Linux?</heading>
<card>
  <text color="accent"><b>Arch Linux</b></text> is an independently developed, x86-64 general-purpose GNU/Linux distribution that strives to provide the latest stable versions of most software by following a <b>rolling-release model</b>. The default installation is a minimal base system, configured by the user to only add what is purposely required.
  <br><br>
  Instead of hiding the inner workings of the operating system, Arch exposes them. It hands you the building blocks and lets you construct the exact environment you want—nothing more, nothing less.
</card>

<heading size="3">The Core Philosophy</heading>
<grid columns="2">
  <col>
    <box type="solid" color="accent" bg-color="transparent">
      <heading size="5">Simplicity</heading>
      Defined as without unnecessary additions or modifications. Arch ships vanilla software without downstream patching, keeping the system pure and predictable.
    </box>
  </col>
  <col>
    <box type="solid" color="accent2" bg-color="transparent">
      <heading size="5">User Centrality</heading>
      The system is designed to fill the needs of the user contributing to it, rather than appealing to as many users as possible. You are in complete control.
    </box>
  </col>
</grid>

<heading size="3">Who is it for? (And who should use it?)</heading>
Arch Linux isn't for everyone, and that is completely by design. 
<grid columns="2">
  <col>
    <alert type="success">
      <b>You should use Arch if:</b>
      <list>
You want to learn how Linux actually works under the hood.
You prefer building your system from the ground up.
You want bleeding-edge software updates immediately.
You enjoy reading documentation and solving puzzles.
      </list>
    </alert>
  </col>
  <col>
    <alert type="warning">
      <b>You might want to avoid it if:</b>
      <list>
You want an OS that configures itself out-of-the-box.
You are frustrated by terminal-centric troubleshooting.
You prefer rigid, long-term support (LTS) release schedules.
      </list>
    </alert>
  </col>
</grid>

<heading size="3">Is it good for a Daily Driver?</heading>
<tabs>
  <tab name="The Short Answer">
    <box bg-color="transparent">
      <b>Yes!</b> Once configured, Arch is incredibly stable, fast, and highly tailored to your exact hardware and workflow. Because you only install what you need, there is zero bloat weighing down your daily tasks, whether you're coding, gaming, or just browsing.
    </box>
  </tab>
  <tab name="The Caveat">
    <box bg-color="transparent">
      Because it is a rolling release, occasional <b>manual interventions</b> are required when updating. If you ignore update warnings on the Arch homepage or update blindly after months of inactivity, things can occasionally break. Routine maintenance and reading the news is part of the daily driver experience here.
    </box>
  </tab>
</tabs>

<heading size="3">Frequently Asked Questions</heading>
<collapse heading="Is Arch Linux incredibly hard to install?" color="accent">
  Historically, yes, as it required manual partitioning and bootstrapping via the command line. However, the official <text color="accent2"><b>archinstall</b></text> script now provides a guided, menu-driven installation process that makes it much more accessible for intermediate users.
</collapse>

<collapse heading="What is the AUR?" color="accent">
  The <b>Arch User Repository (AUR)</b> is a community-driven repository. It contains package descriptions that allow you to compile a package from source and install it seamlessly. It is one of Arch's greatest strengths, housing virtually every piece of software ever written for Linux.
</collapse>

<collapse heading="Will updates constantly break my system?" color="accent">
  "Breakage" is often overstated. If you update regularly, check the Arch news before major system upgrades, and use a bit of common sense, an Arch system can run flawlessly for years without requiring a reinstall.
</collapse>

<hr>

<heading size="3">Credits & Community</heading>
<quote author="The Arch Community" role="Contributors, Maintainers & Users" author="archlinux.org">
  Arch Linux survives and thrives because of its dedicated community, the packaging maintainers, and the unparalleled Arch Wiki. Remember: <b>RTFM</b> (Read The Fantastic Manual) is a term of endearment here!
</quote>

<align type="center">
  <btn href="https://wiki.archlinux.org/" icon="book-open" type="floating">Read the Arch Wiki</btn>
  <btn href="https://archlinux.org/" icon="globe" type="floating">Official Website</btn>
</align>
