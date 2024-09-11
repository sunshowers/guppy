searchState.loadedDescShard("target_spec", 0, "Evaluate <code>Cargo.toml</code> target specifications against platform …\nMatch all features.\nA complex expression.\nOnly match the specified features.\nA plain string representing a triple.\nA platform to evaluate target specifications against.\nA set of target features to match.\nA parsed target specification or triple string, as found …\nA target expression, parsed from a string beginning with …\nA plain string as contained within a …\nA single, specific target, uniquely identified by a triple.\nThe target features are unknown.\nAdds a set of flags to accept.\nReturns the string as parsed.\nReturns the string corresponding to this triple.\nReturns the current platform, as detected at build time.\nErrors returned by <code>target-spec</code>.\nEvaluates the given spec against the provided target and …\nEvaluates this specification against the given platform.\nEvaluates this expression against the given platform.\nEvaluates this triple against the given platform.\nReturns the string that was parsed into <code>self</code>.\nCreates a new <code>TargetFeatures</code> which matches some features.\nA version of <code>strategy</code> that allows target triples to be …\nReturns the set of flags enabled for this platform.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new standard platform from a <code>Triple</code> and target …\nReturns true if this flag was set with <code>add_flags</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if this is a builtin platform.\nReturns true if this is a triple corresponding to a …\nReturns true if this is a custom platform.\nReturns true if this is a custom platform.\nReturns true if this is a heuristically determined …\nReturns true if this triple was heuristically determined.\nReturns true if an input looks like it’s known and …\nReturns true if this is a standard platform.\nReturns true if this is a triple corresponding to a …\nReturns true if the input will be parsed as a target …\nReturns true if the input will be understood to be a plain …\nReturns <code>Some(true)</code> if this feature is a match, <code>Some(false)</code> …\nCreates a new standard <code>Platform</code> from the given triple and …\nCreates a new target spec from a string.\nCreates a new <code>TargetSpecExpression</code> from a string beginning …\nCreates a new instance of <code>TargetSpecPlainString</code>, after …\nCreates a new <code>Triple</code> from a triple string.\nCreates a new custom <code>Platform</code> from the given triple, …\nCreates a new custom <code>Triple</code> from the given triple string …\nCreates a new standard <code>Platform</code> from the given triple and …\nCreates a new <code>Triple</code> from a triple string.\nCreates a new <code>TargetFeatures</code> which doesn’t match any …\nGiven a way to generate <code>TargetFeatures</code> instances, this …\nSerialized versions of platform and target features.\nReturns the set of target features for this platform.\nConverts this <code>Platform</code> to a serializable form.\nReturns the underlying <code>Triple</code>.\nReturns the target triple string for this platform.\nAn error occurred while creating a custom platform.\nAn error occurred while creating a custom triple (in the …\nAn error returned while creating a custom platform.\nAn error occurred while deserializing serde data.\nThe expression does not contain any valid terms\nAn error that happened during <code>target-spec</code> parsing or …\nAn error returned in case a <code>TargetExpression</code> cannot be …\nThe kind of <code>ExpressionParseError</code> that occurred.\nThe characters are not valid in an cfg expression\nA <code>cfg()</code> expression was invalid and could not be parsed.\nA <code>target_has_atomic</code> predicate didn’t correctly parse.\nFailed to parse an integer value\nnot() takes exactly 1 predicate, unlike all() and any()\nThe provided plain string (in the position that a <code>cfg()</code> …\nThe root cfg() may only contain a single predicate\nAn error that occurred while parsing a …\nAn error returned while parsing a single target.\nA custom platform was asked to be created, but the <code>custom</code> …\nAn opening parens was unmatched with a closing parens\nAn opening quotes was unmatched with a closing quotes\nFound an unexpected term, which wasn’t one of the …\nAn element was not part of the builtin information in rustc\nThe provided platform triple was unknown.\nA closing parens was unmatched with an opening parens\nA closing quotes was unmatched with an opening quotes\nThe character index (in bytes) at which the input failed …\nThe character that failed to parse.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe string we tried to parse.\nThe input we failed to parse.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe kind of error that occurred.\nReturns the range of characters in the input that resulted …\nThe range of characters in the original string that …\nReturns the triple string that could not be parsed.\nThe deserialization error that occurred.\nThe specified triple.\nThe list of expected terms.\nMatch all features.\nOnly match the specified features.\nAn owned, serializable version of <code>Platform</code>.\nAn owned, serializable version of <code>TargetFeatures</code>.\nThe target features are unknown.\nJSON for custom platforms.\nThe flags enabled.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>PlatformSummary</code> instance from a platform.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>PlatformSummary</code> with the provided triple and …\nCreates a new <code>TargetFeaturesSummary</code> from a <code>TargetFeatures</code>.\nThe target features used.\nConverts <code>self</code> to a <code>Platform</code>.\nConverts <code>self</code> to a <code>TargetFeatures</code> instance.\nThe platform triple.\nAdds flags for this platform.\nIf this represents a custom platform, sets the target …\nSets the target features for this platform.")