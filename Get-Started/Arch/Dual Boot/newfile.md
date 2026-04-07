<search>

<heading size="1" align="center">UI Component Library <badge color="#8b5cf6">v3.0</badge></heading>

<align type="center">
<text color="dim" type="italic">Welcome to the official design system showcase. Below is a live rendering of every custom tag and component available in this documentation engine.</text>
</align>

---

<heading size="2" align="left">1. Alerts & Notifications</heading>
<alert type="info">**Information:** Use this to highlight general tips or non-critical information for the user.</alert>
<alert type="success">**Success:** Excellent for confirming an action, like a successful installation or setup.</alert>
<alert type="warning">**Warning:** Grabs attention to prevent mistakes, like warning about version incompatibilities.</alert>
<alert type="danger" id="danger-alert">**Danger:** Critical alerts! Use this for destructive actions like deleting databases.</alert>

<heading size="4" align="left">Targeted Search</heading>
Search *only* inside the Danger alert above using this specific component:
<search do="danger-alert">

---

<heading size="2" align="left">2. Interactive Elements</heading>

**Tooltips:**
Wrap complex terminology in a <tooltip text="This is a sleek, glassmorphism popup over your text!">tooltip</tooltip> so users can learn more without leaving the paragraph.

**Mechanical Keyboard Keys:**
Press <key>Ctrl</key> + <key>Shift</key> + <kbd>V</kbd> to open the command palette.
*(Hover over these, tap them on mobile, or physically press 'V' or 'Shift' on your keyboard to test the sound and animation!)*

**Status Badges:**
<heading size="5" align="left">API Endpoints <badge color="#10b981">Stable</badge> <badge color="#f59e0b">Beta v2</badge> <badge color="#ef4444">Deprecated</badge></heading>

---

<heading size="2" align="left">3. Layout & Structure</heading>

<heading size="4" align="left">Content Tabs</heading>
<tabs>
<tab name="Windows">
1. Open the Start Menu.
2. Type `powershell` and press <key>Enter</key>.
</tab>
<tab name="macOS">
1. Press <kbd>Cmd</kbd> + <kbd>Space</kbd>.
2. Type `Terminal` and hit return.
</tab>
<tab name="Linux">
Simply press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>.
</tab>
</tabs>

<heading size="4" align="left">Step-by-Step Timeline</heading>
<steps>
<step>First, <text type="bold" color="accent">initialize</text> your workspace using `npm init -y`.</step>
<step>Next, install the required dependencies by running `npm install express cors`.</step>
<step>Finally, start your local development server with `node index.js`.</step>
</steps>

<heading size="4" align="left">File Tree Explorer</heading>
<filetree>
<ul>
  <li>my-project
    <ul>
      <li>src
        <ul>
          <li>components
            <ul>
              <li>Button.js</li>
              <li>Header.css</li>
            </ul>
          </li>
          <li>App.js</li>
        </ul>
      </li>
      <li>public
        <ul>
          <li>index.html</li>
        </ul>
      </li>
      <li>package.json</li>
      <li>README.md</li>
    </ul>
  </li>
</ul>
</filetree>

---

<heading size="2" align="left">4. Containers & Expandables</heading>

<heading size="4" align="left">Logic Boxes</heading>
<box color="shape1" type="solid">
**Solid Box:** Great for highlighting important code snippets or logical concepts using your theme's shape colors.
</box>

<box color="shape2" type="dotted">
**Dotted Box:** A softer variation for secondary information or "did you know" facts.
</box>

<heading size="4" align="left">Collapsible Sections</heading>
<collapse heading="Standard Colored Collapse" color="accent" bg-color="accent">
This is the standard collapse with custom border and background colors matching the theme accent. Perfect for FAQs.
</collapse>

<collapse2 heading="Clean Collapse Variant" unextendedhr="true" extendedhr="true">
This is the minimalist collapse that generates a horizontal line above it, and another line below the content when expanded.
</collapse2>

---

<heading size="2" align="left">5. Typography & Formatting</heading>

Here is the famous typewriter effect: <tw state="continuous" color="accent" type="bold">Hello, World! Welcome to the docs.</tw>

**Adaptive Text Styles:**
1. <text color="accent" type="bold">Bold Accent Text</text>
2. <text color="#ff00ff" type="italic">Magenta Italic Text</text>
3. <text bg-color="accent" color="text">Text with Accent Background</text>
4. <text color-light="#000000" color-dark="#ffffff" bg-color-light="#e2e8f0" bg-color-dark="#1e293b" type="bold:italic">Adaptive Text (Changes perfectly based on Light/Dark mode!)</text>

**Symbols & Links:**
Use symbols like <sym>&rarr;</sym> or <sym>&hearts;</sym>. 
Or use custom external links like <href heading="GitHub Repository">https://github.com</href>.

**Lists:**
<list type="number">
First numbered item
Second numbered item
</list>
<list type="bullet">
First bullet item
Second bullet item
</list>

**Code Blocks:**
<code>
function massiveBrain() {
    console.log("This UI is absolutely incredible.");
    return true;
}
</code>

---

<heading size="2" align="left">6. Media & Embeds</heading>

<heading size="4" align="left">Native Media</heading>
<image url="https://picsum.photos/800/300">Placeholder Image</image>
<video url="https://www.w3schools.com/html/mov_bbb.mp4">Sample Video</video>
<audio url="https://www.w3schools.com/html/horse.ogg">Sample Audio</audio>

<heading size="4" align="left">External Embeds</heading>
<embed type="youtube" id="dQw4w9WgXcQ"></embed>
<embed type="spotify" id="track/4cOdK2wGLETKBW3PvgPWqT"></embed>

---

<heading size="2" align="left">7. Page Routing & Navigation</heading>

<align type="center">
<page to="folder-name/file-name" type="default">Default Button</page>
<page to="folder-name/file-name" type="box">Box Button</page>
<page to="folder-name/file-name" type="dotted-box">Dotted Button</page>
<page to="folder-name/file-name" type="glowing">Glowing Button</page>
<page to="folder-name/file-name" type="floating">Floating Button</page>
</align>

---

<heading size="2" align="center">End of Showcase</heading>
<align type="center">
<text color="dim">The buttons below are automatically generated based on the file system!</text>
</align>

<last>