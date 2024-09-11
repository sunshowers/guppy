searchState.loadedDescShard("determinator", 0, "Figure out what packages in a Rust workspace changed …\nDetermine target dependencies from changed files and …\nThe result of a <code>Determinator</code> computation.\nA store for null-separated paths.\nAdds a list of changed paths. This list is used as a …\nThe packages that were affected, directly or indirectly. …\nUses the old and new sets and the list of changed files to …\nReturns the default Cargo options used by the determinator.\nError types returned by the determinator.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new instance of <code>Utf8Paths0</code> from a <code>Vec&lt;u8&gt;</code>, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterates over the paths in this buffer.\nReturns what <em>would</em> happen if a given path was added to the …\nCreates a new instance of <code>Determinator</code> with old and new …\nCreates a new instance of <code>Utf8Paths0</code> from a string with …\nCreates a new instance of <code>Utf8Paths0</code>, converting <code>/</code> to <code>\\</code> on …\nThe packages that were marked changed because a file …\nCustom rules for the target determinator.\nConfigures Cargo options.\nConfigures features-only packages that are used in build …\nProcesses and configures determinator rules.\nThe packages that were marked changed becuase a simulated …\nAn error occurred while parsing a glob.\nAn error occurred while resolving a reference in guppy.\nAn error that occurred while resolving a set of …\nThe kind of error that occurred while parsing a set of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the kind of error that occurred.\nReturns the index of the determinator rule that failed to …\nThe error that occurred while parsing the glob.\nThe glob that failed to parse, if one was present.\nMark the entire tree as changed. Skip over all further …\nThe path was matched to a package through inspecting the …\nThe custom path rule at this index.\nContains the default rules in a TOML file format.\nThe default path rule at this index.\nThe set of packages to mark as changed.\nThe operation to perform after applying the rule.\nRules for the target determinator.\nContinue to apply further rules.\nThe path wasn’t matched to a rule or a nearby package, …\nThe package rule at this index.\nPackage-based rules for the determinator.\nMark the workspace packages with the given names as …\nThe result of matching a file path against a determinator.\nPath-based rules for the determinator.\nThe index of a rule.\nThe path matched a rule and ancestor-based matching was …\nThe path matched a rule, causing everything to be rebuilt.\nSkip all further processing of this path.\nSkip rule processing but continue attempting to match the …\nReturns the default rules.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe globs to match against.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe set of packages to mark as changed.\nThe set of packages to mark as changed.\nThe package names to match against.\nA list of rules that each affected package is matched …\nDeserializes determinator rules from the given TOML string.\nA list of rules that each changed file path is matched …\nThe operation to perform after applying the rule. Set to …")