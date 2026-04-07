<search>

<heading size="1" align="center">The Complete 25+ Triggers Masterclass <badge color="#3b82f6">v3.0</badge></heading>

<align type="center">
<text color="dim" type="italic">This is the definitive stress test. Every custom tag, every attribute, every variation. If it exists in the engine, it's rendered below.</text>
</align>

---

<heading size="2" align="left">1. Headings & Alignment (`<heading>`, `<align>`)</heading>

<heading size="1" align="left">Heading Size 1 (Left)</heading>
<heading size="3" align="center">Heading Size 3 (Center)</heading>
<heading size="5" align="right">Heading Size 5 (Right)</heading>
<heading size="7" align="left">Heading Size 7</heading>
<heading size="10" align="left">Heading Size 10 (Smallest)</heading>

<align type="left">This text is explicitly aligned to the left using the align tag.</align>
<align type="center">This text is explicitly aligned to the center using the align tag.</align>
<align type="right">This text is explicitly aligned to the right using the align tag.</align>

---

<heading size="2" align="left">2. Advanced Text & Typography (`<text>`, `<tw>`, `<sym>`, `<href>`)</heading>

**The Text Tag Variations:**
1. <text color="accent" type="bold">Bold Accent Text</text>
2. <text color="#ff00ff" type="italic">Magenta Italic Text</text>
3. <text color="shape2" type="underline">Underlined Shape2 Text</text>
4. <text bg-color="accent" color="text">Text with Accent Background</text>
5. <text color-light="#000000" color-dark="#ffffff" bg-color-light="#e2e8f0" bg-color-dark="#1e293b" type="bold:italic">Adaptive Text (Changes completely based on Light/Dark mode!)</text>

**Typewriter Effects:**
1. <tw state="continuous" color="accent" type="bold">This typewriter loops continuously forever.</tw>
2. <tw state="once" color="shape3" type="italic">This typewriter plays once and stays on screen.</tw>

**Symbols & Links:**
Here is a right arrow symbol: <sym>&rarr;</sym> and a heart <sym>&hearts;</sym>.
Check out this custom external link: <href heading="Go to GitHub">https://github.com</href>

---

<heading size="2" align="left">3. Interactive UI Elements (`<alert>`, `<tooltip>`, `<key>`, `<badge>`)</heading>

**Alert Variations:**
<alert type="info">**Info:** This is the `info` alert type. Use it for general notes.</alert>
<alert type="success">**Success:** This is the `success` alert type. Use it for confirmations.</alert>
<alert type="warning">**Warning:** This is the `warning` alert type. Use it to urge caution.</alert>
<alert type="danger" id="danger-test">**Danger:** This is the `danger` alert type. Use it for critical destructive warnings.</alert>

**Badges:**
<heading size="4" align="left">Feature Name <badge color="#10b981">Stable</badge> <badge color="#f59e0b">Beta</badge> <badge color="#ef4444">Deprecated</badge></heading>

**Tooltips:**
Hover over this <tooltip text="This is the hidden text inside the glassmorphism tooltip!">magical word</tooltip> to see the tooltip in action.

**Mechanical Keys:**
Press <key>Ctrl</key> + <key>Shift</key> + <kbd>P</kbd>. 
*(Hover over them, click them, or literally press P, Shift, and Control on your real keyboard right now to hear the click!)*

---

<heading size="2" align="left">4. Layout Structures (`<tabs>`, `<steps>`, `<filetree>`)</heading>

**Content Tabs:**
<tabs>
<tab name="Python">
<code>print("Hello World")</code>
</tab>
<tab name="JavaScript">
<code>console.log("Hello World");</code>
</tab>
<tab name="C++">
<code>std::cout << "Hello World";</code>
</tab>
</tabs>

**Step-by-Step Timeline:**
<steps>
<step>Initialize the project: `npm init -y`</step>
<step>Install packages: `npm i express cors`</step>
<step>Run the server: `node index.js`</step>
</steps>

**File Tree:**
<filetree>
<ul>
  <li>project-root
    <ul>
      <li>src
        <ul>
          <li>app.js</li>
          <li>style.css</li>
        </ul>
      </li>
      <li>package.json</li>
    </ul>
  </li>
</ul>
</filetree>

---

<heading size="2" align="left">5. Expandables & Boxes (`<collapse>`, `<collapse2>`, `<box>`, `<list>`)</heading>

**Collapses:**
<collapse heading="1. Standard Colored Collapse" color="accent" bg-color="accent">
This is the standard collapse with custom border and background colors matching the theme accent.
</collapse>

<collapse2 heading="2. Clean Collapse (All HRs)" unextendedhr="true" extendedhr="true">
This is the minimalist collapse that generates a horizontal line above it, and another line below the content when expanded.
</collapse2>

<collapse2 heading="3. Clean Collapse (No HRs)" unextendedhr="false" extendedhr="false">
Minimalist collapse with absolutely no dividing lines.
</collapse2>

**Logic Boxes:**
<box color="shape1" type="solid">
This is a **solid** box using the `shape1` color variable.
</box>

<box color="shape2" type="dotted">
This is a **dotted** box using the `shape2` color variable.
</box>

**Custom Lists:**
<list type="number">
First numbered item
Second numbered item
Third numbered item
</list>

<list type="bullet">
First bullet item
Second bullet item
</list>

---

<heading size="2" align="left">6. Media & External Embeds (`<image>`, `<video>`, `<audio>`, `<embed>`)</heading>

*Note: These use public test URLs to verify the tags render the HTML media players correctly.*

**Image Tag:**
<image url="https://picsum.photos/800/300">Placeholder Image</image>

**Video Tag:**
<video url="https://www.w3schools.com/html/mov_bbb.mp4">Sample Video</video>

**Audio Tag:**
<audio url="https://www.w3schools.com/html/horse.ogg">Sample Audio</audio>

**Embed YouTube:**
<embed type="youtube" id="dQw4w9WgXcQ"></embed>

**Embed Spotify:**
<embed type="spotify" id="track/4cOdK2wGLETKBW3PvgPWqT"></embed>

**Embed CodePen:**
<embed type="codepen" id="sd6387400-lang/pen/ExOvoqQ"></embed>

---

<heading size="2" align="left">7. Navigation & Local Search (`<page>`, `<search do="...">`, `<last>`)</heading>

**In-Page ID Targeted Search:**
Use this search bar to search *only* inside the Danger alert located in Section 3 of this page!
<search do="danger-test">

**Page Routing Triggers:**
<align type="center">
<page to="folder/file" type="default">Type: Default</page>
<page to="folder/file" type="box">Type: Box</page>
<page to="folder/file" type="dotted-box">Type: Dotted-Box</page>
<page to="folder/file" type="glowing">Type: Glowing</page>
<page to="folder/file" type="floating">Type: Floating</page>
</align>

**Auto-Pagination (The `<last>` tag):**
*The buttons below are dynamically generated based on this file's position in your file structure!*
<last>