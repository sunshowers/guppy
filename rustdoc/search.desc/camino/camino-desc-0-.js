searchState.loadedDescShard("camino", 0, "UTF-8 encoded paths.\nA reference to the current directory, i.e., <code>.</code>.\nDevice namespace prefix, e.g., <code>\\\\.\\COM42</code>.\nPrefix <code>C:</code> for the given disk drive.\nA possible error value while converting a <code>PathBuf</code> to a …\nA possible error value while converting a <code>Path</code> to a …\nAn iterator over the <code>Utf8Component</code>s of a <code>Utf8Path</code>, as <code>str</code> …\nA normal component, e.g., <code>a</code> and <code>b</code> in <code>a/b</code>.\nA reference to the parent directory, i.e., <code>..</code>.\nA Windows path prefix, e.g., <code>C:</code> or <code>\\\\server\\share</code>.\nIterator over the entries in a directory.\nThe root directory component, appears after any prefix and …\nPrefix using Windows’ <em><strong>U</strong>niform <strong>N</strong>aming <strong>C</strong>onvention</em>, e.g. …\nAn iterator over <code>Utf8Path</code> and its ancestors.\nA single component of a path.\nAn iterator over the <code>Utf8Component</code>s of a <code>Utf8Path</code>.\nEntries returned by the <code>ReadDirUtf8</code> iterator.\nA slice of a UTF-8 path (akin to <code>str</code>).\nAn owned, mutable UTF-8 path (akin to <code>String</code>).\nWindows path prefixes, e.g., <code>C:</code> or <code>\\\\server\\share</code>.\nA structure wrapping a Windows path prefix as well as its …\nVerbatim prefix, e.g., <code>\\\\?\\cat_pics</code>.\nVerbatim disk prefix, e.g., <code>\\\\?\\C:</code>.\nVerbatim prefix using Windows’ <em><strong>U</strong>niform <strong>N</strong>aming <strong>C</strong>onvention</em>,\nProduces an iterator over <code>Utf8Path</code> and its ancestors.\nYields the underlying <code>OsStr</code> slice.\nExtracts the underlying <code>OsStr</code> slice.\nReturns the raw <code>OsStr</code> slice for this prefix.\nCoerces to a <code>Utf8Path</code> slice.\nExtracts a slice corresponding to the portion of the path …\nExtracts a slice corresponding to the portion of the path …\nReturns the <code>Path</code> slice that was attempted to be converted …\nConverts a <code>Utf8Path</code> to a <code>Path</code>.\nYields the underlying <code>str</code> slice.\nExtracts the underlying <code>str</code> slice.\nReturns the <code>str</code> slice for this prefix.\nReturns the canonical, absolute form of the path with all …\nReturns the canonical, absolute form of the path with all …\nInvokes <code>capacity</code> on the underlying instance of <code>PathBuf</code>.\nInvokes <code>clear</code> on the underlying instance of <code>PathBuf</code>.\nProduces an iterator over the <code>Utf8Component</code>s of the path.\nDetermines whether <code>child</code> is a suffix of <code>self</code>.\nReturns <code>true</code> if the path points at an existing entity.\nExtracts the extension of <code>self.file_name</code>, if possible.\nReturns the final component of the <code>Utf8Path</code>, if there is …\nReturns the bare file name of this directory entry without …\nExtracts the stem (non-extension) portion of <code>self.file_name</code>…\nReturns the file type for the file that this entry points …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a <code>Path</code> to a <code>Utf8Path</code>.\nCreates a new <code>Utf8PathBuf</code> from a <code>PathBuf</code> containing valid …\nFetches a <code>FromPathError</code> for more about the conversion …\nReturns <code>true</code> if the <code>Utf8Path</code> has a root.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>Utf8PathBuf</code> into a boxed <code>Utf8Path</code>.\nReturns the original <code>fs::DirEntry</code> within this <code>Utf8DirEntry</code>.\nConverts self into a <code>std::io::Error</code> with kind <code>InvalidData</code>.\nConverts self into a <code>std::io::Error</code> with kind <code>InvalidData</code>.\nConsumes the <code>Utf8PathBuf</code>, yielding its internal <code>OsString</code> …\nReturns the full path to the file that this entry …\nConverts a <code>Box&lt;Utf8Path&gt;</code> into a <code>Utf8PathBuf</code> without …\nReturns the <code>PathBuf</code> that was attempted to be converted to …\nConverts a <code>Utf8PathBuf</code> to a <code>PathBuf</code>.\nConsumes the <code>Utf8PathBuf</code>, yielding its internal <code>String</code> …\nReturns <code>true</code> if the <code>Utf8Path</code> is absolute, i.e., if it is …\nReturns <code>true</code> if the path exists on disk and is pointing at …\nReturns <code>true</code> if the path exists on disk and is pointing at …\nReturns <code>true</code> if the <code>Utf8Path</code> is relative, i.e., not …\nReturns <code>true</code> if the path exists on disk and is pointing at …\nDetermines if the prefix is verbatim, i.e., begins with …\nProduces an iterator over the path’s components viewed …\nCreates an owned <code>Utf8PathBuf</code> with <code>path</code> adjoined to <code>self</code>.\nCreates an owned <code>PathBuf</code> with <code>path</code> adjoined to <code>self</code>.\nReturns the parsed prefix data.\nQueries the file system to get information about a file, …\nReturns the metadata for the file that this entry points …\nDirectly wraps a string slice as a <code>Utf8Path</code> slice.\nAllocates an empty <code>Utf8PathBuf</code>.\nReturns the <code>Path</code> without its final component, if there is …\nReturns the full path to the file that this entry …\nTruncates <code>self</code> to <code>self.parent</code>.\nExtends <code>self</code> with <code>path</code>.\nReturns an iterator over the entries within a directory.\nReturns an iterator over the entries within a directory.\nReads a symbolic link, returning the file that the link …\nReads a symbolic link, returning the file that the link …\nInvokes <code>reserve</code> on the underlying instance of <code>PathBuf</code>.\nInvokes <code>reserve_exact</code> on the underlying instance of <code>PathBuf</code>…\nUpdates <code>self.extension</code> to <code>extension</code>.\nUpdates <code>self.file_name</code> to <code>file_name</code>.\nInvokes <code>shrink_to</code> on the underlying instance of <code>PathBuf</code>.\nInvokes <code>shrink_to_fit</code> on the underlying instance of <code>PathBuf</code>…\nDetermines whether <code>base</code> is a prefix of <code>self</code>.\nReturns a path that, when joined onto <code>base</code>, yields <code>self</code>.\nQueries the metadata about a file without following …\nConverts a <code>Utf8Path</code> to an owned <code>Utf8PathBuf</code>.\nReturns <code>Ok(true)</code> if the path points at an existing entity.\nInvokes <code>try_reserve</code> on the underlying instance of <code>PathBuf</code>.\nInvokes <code>try_reserve_exact</code> on the underlying instance of …\nCreates a new <code>Utf8PathBuf</code> with a given capacity used to …\nCreates an owned <code>Utf8PathBuf</code> like <code>self</code> but with the given …\nCreates an owned <code>Utf8PathBuf</code> like <code>self</code> but with the given …")