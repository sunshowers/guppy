(function() {
    var type_impls = Object.fromEntries([["nu_ansi_term",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#129-205\">source</a><a href=\"#impl-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, S: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.style_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#134-136\">source</a><h4 class=\"code-header\">pub const fn <a href=\"nu_ansi_term/struct.AnsiGenericString.html#tymethod.style_ref\" class=\"fn\">style_ref</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"nu_ansi_term/struct.Style.html\" title=\"struct nu_ansi_term::Style\">Style</a></h4></section></summary><div class=\"docblock\"><p>Directly access the style</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.style_ref_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#139-141\">source</a><h4 class=\"code-header\">pub fn <a href=\"nu_ansi_term/struct.AnsiGenericString.html#tymethod.style_ref_mut\" class=\"fn\">style_ref_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"nu_ansi_term/struct.Style.html\" title=\"struct nu_ansi_term::Style\">Style</a></h4></section></summary><div class=\"docblock\"><p>Directly access the style mutably</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_str\" class=\"method\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#144-146\">source</a><h4 class=\"code-header\">pub fn <a href=\"nu_ansi_term/struct.AnsiGenericString.html#tymethod.as_str\" class=\"fn\">as_str</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;S</a></h4></section></summary><div class=\"docblock\"><p>Directly access the underlying string</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.title\" class=\"method\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#163-172\">source</a><h4 class=\"code-header\">pub fn <a href=\"nu_ansi_term/struct.AnsiGenericString.html#tymethod.title\" class=\"fn\">title</a>&lt;I&gt;(s: I) -&gt; Self<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, S&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Produce an ANSI string that changes the title shown\nby the terminal emulator.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>nu_ansi_term::AnsiGenericString;\n<span class=\"kw\">let </span>title_string = AnsiGenericString::title(<span class=\"string\">\"My Title\"</span>);\n<span class=\"macro\">println!</span>(<span class=\"string\">\"{}\"</span>, title_string);</code></pre></div>\n<p>Should produce an empty line but set the terminal title.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hyperlink\" class=\"method\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#190-196\">source</a><h4 class=\"code-header\">pub fn <a href=\"nu_ansi_term/struct.AnsiGenericString.html#tymethod.hyperlink\" class=\"fn\">hyperlink</a>&lt;I&gt;(self, url: I) -&gt; Self<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, S&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Cause the styled ANSI string to link to the given URL</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>nu_ansi_term::Color::Red;\n\n<span class=\"kw\">let </span>link_string = Red.paint(<span class=\"string\">\"a red string\"</span>).hyperlink(<span class=\"string\">\"https://www.example.com\"</span>);\n<span class=\"macro\">println!</span>(<span class=\"string\">\"{}\"</span>, link_string);</code></pre></div>\n<p>Should show a red-painted string which, on terminals\nthat support it, is a clickable hyperlink.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.url_string\" class=\"method\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#199-204\">source</a><h4 class=\"code-header\">pub fn <a href=\"nu_ansi_term/struct.AnsiGenericString.html#tymethod.url_string\" class=\"fn\">url_string</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;S</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Get any URL associated with the string</p>\n</div></details></div></details>",0,"nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#54-65\">source</a><a href=\"#impl-Clone-for-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, S: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"docblock\"><p>Cloning an <code>AnsiGenericString</code> will clone its underlying string.</p>\n<h4 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h4>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>nu_ansi_term::AnsiString;\n\n<span class=\"kw\">let </span>plain_string = AnsiString::from(<span class=\"string\">\"a plain string\"</span>);\n<span class=\"kw\">let </span>clone_string = plain_string.clone();\n<span class=\"macro\">assert_eq!</span>(clone_string, plain_string);</code></pre></div>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#58-64\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#33\">source</a><a href=\"#impl-Debug-for-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#33\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CI%3E-for-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#115-127\">source</a><a href=\"#impl-From%3CI%3E-for-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, I, S: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, S&gt;&gt;,\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#120-126\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(input: I) -&gt; <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<I>","nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#33\">source</a><a href=\"#impl-PartialEq-for-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#33\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"],["<section id=\"impl-Eq-for-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#33\">source</a><a href=\"#impl-Eq-for-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section>","Eq","nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"],["<section id=\"impl-StructuralPartialEq-for-AnsiGenericString%3C'a,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nu_ansi_term/display.rs.html#33\">source</a><a href=\"#impl-StructuralPartialEq-for-AnsiGenericString%3C'a,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, S: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"nu_ansi_term/struct.AnsiGenericString.html\" title=\"struct nu_ansi_term::AnsiGenericString\">AnsiGenericString</a>&lt;'a, S&gt;<div class=\"where\">where\n    &lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section>","StructuralPartialEq","nu_ansi_term::display::AnsiString","nu_ansi_term::display::AnsiByteString"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[22169]}